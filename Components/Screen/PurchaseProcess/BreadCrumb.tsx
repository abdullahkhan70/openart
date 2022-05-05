import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';

const BreadCrumb = () => {
  return (
    <View style={styles.containerBreadCrumbHeader}>
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <Text style={styles.placeBidText}>{'1'}</Text>
      </LinearGradient>
      <View style={styles.breadCrumbLine} />
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <Text style={styles.placeBidText}>{'2'}</Text>
      </LinearGradient>
      <View style={styles.breadCrumbLine} />
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <Text style={styles.placeBidText}>{'3'}</Text>
      </LinearGradient>
    </View>
  );
};

export default BreadCrumb;
