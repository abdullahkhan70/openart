import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import Icon from '../../Customs/Icon';
import ProfileCardDetails from './ProfileCardDetails';
import {Lables, Screen} from '../../Utils/Strings';
import ProfileCardCreatorButtons from './ProfileCardCreatorButtons';
import {useNavigation} from '@react-navigation/native';
const ProfileCard = () => {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const handleDownload = (): void => {
    navigation.navigate(Screen.CREATORUPLOADARTWORK);
  };
  return (
    <View
      style={[
        styles.profileCardMainContainer,
        {
          backgroundColor:
            scheme == 'light' ? Colors.WHITE : Colors.SEARCHBARCOLORDARK,
        },
      ]}>
      <View style={[styles.profileCardContainer]}>
        <ProfileCardDetails
          blackIcon="email_black"
          whiteIcon="email_white"
          detail={Lables.FAKEEMAIL}
        />
        <TouchableOpacity
          style={[
            styles.editPencilStyle,
            {
              backgroundColor:
                scheme == 'light'
                  ? Colors.LIGHTBACKGROUND
                  : Colors.TOOLBARDARKCOLOR,
            },
          ]}>
          <Icon name={scheme == 'light' ? 'pencil_light' : 'pencil_dark'} />
        </TouchableOpacity>
      </View>
      <View style={{marginVertical: -PixelRatio.getPixelSizeForLayoutSize(5)}}>
        <ProfileCardDetails
          blackIcon="link_black"
          whiteIcon="link_white"
          detail={Lables.CREATORPROFILELINKED}
        />
        <ProfileCardDetails
          blackIcon="call_black"
          whiteIcon="call_white"
          detail={Lables.FAKEPHONENUMBER}
        />
        <ProfileCardDetails
          blackIcon="share_black"
          whiteIcon="sahre_white"
          detail={Lables.FAKESHaRE}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
          }}>
          <TouchableOpacity
            style={[
              styles.profileCardFollow,
              {
                borderColor:
                  scheme == 'light'
                    ? Colors.BORDERCREATORPORFILE
                    : Colors.LIGHTBACKGROUND,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={scheme == 'light' ? 'deselect_heart' : 'deselect_heart'}
              />
              <Text
                style={[
                  styles.followText,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.SEARCHBARCOLORDARK
                        : Colors.LIGHTBACKGROUND,
                  },
                ]}>
                {Lables.FOLLOW}
              </Text>
            </View>
          </TouchableOpacity>
          <ProfileCardCreatorButtons
            darkIcon={'download'}
            lightIcon={'download'}
            onPressEvent={handleDownload}
          />
          <ProfileCardCreatorButtons
            darkIcon={'download'}
            lightIcon={'download'}
            onPressEvent={handleDownload}
          />
        </View>
        <Text
          style={[
            styles.memeberSinceText,
            {
              color:
                scheme == 'light'
                  ? Colors.SEARCHBARCOLORDARK
                  : Colors.LIGHTBACKGROUND,
            },
          ]}>
          {Lables.MEMBERSINCE + new Date().getFullYear()}
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
