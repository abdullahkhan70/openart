import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';

const MainView: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.mainView}>
      <Text
        adjustsFontSizeToFit
        style={[
          styles.discoverText,
          {color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE},
        ]}
        numberOfLines={1}>
        {Lables.DISCOVERMAINTEXT}
      </Text>
      <Text
        adjustsFontSizeToFit
        style={[
          styles.digitalArtText,
          {color: scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE},
        ]}
        numberOfLines={1}>
        {Lables.DIGITALART}
      </Text>
    </View>
  );
};

export default MainView;
