import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useColorScheme,
  PixelRatio,
} from 'react-native';
import React, {Fragment} from 'react';
import {styles} from './styles';
import {PaymentMethod} from '../../Utils/Lists/PaymentMethod';
import Icon from '../../Customs/Icon';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';

type AddWalletProcessOneProps = {
  item: {
    methodName: string;
  };
  index: number;
};
const AddWalletProcessOne = () => {
  const scheme = useColorScheme();
  const renderItems = ({item, index}: AddWalletProcessOneProps) => (
    <TouchableOpacity
      style={[
        styles.addMethodName,
        {
          backgroundColor:
            scheme == 'light' ? Colors.BACKGROUND : Colors.SEARCHBARCOLORDARK,
        },
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={[
            styles.addMainView,
            {
              backgroundColor:
                scheme == 'light' ? Colors.PLUSWHITE : Colors.DIGITALARTCOLOR,
            },
          ]}>
          <Icon name={scheme == 'light' ? 'plus_white' : 'plus_dark'} />
        </View>
        <Text
          style={[
            styles.methodName,
            {
              color:
                scheme == 'light'
                  ? Colors.DISCOVERMAINTEXT
                  : Colors.LIGHTBACKGROUND,
            },
          ]}>
          {item?.methodName}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <Fragment>
      <FlatList
        data={PaymentMethod}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </Fragment>
  );
};

export default AddWalletProcessOne;
