import {View, Text, PixelRatio, useColorScheme} from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';

const AddWalletProcessTwo = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.addQRCodeMainView}>
      <QRCode
        value={Lables.WEBSITE}
        size={PixelRatio.getPixelSizeForLayoutSize(60)}
      />
      <Text style={styles.scanWalletText}>{Lables.SCANTOCONNECT}</Text>
    </View>
  );
};

export default AddWalletProcessTwo;
