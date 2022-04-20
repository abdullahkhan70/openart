import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  PixelRatio,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar} from '../../Customs/FocusStatusBar/FocusAwareStatusBar';
import {Colors} from '../../Utils/Colors';
import {styles} from './styles';
import Toolbar from '../../Customs/MainToolbar/Toolbar';
import MainView from './MainView';
import {useTheme} from '@react-navigation/native';
import Searchbar from './Searchbar';
import CurrentBiddingNft from './CurrentBiddingNft';
import LiveAuctions from './LiveAuctions';
import HotBid from './HotBid';
import HotCollections from './HotCollections';
import {Lables} from '../../Utils/Strings';
import LinearGradient from 'react-native-linear-gradient';
import ViewMoreCollection from './ViewMoreCollection';

const Index: React.FC = () => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  return (
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
          style={{paddingBottom: PixelRatio.getPixelSizeForLayoutSize(5)}}>
          <View>
            <MainView />
            <Searchbar />
            <CurrentBiddingNft />
            <LiveAuctions hideView={true} />
            <HotBid />
            <HotCollections />
            <ViewMoreCollection />
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Index;
