import {
  View,
  Text,
  useColorScheme,
  Image,
  FlatList,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {DummySocialMedia} from '../../Utils/Lists/DummySocialMedia';
import Icon from '../../Customs/Icon';
const {width} = Dimensions.get('window');

type renderItemsProps = {
  item: {
    name: string;
    light: string;
    dark: string;
  };
  index: number;
};
const FolloweredBy: React.FC = () => {
  const renderItems = ({item, index}: renderItemsProps) => {
    return (
      <View
        style={[
          styles.folleredBySocialMediaMainView,
          {
            backgroundColor:
              scheme == 'light' ? Colors.BACKGROUND : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        <Icon name={scheme == 'light' ? item?.light : item?.dark} />
        <Text
          style={[
            styles.followeredBySocialMediaName,
            {
              color:
                scheme == 'light'
                  ? Colors.SEARCHBARCOLORDARK
                  : Colors.LIGHTBACKGROUND,
            },
          ]}>
          {item?.name}
        </Text>
      </View>
    );
  };
  const scheme = useColorScheme();
  return (
    <View style={styles.followeredByMainView}>
      <Text
        style={[
          styles.followeredByMainLabel,
          {
            color:
              scheme == 'light' ? Colors.SEARCHBARCOLORDARK : Colors.BACKGROUND,
          },
        ]}>
        {Lables.FOLLOWEREDBY}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
        }}>
        <Image
          style={styles.followeredByImage}
          source={DummyCurrentBiddingNFT[0].profile_image[0]}
        />
        <Image
          style={[styles.followeredByImages]}
          source={DummyCurrentBiddingNFT[0].profile_image[0]}
        />
        <Image
          style={styles.followeredByImages}
          source={DummyCurrentBiddingNFT[0].profile_image[0]}
        />
      </View>
      <Text
        style={[
          styles.followeredByDescription,
          {
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}>
        {Lables.DESCRIPTION}
      </Text>
      <Text
        style={[
          styles.followeredByMemberSince,
          {
            color:
              scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
          },
        ]}>
        {Lables.MEMBERSINCE + '2022'}
      </Text>
      <FlatList
        data={DummySocialMedia}
        renderItem={renderItems}
        numColumns={2}
        contentContainerStyle={{alignSelf: 'center'}}
      />
    </View>
  );
};

export default FolloweredBy;
