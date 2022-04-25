import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  PixelRatio,
  Alert,
} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import Icon from '../../Customs/Icon';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import {Checkbox} from 'react-native-paper';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {
  selectMutlitFile,
  setMultiUploadImages,
  setMutlitFile,
} from '../../Utils/Redux/uploadArtworkSlice';
const BrowseAssets = () => {
  const reduxDispatch = useDispatch();
  const selMultiFile = useSelector(selectMutlitFile);
  const scheme = useColorScheme();
  useEffect(() => {
    console.log(`The Multi-File: ${selMultiFile}`);
  });
  const handleImagePicker = async () => {
    try {
      const data = await MultipleImagePicker.openPicker({
        usedCameraButton: false,
        mediaType: 'all',
        maxSelectedAssets: selMultiFile ? 10 : 1,
        isExportThumbnail: true,
      });
      console.log('The Data is: ' + JSON.stringify(data));
      for (let assets of data) {
        console.log(`File Video: ${'file://' + assets.realPath}`);
        reduxDispatch(
          setMultiUploadImages(
            Object({
              id: uuid.v4(),
              path: assets.type == 'image' ? 'file://' + assets.path : '',
              image: assets.type == 'video' ? assets.thumbnail : '',
            }),
          ),
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <Text
        style={[
          styles.uploadArtworkText,
          {
            color:
              scheme == 'light'
                ? Colors.DIGITALARTCOLOR
                : Colors.LIGHTBACKGROUND,
          },
        ]}>
        {Lables.UPLOADARTWORK}
      </Text>
      <TouchableOpacity
        onPress={handleImagePicker}
        style={[
          styles.uploadArtworkBtn,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.LIGHTBACKGROUND
                : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        <Icon
          onPress={handleImagePicker}
          name={scheme == 'light' ? 'image_black' : 'image_white'}
          size={PixelRatio.getPixelSizeForLayoutSize(12)}
        />
        <Text
          style={[
            styles.uploadAssetsForSale,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
            },
          ]}>
          {Lables.UPLOADASSETSFORSALE}
        </Text>
        <Text
          style={[
            styles.assetsAllowText,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
            },
          ]}>
          {Lables.ASSETSALLOW}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: PixelRatio.getPixelSizeForLayoutSize(3),
        }}>
        <Checkbox
          status={selMultiFile ? 'checked' : 'unchecked'}
          onPress={() => {
            reduxDispatch(setMutlitFile(Boolean(!selMultiFile)));
          }}
          color={Colors.MULTIFILECHECKEDBOXWHITE}
          uncheckedColor={scheme == 'light' ? Colors.GREYSCALE : Colors.WHITE}
        />
        <Text
          style={[
            styles.multiFileText,
            {
              color:
                scheme == 'light'
                  ? Colors.PLACEHOLDERCOLOR
                  : Colors.LIGHTBACKGROUND,
            },
          ]}>
          {Lables.MULTIFILES}
        </Text>
      </View>
    </Fragment>
  );
};

export default BrowseAssets;
