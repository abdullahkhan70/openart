import {
  View,
  Text,
  useColorScheme,
  ScrollView,
  TouchableHighlight,
  PixelRatio,
  useWindowDimensions,
} from 'react-native';
import React, {Fragment} from 'react';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import {useTheme} from '@react-navigation/native';
import UserHeader from '../UserProfile/UserHeader';
import {Snackbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCopyUserEthAddress,
  setCopyUserEthAddress,
} from '../../Utils/Redux/modalSlice';
import {Lables} from '../../Utils/Strings';
import ProfileCard from './ProfileCard';
import {Colors} from '../../Utils/Colors';
import LiveAuctions from '../Home/LiveAuctions';

const Index = () => {
  const reduxDispatch = useDispatch();
  const selCopyUserEthAddress = useSelector(selectCopyUserEthAddress);
  const onDismissSnackBar = () => {
    reduxDispatch(setCopyUserEthAddress(Boolean(!selCopyUserEthAddress)));
  };
  const {colors} = useTheme();
  const scheme = useColorScheme();
  return (
    <Fragment>
      <FocusAwareStatusBar
        backgroundColor={colors.background}
        translucent={false}
      />
      <Toolbar />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        snapToEnd={true}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <TouchableHighlight>
          <View
            style={{
              backgroundColor:
                scheme == 'light'
                  ? Colors.LIGHTBACKGROUND
                  : Colors.TOOLBARDARKCOLOR,
              // paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
              //   height: useWindowDimensions().height,
            }}>
            <UserHeader showButtons={false} />
            <ProfileCard />
            <LiveAuctions hideView={false} />
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
