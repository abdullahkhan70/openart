import React, {Component, useState} from 'react';
import {
  Dimensions,
  PixelRatio,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../Utils/Colors';
import {selectMultiUploadImages} from '../../Utils/Redux/uploadArtworkSlice';
const {width, height} = Dimensions.get('window');
export const FloatingLabelInput = ({label, props, newView}) => {
  const selMultiUploadImages = useSelector(selectMultiUploadImages);
  const [isFocused, setIsFocused] = useState(false);
  const [texts, setTexts] = useState('');
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (texts != '') {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  };
  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: !isFocused ? 22 : 0,
    fontSize: !isFocused ? 16 : 14,
    color: !isFocused ? '#aaa' : '#000',
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
  };

  const scheme = useColorScheme();
  return (
    <View
      style={{
        marginTop:
          selMultiUploadImages.length > 0
            ? PixelRatio.getPixelSizeForLayoutSize(5)
            : 0,
        paddingTop: 18,
        width: width - 40,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor:
          scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.LIGHTBACKGROUND,
        ...newView,
      }}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        {...props}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(12),
          fontSize: 15,
          color: '#000',
          paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
        }}
        onChangeText={text => setTexts(text)}
        value={texts}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // onSubmitEditing={e => setTexts()}
      />
    </View>
  );
};
