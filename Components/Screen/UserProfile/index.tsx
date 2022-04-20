import {
  View,
  Text,
  TouchableHighlight,
  PixelRatio,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React, {Fragment} from 'react';
import {useTheme} from '@react-navigation/native';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {Colors} from '../../Utils/Colors';
import UserHeader from './UserHeader';
import {Snackbar} from 'react-native-paper';
import {Lables} from '../../Utils/Strings';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  selectNotificationModal,
  selectUserAccountModal,
  setCopyUserEthAddress,
} from '../../Utils/Redux/modalSlice';
import TotalView from './TotalView';
import FolloweredBy from './FolloweredBy';
import Collections from './Collections';
import LiveAuctions from '../Home/LiveAuctions';
import AccountDialog from '../../Customs/Dialogs/AccountDialog';
import NotificationDialog from '../../Customs/Dialogs/NotificationDialog';
const Index: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selCopyUserEthAddress = useSelector(selectCopyUserEthAddress);
  const selUserAccountModal = useSelector(selectUserAccountModal);
  const selNotificationModal = useSelector(selectNotificationModal);
  const {colors} = useTheme();
  const scheme = useColorScheme();
  const onDismissSnackBar = () => {
    reduxDispatch(setCopyUserEthAddress(Boolean(false)));
  };
  return (
    <Fragment>
      <FocusAwareStatusBar
        backgroundColor={colors.background}
        translucent={false}
      />
      <Toolbar />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor:
            scheme == 'light'
              ? Colors.USERLIGHTBACKGROUND
              : Colors.DIGITALARTCOLOR,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: PixelRatio.getPixelSizeForLayoutSize(5),
        }}
        snapToEnd={true}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <TouchableHighlight>
          <View>
            <UserHeader />
            <TotalView />
            <FolloweredBy />
            <Collections />
            <LiveAuctions hideView={false} />
          </View>
        </TouchableHighlight>
      </ScrollView>
      <Snackbar visible={selCopyUserEthAddress} onDismiss={onDismissSnackBar}>
        {Lables.USERETHADDRESS}
      </Snackbar>
      {selUserAccountModal ? <AccountDialog /> : <View />}
      {selNotificationModal ? <NotificationDialog /> : <View />}
    </Fragment>
  );
};

export default Index;
