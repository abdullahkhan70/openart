import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {Colors} from '../../Utils/Colors';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  containerHeader: {
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  containerBreadCrumbHeader: {
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  thirteenYearsOldCheckBoxView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    alignItems: 'center',
  },
  agreeOfServiceCheckBoxView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  thirteenYearsOldCheckBoxText: {
    fontSize: 16,
    fontWeight: '400',
  },
  termsOfServiceSubText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    width: width - 10,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    color: Colors.TERMSOFSERVICESUBTEXT,
  },
  termsOfServiceMainView: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  termsOfServiceMainText: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    alignSelf: 'center',
  },
  scanWalletText: {
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    color: Colors.SEARCHBARCOLORDARK,
  },
  addQRCodeMainView: {
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(15),
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(15),
    backgroundColor: Colors.BACKGROUND,
    width: width - 50,
    alignItems: 'center',
    borderRadius: 30,
  },
  addMethodName: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 20,
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  methodName: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  addMainView: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  addWalletPayMainText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
  breadCrumbLine: {
    height: 2,
    width: width / 2 - 120,
    backgroundColor: Colors.LINEWIDTH,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  addWalletPayMainSubText: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(1.5),
  },
});
