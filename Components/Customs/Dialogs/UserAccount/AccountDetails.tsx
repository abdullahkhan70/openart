import {
  View,
  Text,
  useColorScheme,
  PixelRatio,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DummyCurrentBiddingNFT} from '../../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from './styles';
import {Colors} from '../../../Utils/Colors';
import {DummyDiscoverCreator} from '../../../Utils/Lists/DummyDiscoverCreator';
import {Lables} from '../../../Utils/Strings';
import Icon from '../../Icon';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  selectUserAccountSnackbar,
  setCopyUserEthAddress,
  setUserAccountSnackbar,
} from '../../../Utils/Redux/modalSlice';
import Clipboard from '@react-native-clipboard/clipboard';
import {useWalletConnect} from '@walletconnect/react-native-dapp';

const AccountDetails: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selUserAccountSnackbar = useSelector(selectUserAccountSnackbar);
  const scheme = useColorScheme();
  const connector = useWalletConnect();
  const copyToClipboard = () => {
    Clipboard.setString(connector.accounts[0]);
    reduxDispatch(setUserAccountSnackbar(Boolean(!selUserAccountSnackbar)));
  };

  return (
    <>
      <View
        style={{
          padding: PixelRatio.getPixelSizeForLayoutSize(10),
          flexDirection: 'row',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
        }}>
        <Image
          style={styles.profileImage}
          source={DummyCurrentBiddingNFT[0]?.artImage}
        />
        <View
          style={{
            alignItems: 'center',
            marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
            marginTop: PixelRatio.getPixelSizeForLayoutSize(7),
          }}>
          <Text
            style={[
              styles.userHeaderUserName,
              {color: scheme == 'light' ? Colors.BLACK : Colors.BACKGROUND},
            ]}>
            {DummyDiscoverCreator[0]?.creatorName}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.userHeaderEthAddress,
                {
                  color:
                    scheme == 'light'
                      ? Colors.DISCOVERMAINTEXT
                      : Colors.VIEWALLDARK,
                },
              ]}
              numberOfLines={1}>
              {connector.accounts}
            </Text>
            <TouchableOpacity>
              <Icon
                style={{
                  marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
                  marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
                }}
                onPress={copyToClipboard}
                name={scheme == 'light' ? 'copy_light' : 'copy_dark'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AccountDetails;
