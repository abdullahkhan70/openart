import {View, Text, useColorScheme, PixelRatio, Dimensions} from 'react-native';
import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAutionButton,
  selectFixPriceButton,
  setAutionButton,
  setFixPriceButton,
} from '../../Utils/Redux/modalSlice';
import LinearGradientRounded from '../../Customs/LinearGradientButtons/LinearGradientRounded';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import PriceButton from '../../Customs/LinearGradientButtons/PriceButton';
import {AnimatePresence} from 'moti';
const {width, height} = Dimensions.get('window');
const Buttons = () => {
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const selFixPriceButton = useSelector(selectFixPriceButton);
  const selAutionButton = useSelector(selectAutionButton);
  const handlefixPriceButton = () => {
    reduxDispatch(setAutionButton(Boolean(false)));
    reduxDispatch(setFixPriceButton(Boolean(true)));
  };
  const handleAuctionButton = () => {
    reduxDispatch(setAutionButton(Boolean(true)));
    reduxDispatch(setFixPriceButton(Boolean(false)));
  };
  return (
    <View
      style={[
        styles.buttonMainView,
        {
          backgroundColor:
            scheme == 'light' ? Colors.WHITE : Colors.SEARCHBARCOLORDARK,
        },
      ]}>
      <AnimatePresence>
        {selFixPriceButton ? (
          <LinearGradientRounded label={Lables.FIXEDPRICETEXT} />
        ) : (
          <PriceButton
            onPress={handlefixPriceButton}
            label={Lables.FIXEDPRICETEXT}
            styleBtn={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                scheme == 'light'
                  ? Colors.HIGHTESTBIDDARK
                  : Colors.DIGITALARTCOLOR,
              width: width / 2.5,
              borderRadius: 100,
            }}
            styleText={{
              color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
              fontSize: 16,
              fontWeight: '700',
              letterSpacing: 0.2,
            }}
          />
        )}
        {selAutionButton ? (
          <LinearGradientRounded label={Lables.AUCTIONTEXT} />
        ) : (
          <PriceButton
            onPress={handleAuctionButton}
            label={Lables.AUCTIONTEXT}
            styleBtn={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                scheme == 'light'
                  ? Colors.HIGHTESTBIDDARK
                  : Colors.DIGITALARTCOLOR,
              width: width / 2.5,
              borderRadius: 100,
            }}
            styleText={{
              color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
              fontSize: 16,
              fontWeight: '700',
              letterSpacing: 0.2,
            }}
          />
        )}
      </AnimatePresence>
    </View>
  );
};

export default Buttons;
