import {View, Text, useColorScheme, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

const DiscoverMore: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <Fragment>
      <Text
        style={[
          styles.discoverCreator,
          {
            color:
              scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
          },
        ]}>
        {Lables.DISCOVERCREATOR}
      </Text>
      <Text
        style={[
          styles.discoverCreatorText,
          {
            color:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.VIEWALLDARK,
          },
        ]}>
        {Lables.DISCOVERCREATORTEXT}
      </Text>
      <View style={styles.discoverMoreMainView}>
        <View style={{alignSelf: 'flex-start'}}>
          <TouchableOpacity style={styles.placeABidBtn} activeOpacity={0.5}>
            <LinearGradient
              colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
              start={{x: 0.8, y: -0.5}}
              end={{x: 1, y: 1}}
              style={styles.linearGradient}>
              <Text style={styles.placeBidText}>{Lables.FEATURECREATOR}</Text>
            </LinearGradient>
          </TouchableOpacity>
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
                    : Colors.VIEWALLDARK,
              },
            ]}>
            {Lables.ALLCREATOR}
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default DiscoverMore;
