import {
  View,
  Text,
  useColorScheme,
  TextInput,
  PixelRatio,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
const {height} = Dimensions.get('window');
const EnterDetails: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <View style={styles.enterDetailMainView}>
      <Text
        style={[
          styles.enterDetailLable,
          {
            color:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.LIGHTBACKGROUND,
          },
        ]}>
        {Lables.ENTERDETAILS}
      </Text>
      <TextInput
        style={[
          styles.nameInputField,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.HIGHTESTBIDDARK
                : Colors.SEARCHBARCOLORDARK,
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}
        placeholder={Lables.ENTERNAME}
      />
      <TextInput
        style={[
          styles.nameInputField,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.HIGHTESTBIDDARK
                : Colors.SEARCHBARCOLORDARK,
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}
        placeholder={Lables.ENTERUSERNAME}
      />
      <Text
        style={[
          styles.enterDetailLable,
          {
            color:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.LIGHTBACKGROUND,
            marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
          },
        ]}>
        {Lables.ENTEREMAILLABEL}
      </Text>
      <TextInput
        style={[
          styles.nameInputField,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.HIGHTESTBIDDARK
                : Colors.SEARCHBARCOLORDARK,
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}
        placeholder={Lables.ENTEREMAIL}
      />
      <Text style={styles.emailHintText}>{Lables.EMAILHINT}</Text>
      <Text
        style={[
          styles.enterDetailLable,
          {
            color:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.LIGHTBACKGROUND,
            marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
          },
        ]}>
        {Lables.ENTERBIOLABEL}
      </Text>
      <TextInput
        style={[
          styles.nameInputField,
          {
            backgroundColor:
              scheme == 'light'
                ? Colors.HIGHTESTBIDDARK
                : Colors.SEARCHBARCOLORDARK,
            color:
              scheme == 'light' ? Colors.DISCOVERMAINTEXT : Colors.VIEWALLDARK,
          },
        ]}
        placeholder={Lables.ENTERBIO}
      />
    </View>
  );
};

export default EnterDetails;
