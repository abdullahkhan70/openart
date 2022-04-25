import {
  View,
  Text,
  PixelRatio,
  Dimensions,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import React, {Fragment} from 'react';
// import {FloatingLabelInput} from '../../Customs/FloatingLabel/FloatingLabelInput';
import {Lables} from '../../Utils/Strings';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectDescription,
  selectItemName,
  selectTag,
  setItemName,
} from '../../Utils/Redux/uploadArtworkSlice';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
const {width} = Dimensions.get('window');

type InputTextFieldsProps = {
  dispatchFunction: (val: string) => void;
  selectDispatch: () => void;
  label: string;
  hintText: string;
  style: ViewStyle;
};
const InputTextFields = ({
  dispatchFunction,
  selectDispatch,
  label,
  hintText,
  style,
}: InputTextFieldsProps) => {
  const reduxDispatch = useDispatch();
  const scheme = useColorScheme();
  return (
    <View style={{width: width - 40, alignSelf: 'center'}}>
      <FloatingLabelInput
        label={label}
        value={selectDispatch}
        containerStyles={{
          borderWidth: 1.5,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderColor:
            scheme == 'dark' ? Colors.LIGHTBACKGROUND : Colors.DISCOVERMAINTEXT,
          borderRadius: 8,
          width: width - 20,
          alignSelf: 'center',
          marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
        }}
        customLabelStyles={{
          colorFocused:
            scheme == 'light'
              ? Colors.PLACEHOLDERCOLOR
              : Colors.LIGHTBACKGROUND,
          fontSizeFocused: 12,
        }}
        labelStyles={{
          backgroundColor: '#fff',
          paddingHorizontal: 5,
        }}
        inputStyles={{
          color: 'blue',
          paddingHorizontal: 10,
        }}
        onChangeText={text => reduxDispatch(dispatchFunction(String(text)))}
      />
    </View>
  );
};

export default InputTextFields;
