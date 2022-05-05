import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
const Header = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.containerHeader}>
      <Text
        style={[
          styles.addWalletPayMainText,
          {
            color:
              scheme == 'light'
                ? Colors.DIGITALARTCOLOR
                : Colors.LIGHTBACKGROUND,
          },
        ]}>
        {Lables.ADDWALLETPAY}
      </Text>
      <Text
        style={[
          styles.addWalletPayMainSubText,
          {
            color:
              scheme == 'light'
                ? Colors.DISCOVERMAINTEXT
                : Colors.LIGHTBACKGROUND,
          },
        ]}>
        {Lables.ADDWALLETPAYSUBTEXT}
      </Text>
    </View>
  );
};

export default Header;
