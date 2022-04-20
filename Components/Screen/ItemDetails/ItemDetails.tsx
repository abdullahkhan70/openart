import {
  View,
  Text,
  Image,
  PixelRatio,
  TouchableOpacity,
  useColorScheme,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {Fragment} from 'react';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from './styles';
import Icon from '../../Customs/Icon';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import {DummyTags} from '../../Utils/Lists/DummyTags';
import {useDispatch, useSelector} from 'react-redux';
import {selectItemDetialIndex} from '../../Utils/Redux/itemDetailsSlice';
const {width, height} = Dimensions.get('window');
type renderItemsProps = {
  item: {
    id: number;
    tag: string;
  };
  index: number;
};
const ItemDetails = () => {
  const reduxDispatch = useDispatch();
  const selItemDetialIndex = useSelector(selectItemDetialIndex);
  const scheme = useColorScheme();
  const renderItems = ({item, index}: renderItemsProps) => {
    return (
      <TouchableOpacity key={index} style={styles.tagMainView}>
        <Text
          style={[
            styles.tagText,
            {
              color:
                scheme == 'light'
                  ? Colors.PLACEHOLDERCOLOR
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.tagSymbol + item?.tag}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Fragment>
      <Image
        style={styles.itemDetailsImage}
        source={DummyCurrentBiddingNFT[0]?.artImage}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: PixelRatio.getPixelSizeForLayoutSize(8),
          paddingRight: PixelRatio.getPixelSizeForLayoutSize(8),
          marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
        }}>
        <Text
          adjustsFontSizeToFit
          ellipsizeMode="tail"
          style={[
            styles.itemDetailsTitle,
            {color: scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE},
          ]}>
          {DummyCurrentBiddingNFT[0]?.creatorName}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.heartBtn}>
            <Icon
              name="deselect_heart"
              size={PixelRatio.getPixelSizeForLayoutSize(6)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.downloadBtn}>
            <Icon
              name="download"
              size={PixelRatio.getPixelSizeForLayoutSize(6)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileImageMainView}>
        <View
          style={[
            styles.imageUsernameBtn,
            {
              backgroundColor:
                scheme == 'light'
                  ? Colors.BACKGROUND
                  : Colors.SEARCHBARCOLORDARK,
            },
          ]}>
          <Image
            style={styles.profileImage}
            source={DummyCurrentBiddingNFT[0]?.artImage}
          />
          <Text
            style={[
              styles.userNameText,
              {
                color:
                  scheme == 'light' ? Colors.SEARCHBARCOLORDARK : Colors.WHITE,
              },
            ]}>
            {'@' + Lables?.USERNAME}
          </Text>
        </View>
        <Text style={styles.itemDetailsDescriptionText}>
          {Lables.ITEMDETAILDESCRIPTION}
        </Text>
        <FlatList
          data={DummyTags}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
            alignSelf: 'center',
          }}
        />
      </View>
    </Fragment>
  );
};

export default ItemDetails;
