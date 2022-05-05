import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {Fragment} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utils/Colors';

interface LinearGradientBackgroundButtonProps {
  onPress: () => void;
  label: String;
  style: ViewStyle;
}

const LinearGradientBackgroundButton = ({
  onPress,
  label,
  style,
}: LinearGradientBackgroundButtonProps) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={[styles.placeABidBtn, {...style}]}
        activeOpacity={0.5}
        onPress={onPress}>
        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <Text style={styles.placeBidText}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Fragment>
  );
};

export default LinearGradientBackgroundButton;
