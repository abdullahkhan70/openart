import {View, Text, useColorScheme, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../UserProfile/styles';
import {Colors} from '../../Utils/Colors';
import {Lables, Screen} from '../../Utils/Strings';
import {DummyDiscoverCreator} from '../../Utils/Lists/DummyDiscoverCreator';
import Icon from '../../Customs/Icon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
const FolloweredBy: React.FC = () => {
  const reduxDispatch = useDispatch();
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const handleEditProfile = () => {
    navigation.navigate(Screen.USEREDITPROFILE);
  };
  return (
    <View style={styles.totalViewMainView}>
      <View>
        <Text
          style={[
            styles.totalViewFollowing,
            {color: scheme == 'light' ? Colors.BLACK : Colors.BACKGROUND},
          ]}>
          {DummyDiscoverCreator[0]?.followers}
        </Text>
        <Text
          style={[
            styles.totalViewFollowingLabel,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.FOLLOWING}
        </Text>
      </View>
      <View>
        <Text
          style={[
            styles.totalViewFollowing,
            {color: scheme == 'light' ? Colors.BLACK : Colors.BACKGROUND},
          ]}>
          {DummyDiscoverCreator[0]?.followers}
        </Text>
        <Text
          style={[
            styles.totalViewFollowingLabel,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.FOLLOWERS}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleEditProfile}
        style={[
          styles.EditedPencilBtn,
          {
            backgroundColor:
              scheme == 'dark' ? Colors.SEARCHBARCOLORDARK : Colors.BACKGROUND,
          },
        ]}>
        <Icon
          name={scheme == 'light' ? 'pencil_light' : 'pencil_dark'}
          onPress={handleEditProfile}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FolloweredBy;
