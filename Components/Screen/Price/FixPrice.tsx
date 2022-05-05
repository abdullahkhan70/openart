import {
  View,
  Text,
  useColorScheme,
  PixelRatio,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from '../../Customs/Icon';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectEnterEthValue,
  selectOncePurchasedSwitch,
  setEnterEthValue,
  setOncePurchasedSwitch,
} from '../../Utils/Redux/uploadArtworkSlice';
import MainView from './MainView';
import {Switch} from 'react-native-paper';
import LinearGradientBackgroundButton from '../../Customs/LinearGradientButtons/LinearGradientBackgroundButton';
import {useNavigation} from '@react-navigation/native';

const FixPrice = () => {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const selOncePurchasedSwitch = useSelector(selectOncePurchasedSwitch);
  const handleSwitchChange = () => {
    reduxDispatch(setOncePurchasedSwitch(Boolean(!selOncePurchasedSwitch)));
  };
  const handleMintNFT = () => {};
  return (
    <Fragment>
      <MainView labels={Lables.FIXEDPRICETEXT} />
      <View style={styles.overLineView} />
      <View style={styles.oncePurchasedMainView}>
        <View>
          <Text
            style={[
              styles.oncePurchasedText,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.BACKGROUND,
              },
            ]}>
            {Lables.ONCEPURCHASED}
          </Text>
          <Text style={styles.obncePurchasedSubText}>
            {Lables.ONCEPURCHASEDSUBTEXT}
          </Text>
        </View>
        <Switch
          value={selOncePurchasedSwitch}
          onValueChange={handleSwitchChange}
          color={Colors.PLACEABIDFIRSTCOLOR}
        />
      </View>
      <LinearGradientBackgroundButton
        label={Lables.MINTNFT}
        style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(10)}}
        onPress={handleMintNFT}
      />
    </Fragment>
  );
};

export default FixPrice;
