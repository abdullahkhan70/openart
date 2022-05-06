import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mintSubView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
  },
  mintText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  mintSubText: {
    fontWeight: '400',
    fontSize: 16,
    width: width / 1.25,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
});
