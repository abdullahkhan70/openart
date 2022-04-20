import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  Dimensions,
  Image,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment} from 'react';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  selectUserAccountModal,
  selectUserAccountSnackbar,
  setCopyUserEthAddress,
  setUserAccountModal,
  setUserAccountSnackbar,
} from '../../Utils/Redux/modalSlice';
import {Colors} from '../../Utils/Colors';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import Icon from '../Icon';
import {Lables} from '../../Utils/Strings';
import {DummyDiscoverCreator} from '../../Utils/Lists/DummyDiscoverCreator';
import AccountDetails from './UserAccount/AccountDetails';
import UserBalance from './UserAccount/UserBalance';
import Options from './UserAccount/Options';
import {Snackbar} from 'react-native-paper';
import DarkMode from './UserAccount/DarkMode';
const {width, height} = Dimensions.get('window');

const AccountDialog: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selUserAccountModal = useSelector(selectUserAccountModal);
  const selUserAccountSnackbar = useSelector(selectUserAccountSnackbar);
  const scheme = useColorScheme();
  const hideModal = () => {
    reduxDispatch(setUserAccountModal(Boolean(false)));
  };
  const onDismissSnackBar = () => {
    reduxDispatch(setUserAccountSnackbar(Boolean(false)));
  };
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        isVisible={selUserAccountModal}
        coverScreen
        onDismiss={hideModal}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}>
        <>
          <View
            style={[
              styles.container,
              {
                backgroundColor:
                  scheme == 'light' ? Colors.WHITE : Colors.SEARCHBARCOLORDARK,
                paddingBottom: PixelRatio.getPixelSizeForLayoutSize(15),
              },
            ]}>
            <AccountDetails />
            <UserBalance />
            <Options />
            <View style={styles.mainView} />
            <DarkMode />
          </View>
          <Snackbar
            visible={selUserAccountSnackbar}
            onDismiss={onDismissSnackBar}>
            {Lables.USERETHADDRESS}
          </Snackbar>
        </>
      </Modal>
    </Fragment>
  );
};

export default AccountDialog;

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  mainView: {
    alignSelf: 'center',
    height: 2,
    backgroundColor: Colors.GREYSCALE,
    width: width - 50,
    marginTop: PixelRatio.getPixelSizeForLayoutSize(8),
  },
});
