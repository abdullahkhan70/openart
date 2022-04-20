import {
  View,
  Text,
  FlatList,
  PixelRatio,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ItemDetailsOptions} from '../../Utils/Lists/ItemDetailsOptions';
import Icon from '../../Customs/Icon';
import {Colors} from '../../Utils/Colors';
const {width, height} = Dimensions.get('window');
type renderItemsProps = {
  item: {
    name: string;
    image: string;
  };
  index: number;
};
const Options: React.FC = () => {
  const scheme = useColorScheme();
  const renderItems = ({item, index}: renderItemsProps) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemDetailsOptionsBtn,
          {
            backgroundColor:
              scheme == 'light' ? Colors.BACKGROUND : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        <View style={styles.itemDetailsOptionsMainView}>
          <Icon
            name={item?.image}
            size={PixelRatio.getPixelSizeForLayoutSize(10.5)}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.6,
            }}>
            <Text style={styles.itemDetailOptionName}>{item?.name}</Text>
            <Icon name={'open_link'} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={ItemDetailsOptions}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4),
        }}
      />
    </View>
  );
};

export default Options;
