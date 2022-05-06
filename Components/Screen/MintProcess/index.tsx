import {
  View,
  useColorScheme,
  ScrollView,
  TouchableHighlight,
  PixelRatio,
  BackHandler,
} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Colors} from '../../Utils/Colors';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import ServerProcess from './ServerProcess';
import LiveAuctionView from '../../Customs/LiveAuctionView/LiveAuctionView';
import {DummyLiveAuctions} from '../../Utils/Lists/DummyLiveAuctions';
import {Lables} from '../../Utils/Strings';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectCheckoutModal,
  selectFollowStepsModal,
  selectServerProcessIsLoading,
  setServerProcessIsLoading,
  selectPaymentSuccessModal,
} from '../../Utils/Redux/modalSlice';
import Button from './Button';
import CheckOut from '../../Customs/Checkout/CheckOut';
import FollowSteps from '../../Customs/FollowSteps/FollowSteps';
import PaymentSuccess from '../../Customs/PaymentSuccess/PaymentSuccess';
const Index = () => {
  const navigation = useNavigation();
  const reduxDispatch = useDispatch();
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const selServerProcessIsLoading = useSelector(selectServerProcessIsLoading);
  const selCheckoutModal = useSelector(selectCheckoutModal);
  const selFollowStepsModal = useSelector(selectFollowStepsModal);
  const selPaymentSuccessModal = useSelector(selectPaymentSuccessModal);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      reduxDispatch(setServerProcessIsLoading(Boolean(true)));
    }, 2000);
    const backAction = () => {
      if (navigation.canGoBack()) {
        reduxDispatch(setServerProcessIsLoading(Boolean(false)));
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          scheme == 'light' ? Colors.LIGHTBACKGROUND : Colors.TOOLBARDARKCOLOR,
      }}>
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
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(20),
            }}>
            {selServerProcessIsLoading ? (
              <ServerProcess
                mainText={Lables.NFTLISTED}
                mainSubText={Lables.NFTLISTEDSUBTEXT}
              />
            ) : (
              <ServerProcess
                mainText={Lables.MINTEDTEXT}
                mainSubText={Lables.MINTEDSUBTEXT}
              />
            )}
            <LiveAuctionView item={DummyLiveAuctions[0]} />
            {selServerProcessIsLoading && <Button />}
          </View>
        </TouchableHighlight>
      </ScrollView>
      {selCheckoutModal ? <CheckOut /> : <View />}
      {selFollowStepsModal ? <FollowSteps /> : <View />}
      {selPaymentSuccessModal ? <PaymentSuccess /> : <View />}
    </View>
  );
};

export default Index;
