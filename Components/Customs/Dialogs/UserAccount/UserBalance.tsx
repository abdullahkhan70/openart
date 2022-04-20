import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React, {Fragment} from 'react';
import {styles} from './styles';
import {Colors} from '../../../Utils/Colors';
import Icon from '../../Icon';
import {Lables} from '../../../Utils/Strings';
import {DummyCurrentBiddingNFT} from '../../../Utils/Lists/DummyCurrentBiddingNFT';

const UserBalance: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View
      style={[
        styles.userBalanceMainView,
        {
          backgroundColor:
            scheme == 'light'
              ? Colors.SEARCHBARCOLORLIGHT
              : Colors.DIGITALARTCOLOR,
        },
      ]}>
      <TouchableOpacity
        style={[
          styles.balanceBtn,
          {
            backgroundColor:
              useColorScheme() == 'light'
                ? Colors.VIEWALLDARK
                : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        <Icon
          name={scheme == 'light' ? 'wallet_icon_light' : 'wallet_icon_dark'}
          size={PixelRatio.getPixelSizeForLayoutSize(9)}
        />
      </TouchableOpacity>
      <View style={{marginLeft: PixelRatio.getPixelSizeForLayoutSize(6)}}>
        <Text
          style={[
            styles.balanceText,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.BALANCE}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
          }}>
          <Text
            style={[
              styles.balanceEthText,
              {
                color:
                  scheme == 'light'
                    ? Colors.DIGITALARTCOLOR
                    : Colors.BACKGROUND,
              },
            ]}>
            {DummyCurrentBiddingNFT[0]?.rate + ' ' + Lables.ETHLABEL}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserBalance;
