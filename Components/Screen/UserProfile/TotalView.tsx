import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {DummyDiscoverCreator} from '../../Utils/Lists/DummyDiscoverCreator';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';

const TotalView: React.FC = () => {
  const scheme = useColorScheme();
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
        style={[
          styles.discoverCreatorAllCreatorBtn,
          {
            backgroundColor:
              scheme == 'dark'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.SEARCHBARCOLORLIGHT,
          },
        ]}>
        <Text
          style={[
            styles.allCreatorText,
            {
              color:
                scheme == 'light'
                  ? Colors.SEARCHBARCOLORDARK
                  : Colors.BACKGROUND,
            },
          ]}>
          {Lables.FOLLOW}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalView;
