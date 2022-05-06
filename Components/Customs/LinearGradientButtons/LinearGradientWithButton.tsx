import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import React, {Fragment} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';

interface LinearGradientWithButtonProps {
  onPress?: () => void;
  label?: String;
  style?: ViewStyle;
}

const LinearGradientWithButton = ({
  onPress,
  label,
  style,
}: LinearGradientWithButtonProps) => {
  const scheme = useColorScheme();
  return (
    <Fragment>
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={[styles.linearGradientArtWork, {...style}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={[
            styles.viewArtworkBtn,
            {
              backgroundColor:
                scheme == 'light' ? Colors.BACKGROUND : Colors.BACKGROUND,
            },
          ]}>
          <Text
            style={[
              styles.placeBidText,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {label}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </Fragment>
  );
};

export default LinearGradientWithButton;
