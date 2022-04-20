import {View, Text, useColorScheme, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

const FurtherDetails: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.totalViewMainView}>
      <Text
        style={[
          styles.memberSinceText,
          {
            color:
              scheme == 'light'
                ? Colors.DIGITALARTCOLOR
                : Colors.LIGHTBACKGROUND,
          },
        ]}>
        {Lables.MEMBERSINCE + '2021'}
      </Text>
      <View style={styles.MainView}>
        <Text
          style={[
            styles.emptyCollectionText,
            {
              color:
                scheme == 'light'
                  ? Colors.DIGITALARTCOLOR
                  : Colors.LIGHTBACKGROUND,
            },
          ]}>
          {Lables.EMPTYCOLLECTIONS}
        </Text>
        <Text
          style={[
            styles.startBuildingCollectionText,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.LIGHTBACKGROUND,
            },
          ]}>
          {Lables.STARTBUILDINGCOLLECTION}
        </Text>
      </View>
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientArtWork}>
        <TouchableOpacity
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
            {Lables.EXPOLREARTWORK}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default FurtherDetails;
