import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React, {Fragment} from 'react';
import {styles} from '../styles';
import Icon from '../../../Customs/Icon';
import {Colors} from '../../../Utils/Colors';
import {Lables} from '../../../Utils/Strings';

const FollowUp: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <Fragment>
      <TouchableOpacity style={styles.followBtn}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon name="deselect_heart" />
          <Text
            style={[
              styles.hotCollectionsFollowText,
              {
                color:
                  scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE,
              },
            ]}>
            {Lables.FOLLOW}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default FollowUp;
