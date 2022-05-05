import {
  View,
  Text,
  PixelRatio,
  TouchableHighlight,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React, {Fragment} from 'react';
import {useTheme} from '@react-navigation/native';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {Colors} from '../../Utils/Colors';
import Header from './Header';
import BreadCrumb from './BreadCrumb';
import AddWalletProcessOne from './AddWalletProcessOne';
import AddWalletProcessTwo from './AddWalletProcessTwo';
import AddWalletProcessThree from './AddWalletProcessThree';
const Index = () => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
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
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
            }}>
            <Header />
            <BreadCrumb />
            {/* <AddWalletProcessOne /> */}
            {/* <AddWalletProcessTwo /> */}
            <AddWalletProcessThree />
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Index;
