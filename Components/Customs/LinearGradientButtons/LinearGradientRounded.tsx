import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
interface LinearGradientRoundedProps {
  onPress: () => void;
  label: string;
  style: ViewStyle;
}

const LinearGradientRounded = ({
  onPress,
  label,
  style,
}: LinearGradientRoundedProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.fixPriceBtn, {...style}]}
        activeOpacity={0.5}
        onPress={onPress}>
        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradientfixPrice}>
          <Text style={styles.FixedText}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default LinearGradientRounded;
