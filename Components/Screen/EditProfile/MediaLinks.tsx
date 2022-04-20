import {
  View,
  Text,
  PixelRatio,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Utils/Colors';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import Icon from '../../Customs/Icon';
import MediaButtons from './MediaButtons';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');
const MediaLinks: React.FC = () => {
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
              width: width - 100,
            },
          ]}>
          {Lables.LINKSSOCIALMEDIA}
        </Text>
      </View>
      <MediaButtons
        text={Lables.WEBSITELABLE}
        dark={'link_profile_dark'}
        light={'link_profile_light'}
      />
      <MediaButtons
        text={Lables.DISCORDLABLE}
        dark={'discord_profile_dark'}
        light={'discord_profile_light'}
      />
      <MediaButtons
        text={Lables.INSTAGRAMLABEL}
        dark={'instagram_profile_dark'}
        light={'instagram_profile'}
      />
      <MediaButtons
        text={Lables.YOUTUBELABEL}
        dark={'youtube_profile_dark'}
        light={'youtube_profile_light'}
      />
      <MediaButtons
        text={Lables.FACEBOOKLABEL}
        dark={'facebook_profile_dark'}
        light={'facebook_profile_light'}
      />
      <MediaButtons
        text={Lables.TIKTOKLABEL}
        dark={'tiktok_profile_dark'}
        light={'tiktok_profile_light'}
      />
      <TouchableOpacity style={styles.placeABidBtn} activeOpacity={0.5}>
        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <Text style={styles.placeBidText}>{Lables.SAVE}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default MediaLinks;
