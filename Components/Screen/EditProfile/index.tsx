import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  PixelRatio,
} from 'react-native';
import React, {Fragment} from 'react';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import {useTheme} from '@react-navigation/native';
import UserHeader from '../UserProfile/UserHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  setCopyUserEthAddress,
} from '../../Utils/Redux/modalSlice';
import {Snackbar} from 'react-native-paper';
import {Lables} from '../../Utils/Strings';
import EnterDetails from './EnterDetails';
import UploadProfileImage from './UploadProfileImage';
import VerifyProfile from './VerifyProfile';
import MediaLinks from './MediaLinks';

const Index = () => {
  const reduxDispatch = useDispatch();
  const selCopyUserEthAddress = useSelector(selectCopyUserEthAddress);
  const onDismissSnackBar = () => {
    reduxDispatch(setCopyUserEthAddress(Boolean(!selCopyUserEthAddress)));
  };
  const {colors} = useTheme();
  return (
    <Fragment>
      <FocusAwareStatusBar
        backgroundColor={colors.background}
        translucent={false}
      />
      <Toolbar />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        snapToEnd={true}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <TouchableHighlight
          style={{paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10)}}>
          <View>
            <UserHeader />
            <EnterDetails />
            <UploadProfileImage />
            <VerifyProfile />
            <MediaLinks />
          </View>
        </TouchableHighlight>
      </ScrollView>
      <Snackbar visible={selCopyUserEthAddress} onDismiss={onDismissSnackBar}>
        {Lables.USERETHADDRESS}
      </Snackbar>
    </Fragment>
  );
};

export default Index;
