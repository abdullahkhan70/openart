import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {Colors} from '../../Utils/Colors';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  enterDetailMainView: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  twitterViewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mediaLinkBtn: {
    width: width - 20,
    alignSelf: 'center',
    height: height * 0.1,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    borderRadius: 10,
  },
  websiteLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  placeABidBtn: {
    width: width - 20,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 20,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
  mediaLinksViewBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  uploadProfileImageMainView: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  enterDetailLable: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  verifyTwitter: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  twitterBtn: {
    height: height * 0.1,
    borderWidth: 1,
    width: width - 20,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    borderRadius: 10,
    borderColor: Colors.PLACEHOLDERCOLOR,
  },
  instagramBtn: {
    height: height * 0.1,
    borderWidth: 1,
    width: width - 20,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    borderRadius: 10,
    borderColor: Colors.PLACEHOLDERCOLOR,
  },
  foundationCommunityText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
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
  linearGradientArtWork: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    alignSelf: 'center',
  },
  emailHintText: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.PLACEHOLDERCOLOR,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
    width: width * 0.75,
    alignSelf: 'center',
  },
  nameInputField: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    borderRadius: 10,
    width: width - 30,
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(10),
    fontSize: 16,
    fontWeight: '500',
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  userProfilePathText: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
