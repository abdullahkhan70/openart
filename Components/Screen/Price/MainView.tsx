import {
  View,
  Text,
  useColorScheme,
  PixelRatio,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Lables} from '../../Utils/Strings';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from '../../Customs/Icon';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectEnterEthValue,
  setEnterEthValue,
} from '../../Utils/Redux/uploadArtworkSlice';

interface MainViewProps {
  labels: string;
}

const MainView = ({labels}: MainViewProps) => {
  const scheme = useColorScheme();
  const reduxDispatch = useDispatch();
  const [ethereumOpen, setEthereumOpen] = useState(false);
  const [ethereumValue, setEthereumValue] = useState('ETH');
  const [ethereumItems, setEthereumItems] = useState([
    {label: 'ETH', value: 'eth'},
  ]);
  const selEnterEthValue = useSelector(selectEnterEthValue);

  const handleCrossBtn = () => {
    reduxDispatch(setEnterEthValue(String('')));
  };
  return (
    <View style={styles.fixPriceMainView}>
      <Text
        style={[
          styles.minimumBidText,
          {
            color:
              scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
          },
        ]}>
        {labels}
      </Text>
      <Text
        style={[
          styles.minimumBidReceiveText,
          {
            color:
              scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
          },
        ]}>
        {Lables.MINIMUMBIDRECEIVE}
      </Text>
      <View
        style={{
          marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <DropDownPicker
          open={ethereumOpen}
          value={ethereumValue}
          items={ethereumItems}
          setOpen={setEthereumOpen}
          setValue={setEthereumValue}
          setItems={setEthereumItems}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          containerStyle={styles.dropDownContainerStyle}
          placeholder={ethereumValue}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
            marginLeft: PixelRatio.getPixelSizeForLayoutSize(2),
          }}>
          <TextInput
            style={[
              styles.enterEthValue,
              {
                backgroundColor:
                  scheme == 'light'
                    ? Colors.BACKGROUND
                    : Colors.SEARCHBARCOLORDARK,
              },
            ]}
            value={selEnterEthValue}
            placeholder={Lables.ENTERETH}
            onChangeText={text => reduxDispatch(setEnterEthValue(String(text)))}
          />
          <TouchableOpacity
            onPress={handleCrossBtn}
            style={[
              styles.closeBtn,
              {
                backgroundColor:
                  scheme == 'light'
                    ? Colors.BACKGROUND
                    : Colors.SEARCHBARCOLORDARK,
              },
            ]}>
            <View style={{alignSelf: 'center'}}>
              <Icon
                style={[
                  styles.closeBtn,
                  {
                    backgroundColor:
                      scheme == 'light'
                        ? Colors.BACKGROUND
                        : Colors.SEARCHBARCOLORDARK,
                  },
                ]}
                onPress={handleCrossBtn}
                name={scheme == 'light' ? 'close_black' : 'close_white'}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainView;
