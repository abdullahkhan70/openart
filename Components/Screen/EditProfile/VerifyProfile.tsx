import {
  View,
  Text,
  PixelRatio,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import Icon from '../../Customs/Icon';

const VerifyProfile: React.FC = () => {
  const scheme = useColorScheme();
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
          {Lables.VERIFYPROFILE}
        </Text>
        <Text
          style={[
            styles.foundationCommunityText,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.HIGHTESTBIDDARK,
            },
          ]}>
          {Lables.FOUNDATIONCOMMUNITY}
        </Text>
      </View>
      <TouchableOpacity style={styles.twitterBtn}>
        <View style={styles.twitterViewBtn}>
          <Icon
            name="twitter_profile"
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
          />
          <Text
            style={[
              styles.verifyTwitter,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.BACKGROUND,
              },
            ]}>
            {Lables.VERIFYTWITTER}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.instagramBtn}>
        <View style={styles.twitterViewBtn}>
          <Icon
            name="instagram_profile"
            size={PixelRatio.getPixelSizeForLayoutSize(10)}
          />
          <Text
            style={[
              styles.verifyTwitter,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.BACKGROUND,
              },
            ]}>
            {Lables.VERIFYTWITTER}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default VerifyProfile;
