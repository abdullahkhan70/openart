import {View, Text, useColorScheme, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import Icon from '../../Customs/Icon';
import {Colors} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {firstLetter} from '../../Customs/Methods/Methods';

const SoldFor: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.soldForMainContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingLeft: PixelRatio.getPixelSizeForLayoutSize(3),
          paddingRight: PixelRatio.getPixelSizeForLayoutSize(3),
        }}>
        <Text
          style={[
            styles.soldForMainLabel,
            {
              color:
                scheme == 'dark'
                  ? Colors.VIEWALLDARK
                  : Colors.SEARCHBARCOLORDARK,
            },
          ]}>
          {Lables.SOLDFOR}
        </Text>
        <Text
          style={[
            styles.soldForEthRate,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.VIEWALLDARK,
            },
          ]}>
          {DummyCurrentBiddingNFT[0].rate + ' ' + Lables.ETHLABEL}
        </Text>
        <Text
          style={[
            styles.solfForDollarRate,
            {
              color:
                scheme == 'light'
                  ? Colors.PLACEHOLDERCOLOR
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.DOLLARSYMBOL + DummyCurrentBiddingNFT[0].eth_rate}
        </Text>
        <Icon
          name="hot_collection_icon"
          size={PixelRatio.getPixelSizeForLayoutSize(10)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: PixelRatio.getPixelSizeForLayoutSize(3),
          paddingRight: PixelRatio.getPixelSizeForLayoutSize(3),
          marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
        }}>
        <Text
          style={[
            styles.soldForOwnerByText,
            {
              color:
                scheme == 'light'
                  ? Colors.SEARCHBARCOLORDARK
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.OWNERBY}
        </Text>
        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <Text style={styles.firstLetterName}>
            {firstLetter(Lables.FIRSTNAME)}
          </Text>
        </LinearGradient>

        <Text
          style={[
            styles.soldForUserName,
            {
              color:
                scheme == 'light'
                  ? Colors.SEARCHBARCOLORDARK
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {'@' + Lables.USERNAME}
        </Text>
      </View>
    </View>
  );
};

export default SoldFor;
