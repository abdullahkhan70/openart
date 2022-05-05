import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../Utils/Colors';
import Icon from '../../Customs/Icon';

type AuctionOptionsProps = {
  label: string;
  data: {
    id: number;
    text: string;
  }[];
  placeholder: string;
};

type RenderItemsProps = {
  value: string;
};
const AuctionOptions = ({label, data, placeholder}: AuctionOptionsProps) => {
  const scheme = useColorScheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  const __onPress = (props: any) => {
    if (
      props.parent === null &&
      !props.categorySelectable &&
      props.selectable !== true
    ) {
      return;
    }

    props.onPress(props.item, props.custom);
  };

  const RenderItems = (props: RenderItemsProps) => (
    <TouchableOpacity onPress={() => __onPress(props)}>
      <View style={styles.optionDropDown}>
        <Text style={styles.optionDropDownText}>{props.value}</Text>
        <View style={styles.optionDropDownView} />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.containerAuctionView}>
      <Text
        style={[
          styles.auctionMainLabel,
          {
            color:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.LIGHTBACKGROUND,
          },
        ]}>
        {label}
      </Text>
      <DropDownPicker
        schema={{label: 'text', value: 'text'}}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={{
          backgroundColor:
            scheme == 'dark'
              ? Colors.SEARCHBARCOLORDARK
              : Colors.HIGHTESTBIDDARK,
          borderWidth: 0,
        }}
        containerStyle={[
          styles.dropContainerAuctionStyle,
          {
            backgroundColor:
              scheme == 'dark'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.HIGHTESTBIDDARK,
          },
        ]}
        placeholder={placeholder}
        itemSeparatorStyle={styles.optionDropDownView}
        closeOnBackPressed={true}
        ArrowUpIconComponent={() => (
          <Icon
            style={{transform: [{rotate: '180deg'}]}}
            name={scheme == 'light' ? 'arrow_black' : 'arrow_white'}
            size={PixelRatio.getPixelSizeForLayoutSize(5)}
          />
        )}
        ArrowDownIconComponent={() => (
          <Icon
            name={scheme == 'light' ? 'arrow_black' : 'arrow_white'}
            size={PixelRatio.getPixelSizeForLayoutSize(5)}
          />
        )}
        renderListItem={props => <RenderItems {...props} />}
      />
    </View>
  );
};

export default AuctionOptions;
