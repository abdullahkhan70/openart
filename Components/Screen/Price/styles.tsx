import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {Colors} from '../../Utils/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    padding: PixelRatio.getPixelSizeForLayoutSize(3),
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(1),
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  optionDropDownText: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(7),
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  optionDropDownView: {
    height: 1,
    width: width - 20,
    backgroundColor: Colors.GREYSCALE,
  },
  optionDropDown: {
    height: 45,
    justifyContent: 'center',
  },
  dropContainerAuctionStyle: {
    borderWidth: 0,
  },
  auctionMainLabel: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  containerAuctionView: {
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(7),
    width: width - 43,
  },
  obncePurchasedSubText: {
    fontSize: 16,
    fontWeight: '400',
    width: width - 70,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  oncePurchasedText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  oncePurchasedMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  overLineView: {
    width: width - 50,
    height: 1,
    backgroundColor: Colors.GREYSCALE,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    borderRadius: 10,
  },
  enterEthValue: {
    width: width / 2,
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: Colors.SEARCHBARCOLORDARK,
  },
  closeBtn: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 53,
    width: width / 2 - 130,
    justifyContent: 'center',
    borderWidth: 1,
    borderLeftWidth: 0,

    // paddingRight: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  fixPriceMainView: {
    width: width - 50,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(8),
  },
  dropDownContainerStyle: {
    width: width / 2 - 100,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
    borderWidth: 0.2,
    height: 45,
  },
  minimumBidReceiveText: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  minimumBidText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
