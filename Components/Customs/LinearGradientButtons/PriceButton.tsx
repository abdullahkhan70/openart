import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {Fragment} from 'react';

interface PriceButtonProps {
  onPress: () => void;
  label: string;
  styleBtn: ViewStyle;
  styleText: ViewStyle;
}

const PriceButton = ({
  onPress,
  label,
  styleBtn,
  styleText,
}: PriceButtonProps) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPress} style={styleBtn}>
        <Text style={styleText}>{label}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default PriceButton;
