import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import Icon from '../../Customs/Icon';
type ProfileCardCreatorButtonsProps = {
  darkIcon: string;
  lightIcon: string;
  onPressEvent: () => void;
};
const ProfileCardCreatorButtons = ({
  darkIcon,
  lightIcon,
  onPressEvent,
}: ProfileCardCreatorButtonsProps) => {
  const scheme = useColorScheme();
  return (
    <>
      <TouchableOpacity
        onPress={onPressEvent}
        style={[
          styles.editPencilStyle,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.LIGHTBACKGROUND
                : Colors.TOOLBARDARKCOLOR,
            borderColor:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.LIGHTBACKGROUND,
            borderWidth: 1,
            marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
          },
        ]}>
        <Icon
          onPress={onPressEvent}
          name={scheme == 'light' ? lightIcon : darkIcon}
        />
      </TouchableOpacity>
    </>
  );
};

export default ProfileCardCreatorButtons;
