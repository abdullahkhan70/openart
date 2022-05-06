import {
  View,
  StyleSheet,
  useColorScheme,
  PixelRatio,
  Dimensions,
  Text,
} from 'react-native';
import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCheckoutModal,
  setCheckoutModal,
  setFollowStepsModal,
} from '../../Utils/Redux/modalSlice';
import Modal from 'react-native-modal';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import Icon from '../Icon';
import LinearGradientBackgroundButton from '../LinearGradientButtons/LinearGradientBackgroundButton';
import LinearGradientWithButton from '../LinearGradientButtons/LinearGradientWithButton';
import PriceButton from '../LinearGradientButtons/PriceButton';
const {width, height} = Dimensions.get('window');
const CheckOut = () => {
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const selCheckoutModal = useSelector(selectCheckoutModal);
  const hideModal = () => {
    reduxDispatch(setCheckoutModal(Boolean(false)));
  };
  const handleCheckOutBtn = () => {
    reduxDispatch(setFollowStepsModal(Boolean(true)));
    hideModal();
  };
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        presentationStyle="formSheet"
        isVisible={selCheckoutModal}
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
              {Lables.CHECKOUT}
            </Text>
            <Icon name="close_btn" onPress={hideModal} />
          </View>
          <Text
            style={[
              styles.yourPayment,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.HIGHTESTBIDDARK,
              },
            ]}>
            {Lables.YOURPAYMENT}
          </Text>
          <View style={styles.subView}>
            <Text
              style={[
                styles.ethLabel,
                {
                  color:
                    scheme == 'light'
                      ? Colors.SEARCHBARCOLORDARK
                      : Colors.BACKGROUND,
                },
              ]}>
              1.005
            </Text>
            <Text
              style={[
                styles.ethLabel,
                {
                  color:
                    scheme == 'light'
                      ? Colors.ETHLABELDARK
                      : Colors.VIEWALLDARK,
                },
              ]}>
              {Lables.ETHLABEL}
            </Text>
          </View>
          <View style={styles.subViews}>
            <View>
              <Text
                style={[
                  styles.ethLabel,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.PLACEHOLDERCOLOR
                        : Colors.VIEWALLDARK,
                  },
                ]}>
                {Lables.YOURBALANCE}
              </Text>
              <Text
                style={[
                  styles.ethLabels,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.PLACEHOLDERCOLOR
                        : Colors.VIEWALLDARK,
                  },
                ]}>
                {Lables.SERVICEFEE}
              </Text>
              <Text
                style={[
                  styles.ethLabels,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.PLACEHOLDERCOLOR
                        : Colors.VIEWALLDARK,
                  },
                ]}>
                {Lables.YOUPAY}
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.ethLabel,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.SEARCHBARCOLORDARK
                        : Colors.BACKGROUND,
                    alignSelf: 'flex-end',
                  },
                ]}>
                {'0.0025 ' + Lables.ETHLABEL}
              </Text>
              <Text
                style={[
                  styles.ethLabels,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.SEARCHBARCOLORDARK
                        : Colors.BACKGROUND,
                    alignSelf: 'flex-end',
                  },
                ]}>
                {'0 ' + Lables.ETHLABEL}
              </Text>
              <Text
                style={[
                  styles.ethLabels,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.SEARCHBARCOLORDARK
                        : Colors.BACKGROUND,
                    alignSelf: 'flex-end',
                  },
                ]}>
                {'0.007 ' + Lables.ETHLABEL}
              </Text>
            </View>
          </View>
          <View style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(10)}}>
            <LinearGradientBackgroundButton
              label={Lables.CHECKOUT}
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

export default CheckOut;
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
  yourPayment: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    width: width - 60,
    alignSelf: 'center',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
    width: width - 70,
    alignSelf: 'center',
  },
  ethLabel: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.2,
  },
  ethLabels: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.2,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  subViews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(8),
    width: width - 70,
    alignSelf: 'center',
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
