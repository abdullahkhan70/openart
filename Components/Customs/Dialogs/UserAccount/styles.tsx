import {StyleSheet, Dimensions, PixelRatio, useColorScheme} from 'react-native';
import {Colors} from '../../../Utils/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  userHeaderUserName: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
  },
  darkModeText: {
    fontWeight: '700',
    fontSize: 16,
  },
  optionsRenderText: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    fontSize: 16,
    fontWeight: '400',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: '400',
  },
  optionsRenderMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceEthText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  userBalanceMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    width: width * 0.68,
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
    flexDirection: 'row',
  },
  optionMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  darkModeMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(7),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: PixelRatio.getPixelSizeForLayoutSize(3.5),
  },
  userHeaderEthAddress: {
    width: width / 2.3,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    fontSize: 14,
    fontWeight: '500',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
});
