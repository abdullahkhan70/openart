import {
  View,
  Text,
  TouchableHighlight,
  useColorScheme,
  PixelRatio,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import {useTheme} from '@react-navigation/native';
import {styles} from '../../Screen/Home/styles';
import SoldFor from '../../Screen/Home/LiveAuctions/SoldFor';
import CurrentBidding from '../../Screen/Home/LiveAuctions/CurrentBidding';
import Icon from '../Icon';

type LiveAuctionViewProps = {
  item: {
    artImage: number;
    artName: string;
    creatorName: string;
    rate: number;
    sold: boolean;
    minutes: number;
    seconds: number;
  };
  index?: number;
};
const LiveAuctionView = ({item}: LiveAuctionViewProps) => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  return (
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
};

export default LiveAuctionView;
