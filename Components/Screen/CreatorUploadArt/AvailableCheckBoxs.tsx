import {View, Text, useColorScheme, PixelRatio} from 'react-native';
import React, {useCallback} from 'react';
import {Checkbox} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
type AvailableCheckBoxsProps = {
  dispatchFunction: (val: boolean) => void;
  selDispatch: () => boolean;
  label: string;
  subLabel: string;
};
const AvailableCheckBoxs = ({
  dispatchFunction,
  selDispatch,
  label,
  subLabel,
}: AvailableCheckBoxsProps) => {
  const reduxDispatch = useDispatch();
  const scheme = useColorScheme();
  const handleCheckBox = useCallback(() => {
    reduxDispatch(dispatchFunction(Boolean(!selDispatch)));
  }, [selDispatch]);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
      }}>
      <Checkbox
        status={selDispatch ? 'checked' : 'unchecked'}
        onPress={handleCheckBox}
        color={Colors.MULTIFILECHECKEDBOXWHITE}
        uncheckedColor={scheme == 'light' ? Colors.GREYSCALE : Colors.WHITE}
      />
      <View style={styles.availableCheckBoxSubView}>
        <Text
          style={[
            styles.availableCheckBoxLabel,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
            },
          ]}>
          {label}
        </Text>
        <Text
          style={[
            styles.availableCheckBoxSubLabel,
            {
              color:
                scheme == 'dark'
                  ? Colors.LIGHTBACKGROUND
                  : Colors.PLACEHOLDERCOLOR,
            },
          ]}>
          {subLabel}
        </Text>
      </View>
    </View>
  );
};

export default AvailableCheckBoxs;
