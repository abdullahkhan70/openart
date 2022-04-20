import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {styles} from '../styles';
import {Lables} from '../../../Utils/Strings';
import {Colors} from '../../../Utils/Colors';

type soldForProps = {
  rate: number;
};
const SoldFor: React.FC<soldForProps> = ({rate}) => {
  const {colors} = useTheme();
  const scheme = useColorScheme();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.soldForBtn, {backgroundColor: colors.background}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            adjustsFontSizeToFit
            style={{
              color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
              fontWeight: '400',
              fontSize: 20,
            }}>
            {Lables.SOLDFOR}
          </Text>
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: 24,
              color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
              fontWeight: '700',
              letterSpacing: 1.5,
            }}>
            {rate + ' ' + Lables.ETHLABEL}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SoldFor;
