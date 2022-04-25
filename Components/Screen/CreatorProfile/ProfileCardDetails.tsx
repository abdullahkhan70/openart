import {View, Text, useColorScheme, PixelRatio} from 'react-native';
import React from 'react';
import Icon from '../../Customs/Icon';
import {styles} from './styles';

type profileCardDetails = {
  blackIcon: string;
  whiteIcon: string;
  detail: string;
};

const ProfileCardDetails = ({
  blackIcon,
  whiteIcon,
  detail,
}: profileCardDetails) => {
  const scheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(7),
      }}>
      <Icon name={scheme == 'light' ? blackIcon : whiteIcon} />
      <Text style={styles.detailText}>{detail}</Text>
    </View>
  );
};

export default ProfileCardDetails;
