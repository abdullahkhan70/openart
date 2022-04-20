import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {Colors} from '../../../Utils/Colors';
import {DummyCurrentBiddingNFT} from '../../../Utils/Lists/DummyCurrentBiddingNFT';
import {Lables} from '../../../Utils/Strings';

const Title: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text
        adjustsFontSizeToFit
        ellipsizeMode="tail"
        style={[
          styles.hotCollectionsTitle,
          {
            color: scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
          },
        ]}>
        {DummyCurrentBiddingNFT[0].artName}
      </Text>
      <View style={styles.hotCollectionItemsMainView}>
        <Text
          style={[
            styles.hotCollectionsTotalItems,
            {
              color: scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
            },
          ]}>
          {DummyCurrentBiddingNFT.length + Lables.ITEMS}
        </Text>
      </View>
    </View>
  );
};

export default Title;
