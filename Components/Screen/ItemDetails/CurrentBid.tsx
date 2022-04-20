import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {DummyActivities} from '../../Utils/Lists/DummyActivities';
import {numberWithCommas} from '../../Customs/Methods/Methods';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {setConnectWalletModal} from '../../Utils/Redux/modalSlice';

const CurrentBid = () => {
  const reduxDispatch = useDispatch();
  const scheme = useColorScheme();
  const handleModal = () => {
    reduxDispatch(setConnectWalletModal(Boolean(true)));
  };
  return (
    <View
      style={[
        styles.soldForMainContainer,
        {
          backgroundColor:
            scheme == 'light' ? Colors.VIEWALLDARK : Colors.SEARCHBARCOLORDARK,
        },
      ]}>
      <Text
        style={[
          styles.reservePriceLabel,
          {
            color:
              scheme === 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.BACKGROUND,
          },
        ]}>
        {Lables.CURRENTBID}
      </Text>
      <View style={styles.reserverPriceMainView}>
        <Text
          style={[
            styles.reserverPriceText,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
            },
          ]}>
          {DummyCurrentBiddingNFT[0].rate + ' ' + Lables.ETHLABEL}
        </Text>
        <Text
          style={[
            styles.reservePriceDollarPrice,
            {
              color:
                scheme == 'light'
                  ? Colors.PLACEHOLDERCOLOR
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.DOLLARSYMBOL +
            numberWithCommas(DummyActivities[0]?.dollarRate)}
        </Text>
      </View>
      <Text
        style={[
          styles.currentBidMainText,
          {
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}>
        {Lables.AUCTIONENDS}
      </Text>
      <View
        style={{
          alignSelf: 'center',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
          marginBottom: PixelRatio.getPixelSizeForLayoutSize(6),
        }}>
        <TouchableOpacity
          style={styles.placeABidBtn}
          activeOpacity={0.5}
          onPress={handleModal}>
          <LinearGradient
            colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
            start={{x: 0.8, y: -0.8}}
            end={{x: 1, y: 1}}
            style={styles.linearGradientPlaceBid}>
            <Text style={styles.placeBidText}>{Lables.PLACEBID}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurrentBid;
