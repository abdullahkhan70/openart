import {
  View,
  Text,
  Image,
  FlatList,
  PixelRatio,
  useColorScheme,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment} from 'react';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from './styles';
import Icon from '../../Customs/Icon';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
import ProfileImage from './HotCollections/ProfileImage';
import FollowUp from './HotCollections/FollowUp';
import Title from './HotCollections/Title';

type HotCollectionsProps = {
  item: {
    artImage: number;
  };
  index: number;
};

const HotCollections = () => {
  const scheme = useColorScheme();
  const renderItems = ({item, index}: HotCollectionsProps) => {
    return index <= 3 ? (
      <View style={styles.hotCollectionsMainView}>
        <Image style={styles.hotCollectionsImage} source={item?.artImage} />
      </View>
    ) : (
      <View />
    );
  };
  return (
    <Fragment>
      <View
        style={{
          paddingLeft: PixelRatio.getPixelSizeForLayoutSize(3),
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
          paddingVertical: -PixelRatio.getPixelSizeForLayoutSize(2),
        }}>
        <Icon
          name="hot_collection_icon"
          size={PixelRatio.getPixelSizeForLayoutSize(9.5)}
        />
        <Text
          style={[
            styles.hotCollectionMainText,
            {color: scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE},
          ]}>
          {Lables.HOTCOLLECTIONS}
        </Text>
      </View>
      <FlatList
        data={DummyCurrentBiddingNFT}
        renderItem={renderItems}
        numColumns={2}
        contentContainerStyle={{
          alignSelf: 'center',
        }}
        onEndReachedThreshold={4}
      />
      <View style={{margin: PixelRatio.getPixelSizeForLayoutSize(4)}}>
        <Title />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: PixelRatio.getPixelSizeForLayoutSize(2),
            }}>
            <ProfileImage />
          </View>
          <FollowUp />
        </View>
      </View>
    </Fragment>
  );
};

export default HotCollections;
