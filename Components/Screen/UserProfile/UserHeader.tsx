import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  PixelRatio,
  Image,
  useColorScheme,
} from 'react-native';
import React, {Fragment} from 'react';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from './styles';
import Icon from '../../Customs/Icon';
import {DummyDiscoverCreator} from '../../Utils/Lists/DummyDiscoverCreator';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
import Clipboard from '@react-native-clipboard/clipboard';
import {Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  setCopyUserEthAddress,
} from '../../Utils/Redux/modalSlice';
import {useWalletConnect} from '@walletconnect/react-native-dapp';

type userHeaderProps = {
  showButtons: boolean;
};
const UserHeader: React.FC<userHeaderProps> = ({
  showButtons = true,
}: userHeaderProps) => {
  const reduxDispatch = useDispatch();
  const selCopyUserEthAddress = useSelector(selectCopyUserEthAddress);
  const scheme = useColorScheme();
  const connector = useWalletConnect();
  const copyToClipboard = () => {
    Clipboard.setString(connector.accounts[0]);
    reduxDispatch(setCopyUserEthAddress(Boolean(!selCopyUserEthAddress)));
  };
  const onDismissSnackBar = () => {
    reduxDispatch(setCopyUserEthAddress(Boolean(false)));
  };
  return (
    <Fragment>
      <ImageBackground
        style={styles.userHeaderImage}
        source={DummyCurrentBiddingNFT[0].artImage}>
        {showButtons && (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              padding: PixelRatio.getPixelSizeForLayoutSize(4),
            }}>
            <TouchableOpacity style={styles.userProfileOptionsBtn}>
              <Icon name="option_btn" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.userProfileDownloadBtn}>
              <Icon name="download" />
            </TouchableOpacity>
          </View>
        )}
        <Image
          style={[
            styles.userHeaderProfileImage,
            {
              marginTop: showButtons
                ? PixelRatio.getPixelSizeForLayoutSize(30)
                : PixelRatio.getPixelSizeForLayoutSize(30),
            },
          ]}
          source={DummyCurrentBiddingNFT[0]?.profile_image[0]}
        />
      </ImageBackground>
      <View
        style={{
          alignItems: 'center',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(23),
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
            {connector.accounts[0]}
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
    </Fragment>
  );
};

export default UserHeader;
