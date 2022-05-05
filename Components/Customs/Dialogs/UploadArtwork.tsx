import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  useColorScheme,
  Image,
  ImageBackground,
} from 'react-native';
import React, {Fragment} from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectUploadPreviewModal,
  setUploadPreviewModal,
} from '../../Utils/Redux/modalSlice';
import {Colors} from '../../Utils/Colors';
import Icon from '../Icon';
import {Lables} from '../../Utils/Strings';
import {selectMultiUploadImages} from '../../Utils/Redux/uploadArtworkSlice';
import {useTheme} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const UploadArtwork = () => {
  const reduxDispatch = useDispatch();
  const selUploadPreviewModal = useSelector(selectUploadPreviewModal);
  const selMultiUploadImages = useSelector(selectMultiUploadImages);
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const hideModal = () => {
    reduxDispatch(setUploadPreviewModal(Boolean(false)));
  };
  const handleImage = () => {
    return selMultiUploadImages[0]?.image != ''
      ? selMultiUploadImages[0]?.path
      : selMultiUploadImages[0]?.path;
  };
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        presentationStyle="formSheet"
        isVisible={selUploadPreviewModal}
        coverScreen
        onDismiss={hideModal}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                scheme == 'light' ? Colors.WHITE : Colors.DIGITALARTCOLOR,
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(8),
            },
          ]}>
          <View style={styles.connectWalletView}>
            <Text
              style={[
                styles.connectWalletText,
                {
                  color:
                    scheme == 'light'
                      ? Colors.SEARCHBARCOLORDARK
                      : Colors.BACKGROUND,
                },
              ]}>
              {Lables.PREVIEW}
            </Text>
            <Icon name="close_btn" onPress={hideModal} />
          </View>
          <Image
            style={styles.mainImage}
            source={require('../../../Assets/dummy/art_1.jpg')}
          />
          <View
            style={{
              marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
              marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(5),
            }}>
            <Text style={[styles.artName, {color: colors.primary}]}>
              {'Awesome Zone'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
                alignItems: 'center',
                marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
                alignSelf: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <ImageBackground
                  source={require('../../../Assets/dummy/profile_image.jpg')}
                  style={styles.profileImages}
                  imageStyle={{borderRadius: 100}}>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={styles.onlineOuterCircleView}>
                      <View style={styles.onlineCircleView} />
                    </View>
                  </View>
                </ImageBackground>
                <View
                  style={{padding: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                  <Text
                    style={[
                      styles.creatorName,
                      {
                        color:
                          scheme == 'light'
                            ? Colors.SEARCHBARCOLORDARK
                            : Colors.WHITE,
                      },
                    ]}>
                    {'Abdullah Khan'}
                  </Text>
                  <Text
                    style={{
                      color:
                        scheme == 'light'
                          ? Colors.DISCOVERMAINTEXT
                          : Colors.WHITE,
                      letterSpacing: 2,
                      fontWeight: '500',
                      fontSize: 14,
                    }}>
                    {Lables.CREATOR}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default UploadArtwork;
const styles = StyleSheet.create({
  container: {
    width: width - 50,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  creatorName: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  artName: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
  onlineOuterCircleView: {
    borderRadius: 100,
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  onlineCircleView: {
    backgroundColor: Colors.ONLINEBTN,
    width: 13,
    height: 13,
    borderRadius: 100,
  },
  profileImages: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  connectWalletView: {
    justifyContent: 'space-between',
    margin: PixelRatio.getPixelSizeForLayoutSize(4),
    flexDirection: 'row',
  },
  connectWalletText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
  mainImage: {
    width: width - 90,
    height: height / 1.8,
    alignSelf: 'center',
    borderRadius: 20,
  },
});
