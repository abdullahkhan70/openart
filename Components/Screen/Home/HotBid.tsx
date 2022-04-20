import {
  View,
  Text,
  FlatList,
  ImageBackground,
  PixelRatio,
  TouchableHighlight,
  SectionList,
  Image,
  useColorScheme,
} from 'react-native';
import React from 'react';
import MainView from './HotBidding/MainView';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';

type renderItemsProps = {
  item: {
    hightest_bid: number;
    artImage: number;
    rate: number;
    artName: string;
    profile_image: Array<number>;
  };
  index: number;
};

const HotBid: React.FC = () => {
  const scheme = useColorScheme();
  const renderItems = ({item, index}: renderItemsProps) => (
    <TouchableHighlight>
      <View
        style={{
          marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
          marginRight: PixelRatio.getPixelSizeForLayoutSize(2),
          paddingBottom: PixelRatio.getPixelSizeForLayoutSize(2),
        }}>
        <ImageBackground
          source={item?.artImage}
          style={styles.hotBidProductImage}
          imageStyle={{borderRadius: 30}}></ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: PixelRatio.getPixelSizeForLayoutSize(4),
            paddingRight: PixelRatio.getPixelSizeForLayoutSize(4),
            marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
          }}>
          <Text
            style={[
              styles.hotBidArtName,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {item?.artName}
          </Text>
          <Text
            style={[
              styles.hotBidRateText,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {item?.rate + ' ' + Lables.ETHLABEL}
          </Text>
        </View>
        <View style={styles.hightestBidView}>
          <Text
            style={[
              styles.hightestBidMainText,
              {
                color:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.HIGHTESTBIDDARK,
              },
            ]}>
            {Lables.HIGHTESTBIDS}
          </Text>
          <Text
            style={[
              styles.hightestBidRate,
              {
                color:
                  scheme == 'light' ? Colors.SEARCHBARCOLORDARK : Colors.WHITE,
              },
            ]}>
            {item?.hightest_bid + ' ' + Lables.ETHLABEL}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <>
      <MainView />
      <FlatList
        data={DummyCurrentBiddingNFT}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HotBid;
