import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  profileCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  memeberSinceText: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  profileCardMainContainer: {
    borderRadius: 45,
    width: width - 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: PixelRatio.getPixelSizeForLayoutSize(8),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  editPencilStyle: {
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCardFollow: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.3,
    height: 40,
    borderRadius: 10,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
});
