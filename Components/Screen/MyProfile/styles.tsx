import {Dimensions, StyleSheet, PixelRatio} from 'react-native';
import {Colors} from '../../Utils/Colors';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  totalViewMainView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  memberSinceText: {
    fontSize: 16,
    fontWeight: '400',
  },
  MainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  emptyCollectionText: {
    fontSize: 20,
    fontWeight: '700',
  },
  startBuildingCollectionText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    width: width * 0.8,
    textAlign: 'center',
  },
  linearGradientArtWork: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
  viewArtworkBtn: {
    width: width - 44,
    height: PixelRatio.getPixelSizeForLayoutSize(18.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
