import {View, TouchableHighlight, ScrollView, PixelRatio} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {styles} from './styles';
import ItemDetails from './ItemDetails';
import Options from './options';
import SoldFor from './SoldFor';
import Activity from './activity';
import ReserveBid from './ReserveBid';
import CurrentBid from './CurrentBid';
import {useSelector} from 'react-redux';
import {selectConnectWalletModal} from '../../Utils/Redux/modalSlice';
import ConnectWallet from '../../Customs/Dialogs/ConnectWallet';

const Index = () => {
  const selConnectWallet = useSelector(selectConnectWalletModal);
  const {colors} = useTheme();
  return (
    <>
      <View style={styles.container}>
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
              <ItemDetails />
              <Options />
              {/* <SoldFor /> */}
              {/* <ReserveBid /> */}
              <CurrentBid />
              <Activity />
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
      {selConnectWallet ? <ConnectWallet /> : <View />}
    </>
  );
};

export default Index;
