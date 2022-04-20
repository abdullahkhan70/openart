import {View, Text, useColorScheme, PixelRatio} from 'react-native';
import React from 'react';
import Icon from '../../../Customs/Icon';
import {styles} from './styles';
import {Lables} from '../../../Utils/Strings';
import {Colors} from '../../../Utils/Colors';

const MainView: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="hot_bid" />
        <Text
          style={[
            styles.hotBidText,
            {
              color: scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
            },
          ]}>
          {Lables.HOTBID}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="arrow"
          style={styles.leftArrow}
          size={PixelRatio.getPixelSizeForLayoutSize(10)}
        />
        <Icon
          name="arrow"
          style={styles.rightArrow}
          size={PixelRatio.getPixelSizeForLayoutSize(10)}
        />
      </View>
    </View>
  );
};

export default MainView;
