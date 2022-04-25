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
    <TouchableHighlight style={styles.liveAuctionsNftBtn}>
      <View>
        <View
          style={[
            styles.currentBiddingNftMainView,
            {
              backgroundColor:
                scheme == 'light' ? Colors.WHITE : Colors.SEARCHBARCOLORDARK,
              marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
            },
          ]}>
          <Image source={item?.artImage} style={styles.productImage} />
          <View
            style={{
              marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
              marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
            }}>
            <Text style={[styles.artName, {color: colors.primary}]}>
              {item?.artName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
              }}>
              <View style={{flexDirection: 'row'}}>
                <ImageBackground
                  source={item?.artImage}
                  style={styles.profileImages}
                  imageStyle={{borderRadius: 100}}>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={styles.onlineOuterCircleView}>
                      <View style={styles.onlineCircleView} />
                    </View>
                  </View>
                </ImageBackground>
                <View
                  style={{padding: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                  <Text
                    style={[
                      styles.creatorName,
                      {
                        color:
                          scheme == 'light'
                            ? Colors.SEARCHBARCOLORDARK
                            : Colors.WHITE,
                      },
                    ]}>
                    {item?.creatorName}
                  </Text>
                  <Text>{Lables.CREATOR}</Text>
                </View>
              </View>
              <Icon
                style={{
                  marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
                  marginRight: PixelRatio.getPixelSizeForLayoutSize(3),
                }}
                name="deselect_heart"
              />
            </View>
          </View>
        </View>
        {item?.sold ? (
          <SoldFor rate={item?.rate} />
        ) : (
          <CurrentBidding
            rate={item?.rate}
            minutes={item?.minutes}
            seconds={item?.seconds}
          />
        )}
      </View>
    </TouchableHighlight>
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
            paddingBottom: PixelRatio.getPixelSizeForLayoutSize(5),
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
