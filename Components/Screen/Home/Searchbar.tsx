import {View, Text, useColorScheme, TextInput, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from '../../Customs/Icon';
import {useTheme} from '@react-navigation/native';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';

const Searchbar: React.FC = () => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  return (
    <View style={styles.containerSearchBar}>
      <View
        style={[
          styles.searchIcon,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORLIGHT
                : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        {scheme == 'light' ? (
          <Icon
            name="search_light"
            size={PixelRatio.getPixelSizeForLayoutSize(6)}
          />
        ) : (
          <Icon
            name="search_dark"
            size={PixelRatio.getPixelSizeForLayoutSize(6)}
          />
        )}
      </View>
      <TextInput
        style={[
          styles.searchBarInput,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORLIGHT
                : Colors.SEARCHBARCOLORDARK,
          },
        ]}
        placeholder={Lables.SEARCHITEMLABEL}
        placeholderTextColor={
          scheme == 'light' ? Colors.PLACEHOLDERCOLOR : Colors.WHITE
        }
      />
      <View
        style={[
          styles.searchIconRight,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORLIGHT
                : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        {scheme == 'light' ? (
          <Icon
            name="recording_light"
            size={PixelRatio.getPixelSizeForLayoutSize(7)}
          />
        ) : (
          <Icon
            name="recording_dark"
            size={PixelRatio.getPixelSizeForLayoutSize(7)}
          />
        )}
      </View>
    </View>
  );
};

export default Searchbar;
