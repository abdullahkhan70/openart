import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  PixelRatio,
} from 'react-native';
import React from 'react';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import {useTheme} from '@react-navigation/native';
import UserHeader from '../UserProfile/UserHeader';
import {Lables} from '../../Utils/Strings';
import {Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  setCopyUserEthAddress,
} from '../../Utils/Redux/modalSlice';
import FolloweredBy from './FolloweredBy';
import FurtherDetails from './FurtherDetails';

const Index: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selCopyUserEthAddress = useSelector(selectCopyUserEthAddress);
  const onDismissSnackBar = () => {
    reduxDispatch(setCopyUserEthAddress(Boolean(!selCopyUserEthAddress)));
  };
  const {colors} = useTheme();
  return (
    <>
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
          style={{paddingBottom: PixelRatio.getPixelSizeForLayoutSize(7)}}>
          <View>
            <UserHeader />
            <FolloweredBy />
            <FurtherDetails />
          </View>
        </TouchableHighlight>
      </ScrollView>
      <Snackbar visible={selCopyUserEthAddress} onDismiss={onDismissSnackBar}>
        {Lables.USERETHADDRESS}
      </Snackbar>
    </>
  );
};

export default Index;
