import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {Colors} from '../../Utils/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  linearGradientArtWork: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradientfixPrice: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    width: width / 2.5,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeABidBtn: {
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },
  fixPriceBtn: {
    width: width / 2.5,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf: 'center',
  },
  viewArtworkBtn: {
    width: width - 44,
    height: PixelRatio.getPixelSizeForLayoutSize(18.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
  FixedText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 16,
  },
});
