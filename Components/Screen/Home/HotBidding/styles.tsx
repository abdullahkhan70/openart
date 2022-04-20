import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  hotBidText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  rightArrow: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  leftArrow: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
});
