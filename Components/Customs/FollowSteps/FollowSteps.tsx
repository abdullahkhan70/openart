import {
  View,
  Text,
  PixelRatio,
  useColorScheme,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectFollowStepsModal,
  setFollowStepsModal,
  setPaymentSuccessModal,
} from '../../Utils/Redux/modalSlice';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import Icon from '../Icon';
import PriceButton from '../LinearGradientButtons/PriceButton';
import LinearGradientBackgroundButton from '../LinearGradientButtons/LinearGradientBackgroundButton';
const {width, height} = Dimensions.get('window');
const FollowSteps = () => {
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const selFollowStepsModal = useSelector(selectFollowStepsModal);
  const hideModal = () => {
    reduxDispatch(setFollowStepsModal(Boolean(false)));
  };
  useEffect(() => {
    setTimeout(() => {
      reduxDispatch(setPaymentSuccessModal(Boolean(true)));
      hideModal();
    }, 2000);
  }, []);
  const handleCheckOutBtn = () => {};
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        presentationStyle="formSheet"
        isVisible={selFollowStepsModal}
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
              {Lables.FOLLOWSTEPS}
            </Text>
            <Icon name="close_btn" onPress={hideModal} />
          </View>
          <Icon
            name="security"
            size={PixelRatio.getPixelSizeForLayoutSize(50)}
            style={{alignSelf: 'center'}}
          />
          <Text
            style={[
              styles.purchasingText,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.VIEWALLDARK,
              },
            ]}>
            {Lables.PURCHASING}
          </Text>
          <Text
            style={[
              styles.purchasingSubText,
              {
                color:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.VIEWALLDARK,
              },
            ]}>
            {Lables.PAYMENTPROCESSING}
          </Text>
          <View style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(10)}}>
            <LinearGradientBackgroundButton
              label={Lables.PROCESSING}
              onPress={handleCheckOutBtn}
            />
            <PriceButton
              onPress={hideModal}
              label={Lables.CANCEL}
              styleBtn={[
                styles.cancelBtn,
                {
                  borderColor:
                    scheme == 'light'
                      ? Colors.DIGITALARTCOLOR
                      : Colors.CANCELBORDERCOLOR,
                },
              ]}
              styleText={[
                styles.cancelLabel,
                {
                  color:
                    scheme == 'light'
                      ? Colors.DIGITALARTCOLOR
                      : Colors.CANCELBORDERCOLOR,
                },
              ]}
            />
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default FollowSteps;
const styles = StyleSheet.create({
  container: {
    width: width - 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
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
  purchasingText: {
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  purchasingSubText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  cancelBtn: {
    borderWidth: 1.5,
    width: width - 50,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: PixelRatio.getPixelSizeForLayoutSize(18),
    borderRadius: 10,
  },
  cancelLabel: {
    fontSize: 20,
    fontWeight: '700',
  },
});
