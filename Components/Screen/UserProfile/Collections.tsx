import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {Colors} from '../../Utils/Colors';
const Collections: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.followeredByMainView}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.collectionsCreatedText,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.VIEWALLDARK,
            },
          ]}>
          {Lables.CREATED}
        </Text>
        <Text
          style={[
            styles.collactionsCollectedText,
            {
              color:
                scheme == 'light' ? Colors.PLACEHOLDERCOLOR : Colors.BACKGROUND,
            },
          ]}>
          {Lables.COLLEDCTED}
        </Text>
      </View>
    </View>
  );
};

export default Collections;
