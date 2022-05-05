import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import React, {Fragment} from 'react';
import {Colors} from '../../Utils/Colors';
import {useTheme} from '@react-navigation/native';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import Buttons from './Buttons';
import {useSelector} from 'react-redux';
import {
  selectAutionButton,
  selectFixPriceButton,
} from '../../Utils/Redux/modalSlice';
import FixPrice from './FixPrice';
import AuctionPrice from './AuctionPrice';
const Index = () => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const selFixPriceButton = useSelector(selectFixPriceButton);
  const selAutionButton = useSelector(selectAutionButton);
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
            <Buttons />
            {selFixPriceButton && <FixPrice />}
            {selAutionButton && <AuctionPrice />}
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Index;
