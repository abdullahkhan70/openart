import {
  View,
  Text,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {UserAccountOptions} from '../../../Utils/Lists/UserAccountOptions';
import Icon from '../../Icon';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../../Utils/Strings';

type renderItemsProps = {
  item: {
    name: string;
    light: string;
    dark: string;
    screen: string;
  };
  index: number;
};
type handleMyScreenProps = {
  screenName: string;
};
const Options: React.FC = () => {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const handleMyProfile = screenName => {
    if (screenName != null) {
      navigation.navigate(screenName);
    }
  };
  const renderItems = ({item, index}: renderItemsProps) => (
    <TouchableOpacity
      style={styles.optionsRenderMainView}
      onPress={() => handleMyProfile(item?.screen)}>
      <View style={{flexDirection: 'row'}}>
        <Icon name={scheme == 'light' ? item?.light : item?.dark} />
        <Text style={styles.optionsRenderText}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.optionMainView}>
      <FlatList data={UserAccountOptions} renderItem={renderItems} />
    </View>
  );
};

export default Options;
