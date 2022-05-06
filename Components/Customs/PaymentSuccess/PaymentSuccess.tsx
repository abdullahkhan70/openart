import {
  View,
  Text,
  PixelRatio,
  useColorScheme,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {Fragment} from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectPaymentSuccessModal,
  setPaymentSuccessModal,
} from '../../Utils/Redux/modalSlice';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import Icon from '../Icon';
import PriceButton from '../LinearGradientButtons/PriceButton';
const {width, height} = Dimensions.get('window');
const PaymentSuccess = () => {
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const selPaymentSuccessModal = useSelector(selectPaymentSuccessModal);
  const hideModal = () => {
    reduxDispatch(setPaymentSuccessModal(Boolean(false)));
  };
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        presentationStyle="formSheet"
        isVisible={selPaymentSuccessModal}
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
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
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
              {Lables.PAYMENTSUCCESS}
            </Text>
            <Icon name="close_btn" onPress={hideModal} />
          </View>
          <Icon
            name="stars"
            style={{
              alignSelf: 'center',
              marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
            }}
            size={PixelRatio.getPixelSizeForLayoutSize(17)}
          />
          <Text
            style={[
              styles.paymentSuccessText,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.BACKGROUND,
              },
            ]}>
            {Lables.PAYMENTSUCCESSSUBTEXT}
          </Text>
          <Text style={[styles.paymentSubText]}>
            {Lables.PAYMENTID + ':   ' + '13369885'}
          </Text>
          <PriceButton
            onPress={hideModal}
            label={Lables.BACKTOHOME}
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
      </Modal>
    </Fragment>
  );
};

export default PaymentSuccess;
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
  paymentSuccessText: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  paymentSubText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
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
