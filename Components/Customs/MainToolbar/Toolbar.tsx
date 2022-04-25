import {View, Text, PixelRatio, useColorScheme} from 'react-native';
import React, {FC, Fragment} from 'react';
import Icon from '../Icon';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectNotificationModal,
  selectUserAccountModal,
  setNotificationModal,
  setUserAccountModal,
} from '../../Utils/Redux/modalSlice';
import AccountDialog from '../Dialogs/AccountDialog';
import NotificationDialog from '../Dialogs/NotificationDialog';
const Toolbar: FC = () => {
  const reduxDispatch = useDispatch();
  const selUserAccountModal = useSelector(selectUserAccountModal);
  const selNotificationModal = useSelector(selectNotificationModal);
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const handleAccountModalOpen = () => {
    reduxDispatch(setUserAccountModal(Boolean(!selUserAccountModal)));
  };
  const handleNotificationModalOpen = () => {
    reduxDispatch(setNotificationModal(Boolean(!selNotificationModal)));
  };
  return (
    <Fragment>
      <View style={[styles.container, {backgroundColor: colors?.background}]}>
        <Icon name="blockchain" size={50} />
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="notification_light"
            style={styles.accountStyles}
            onPress={handleNotificationModalOpen}
          />
          <Icon
            name={scheme == 'light' ? 'account_light' : 'account_dark'}
            style={styles.accountStyles}
            onPress={handleAccountModalOpen}
          />
          <Icon name={scheme == 'light' ? 'menu_dark' : 'menu_light'} />
        </View>
      </View>
      {selUserAccountModal ? <AccountDialog /> : <View />}
      {selNotificationModal ? <NotificationDialog /> : <View />}
    </Fragment>
  );
};

export default Toolbar;
