import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  PixelRatio,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {useTheme} from '@react-navigation/native';
import {Lables} from '../../Utils/Strings';
import Icon from '../../Customs/Icon';
import {DummyLiveAuctions} from '../../Utils/Lists/DummyLiveAuctions';
import SoldFor from './LiveAuctions/SoldFor';
import CurrentBidding from './LiveAuctions/CurrentBidding';
import LiveAuctionView from '../../Customs/LiveAuctionView/LiveAuctionView';
const {width, height} = Dimensions.get('window');

type renderItemsProps = {
  item: {
    artImage: number;
    artName: string;
    creatorName: string;
    rate: number;
    sold: boolean;
    minutes: number;
    seconds: number;
  };
  index: number;
};

interface Props {
  hideView: boolean;
}
const LiveAuctions: React.FC<Props> = ({hideView}) => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const renderItems = ({item, index}: renderItemsProps) => (
    <LiveAuctionView item={item} index={index} key={index} />
  );
  return (
    <>
      {hideView ? (
        <View
          style={{
            paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: PixelRatio.getPixelSizeForLayoutSize(6),
            paddingRight: PixelRatio.getPixelSizeForLayoutSize(6),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.redMark} />
            <Text style={styles.liveAuctionsText}>{Lables.LIVEAUCTIONS}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.viewAllBtn,
              {
                borderColor:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.PLACEHOLDERCOLOR,
                borderWidth: scheme == 'light' ? 1 : 0,
              },
            ]}>
            <Text
              adjustsFontSizeToFit
              style={{
                color:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.VIEWALLDARK,
                fontSize: 16,
              }}>
              {Lables.VIEWALL}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}

      <FlatList
        data={DummyLiveAuctions}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      />
    </>
  );
};

export default LiveAuctions;
