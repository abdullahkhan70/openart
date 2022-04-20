import {
  View,
  Text,
  PixelRatio,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
import {styles} from './styles';
import Icon from '../../Customs/Icon';

interface MediaButtonsProps {
  text: string;
  dark: string;
  light: string;
}
const MediaButtons: React.FC<MediaButtonsProps> = ({text, dark, light}) => {
  const scheme = useColorScheme();
  return (
    <>
      <TouchableOpacity
        style={[
          styles.mediaLinkBtn,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.HIGHTESTBIDDARK
                : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        <View style={styles.mediaLinksViewBtn}>
          <Icon
            name={scheme == 'light' ? light : dark}
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
          />
          <Text
            style={[
              styles.websiteLabel,
              {
                color:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.VIEWALLDARK,
              },
            ]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MediaButtons;
