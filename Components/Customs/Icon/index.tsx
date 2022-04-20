import React from 'react';
import {Text, StyleSheet, ViewStyle} from 'react-native';
import {IconRegistry, IconName} from './registry';
import {Colors} from '../../Utils/Colors';

const Icon = (props: IconProps) => {
  const {
    name,
    size = 24,
    tint = Colors.WHITE,
    rotation = 0,
    direction = 'right',
    onPress = () => {},
  } = props;
  const rot =
    {
      right: 0,
      down: 90,
      left: 180,
      up: 270,
    }[direction] + rotation;

  if (Number.isNaN(rot)) {
    throw new Error(
      'Invalid value for direction. Must be: "left" | "right" | "up" | "down"',
    );
  }

  const style = {
    ...(props.style as any),
  };
  style.transform = [{rotate: `${rot}deg`}, ...(style.transform || [])];

  const UNKNOWN_ICON = <Text style={styles.unknown}>?</Text>;

  const registryEntry = IconRegistry[name];
  if (!registryEntry) {
    return UNKNOWN_ICON;
  }

  const component = registryEntry.default;

  return component
    ? React.createElement(component, {
        height: size,
        width: size,
        color: tint,
        style,
        onPress: onPress,
      })
    : UNKNOWN_ICON;
};

const styles = StyleSheet.create({
  unknown: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export type IconDirection = 'left' | 'right' | 'up' | 'down';

export interface IconProps {
  name?: IconName;
  size?: number;
  tint?: string;
  rotation?: number;
  transform?: string;
  style?: ViewStyle;
  direction?: IconDirection;
  onPress?: () => {};
}

export default Icon;
