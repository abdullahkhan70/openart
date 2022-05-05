import {View, Text, useColorScheme, PixelRatio} from 'react-native';
import React from 'react';
import {Lables, Screen} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectAgreeTermsOfServiceCheckBox,
  selectThirteenYearOldCheckBox,
  setAgreeTermsOfServiceCheckBox,
  setThirteenYearOldCheckBox,
} from '../../Utils/Redux/uploadArtworkSlice';
import LinearGradientWithButton from '../../Customs/LinearGradientButtons/LinearGradientWithButton';
import LinearGradientBackgroundButton from '../../Customs/LinearGradientButtons/LinearGradientBackgroundButton';
import {useNavigation} from '@react-navigation/native';

const AddWalletProcessThree = () => {
  const navigation = useNavigation();
  const reduxDispatch = useDispatch();
  const selThirteenYearsOldCheckBox = useSelector(
    selectThirteenYearOldCheckBox,
  );
  const selAgreeTermsOfServiceCheckBox = useSelector(
    selectAgreeTermsOfServiceCheckBox,
  );

  const handleThirteenYearsOldCheckBox = () => {
    reduxDispatch(
      setThirteenYearOldCheckBox(Boolean(!selThirteenYearsOldCheckBox)),
    );
  };

  const handleAgreeoOfServiceCheckBox = () => {
    reduxDispatch(
      setAgreeTermsOfServiceCheckBox(Boolean(!selAgreeTermsOfServiceCheckBox)),
    );
  };
  const handleCancel = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleLetsGo = () => {
    navigation.navigate(Screen.PRICESCREEN);
  };
  const scheme = useColorScheme();
  return (
    <View style={styles.termsOfServiceMainView}>
      <Text
        style={[
          styles.termsOfServiceMainText,
          {
            color:
              scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
          },
        ]}>
        {Lables.TERMSOFSERVICE}
      </Text>
      <Text style={styles.termsOfServiceSubText}>
        {Lables.TERMSOFSERVICETEXT}
      </Text>
      <View style={styles.thirteenYearsOldCheckBoxView}>
        <Checkbox
          status={selThirteenYearsOldCheckBox ? 'checked' : 'unchecked'}
          onPress={handleThirteenYearsOldCheckBox}
          uncheckedColor={
            scheme == 'light' ? Colors.PLACEHOLDERCOLOR : Colors.WHITE
          }
          color={Colors.PLACEABIDFIRSTCOLOR}
        />
        <Text
          style={[
            styles.thirteenYearsOldCheckBoxText,
            {color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE},
          ]}>
          {Lables.THIRTEENYEARSOLDTEXT}
        </Text>
      </View>
      <View style={styles.agreeOfServiceCheckBoxView}>
        <Checkbox
          status={selAgreeTermsOfServiceCheckBox ? 'checked' : 'unchecked'}
          onPress={handleAgreeoOfServiceCheckBox}
          uncheckedColor={
            scheme == 'light' ? Colors.PLACEHOLDERCOLOR : Colors.WHITE
          }
          color={Colors.PLACEABIDFIRSTCOLOR}
        />
        <Text
          style={[
            styles.thirteenYearsOldCheckBoxText,
            {color: scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.WHITE},
          ]}>
          {Lables.AGREEOFSERVICESTEXT}
        </Text>
      </View>
      <LinearGradientBackgroundButton
        onPress={handleLetsGo}
        label={Lables.LETSGO}
        style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(10)}}
      />
      <LinearGradientWithButton
        onPress={handleCancel}
        label={Lables.CANCEL}
        style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(5)}}
      />
    </View>
  );
};

export default AddWalletProcessThree;
