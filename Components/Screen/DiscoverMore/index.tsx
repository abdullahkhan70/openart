import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  PixelRatio,
  useColorScheme,
} from 'react-native';
import React, {Fragment} from 'react';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import {useTheme} from '@react-navigation/native';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import DiscoverMore from './DiscoverMore';
import Creators from './Creators';
import {Colors} from '../../Utils/Colors';

const Index: React.FC = () => {
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
            <DiscoverMore />
            <Creators />
          </View>
        </TouchableHighlight>
      </ScrollView>
    </Fragment>
  );
};

export default Index;
