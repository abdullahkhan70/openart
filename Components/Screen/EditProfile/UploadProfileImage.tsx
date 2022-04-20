import {
  View,
  Text,
  useColorScheme,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectUserProfilePath,
  setUserProfilePath,
} from '../../Utils/Redux/userAccountSlice';

type imagePickerProps = {
  usedCameraButton: boolean;
  isCrop: boolean;
  isCropCircle: boolean;
  mediaType: string;
};
const UploadProfileImage: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selUserProfilePath = useSelector(selectUserProfilePath);
  const scheme = useColorScheme();
  const handleImagePicker = async () => {
    try {
      const data = await MultipleImagePicker.openPicker({
        usedCameraButton: false,
        mediaType: 'image',
        singleSelectedMode: true,
      });
      console.log('The Data is: ' + JSON.stringify(data));
      reduxDispatch(setUserProfilePath(String(data[0]?.realPath)));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <View style={styles.uploadProfileImageMainView}>
        <Text
          style={[
            styles.enterDetailLable,
            {
              color:
                scheme == 'light'
                  ? Colors.SEARCHBARCOLORDARK
                  : Colors.LIGHTBACKGROUND,
              marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
            },
          ]}>
          {Lables.UPLOADPROFILEIMAGE}
        </Text>
      </View>
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientArtWork}>
        <TouchableOpacity
          onPress={handleImagePicker}
          activeOpacity={0.8}
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
            {Lables.UPLOADIMAGE}
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.userProfilePathText}>{selUserProfilePath}</Text>
    </>
  );
};

export default UploadProfileImage;
