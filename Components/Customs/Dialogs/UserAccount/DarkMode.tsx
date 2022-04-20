import {View, Text, useColorScheme, Appearance} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../../Utils/Strings';
import {Colors} from '../../../Utils/Colors';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {selectDarkMode, setDarkMode} from '../../../Utils/Redux/modalSlice';

const DarkMode: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selDarkMode = useSelector(selectDarkMode);
  const scheme = useColorScheme();
  const onToggleSwitch = () => {
    reduxDispatch(setDarkMode(Boolean(!selDarkMode)));
    if (selDarkMode) {
      Appearance.set({colorScheme: 'light'});
    } else {
      Appearance.set({colorScheme: 'dark'});
    }
  };
  return (
    <View style={styles.darkModeMainView}>
      <Text
        style={[
          styles.darkModeText,
          {
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}>
        {Lables.DARKMODE}
      </Text>
      <Switch
        value={selDarkMode}
        onValueChange={onToggleSwitch}
        color={Colors.WHITE}
        trackColor={{true: Colors.SWITCHON, false: Colors.GREYSCALE}}
      />
    </View>
  );
};

export default DarkMode;
