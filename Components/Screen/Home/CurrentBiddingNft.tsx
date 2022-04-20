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
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Lables, Screen} from '../../Utils/Strings';
import Icon from '../../Customs/Icon';
import LinearGradient from 'react-native-linear-gradient';
import {numberWithCommas} from '../../Customs/Methods/Methods';
const {width} = Dimensions.get('window');

type currentBiddingNftProps = {
  item: {
    artName: string;
    creatorName: string;
    rate: number;
    artImage: number;
    eth_rate: number;
  };
  index: number;
};

const CurrentBiddingNft: React.FC = () => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const handleViewArtWork = () => {
    navigation.navigate(Screen?.USERITEMDETAILS);
  };
  const renderItems = ({item}: currentBiddingNftProps) => (
    <TouchableHighlight style={styles.currentBiddingNftBtn}>
      <View>
        <View
          style={[
            styles.currentBiddingNftMainView,
            {
              backgroundColor:
                scheme == 'light' ? Colors.WHITE : Colors.SEARCHBARCOLORDARK,
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
                flex: 1,
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
                  <Text
                    style={{
                      color:
                        scheme == 'light'
                          ? Colors.DISCOVERMAINTEXT
                          : Colors.WHITE,
                      letterSpacing: 2,
                      fontWeight: '500',
                      fontSize: 14,
                    }}>
                    {Lables.CREATOR}
                  </Text>
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
        <View style={styles.reserveMainView}>
          <Text
            style={[
              styles.reserveLabel,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {Lables.RESERVELABEL}
          </Text>
          <Text
            style={[
              styles.ethPrice,
              {
                color:
                  scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
              },
            ]}>
            {item?.rate + ' ' + Lables.ETHLABEL}
          </Text>
          <Text style={styles.priceRate}>
            {'$' + numberWithCommas((item?.eth_rate).toString())}
          </Text>
        </View>

        <TouchableOpacity style={styles.placeABidBtn} activeOpacity={0.5}>
          <LinearGradient
            colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
            start={{x: 0.8, y: -0.8}}
            end={{x: 1, y: 1}}
            style={styles.linearGradient}>
            <Text style={styles.placeBidText}>{Lables.PLACEBID}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <LinearGradient
          colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
          start={{x: 0.8, y: -0.8}}
          end={{x: 1, y: 1}}
          style={styles.linearGradientArtWork}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleViewArtWork}
            style={[
              styles.viewArtworkBtn,
              {
                backgroundColor:
                  scheme == 'light' ? Colors.BACKGROUND : Colors.BACKGROUND,
              },
            ]}>
            <Text
              style={[
                styles.placeBidText,
                {
                  color:
                    scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.WHITE,
                },
              ]}>
              {Lables.VIEWARTWORK}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </TouchableHighlight>
  );
  return (
    <>
      <FlatList
        style={{marginTop: 20}}
        contentContainerStyle={{
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        data={DummyCurrentBiddingNFT}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        pagingEnabled
      />
    </>
  );
};

export default CurrentBiddingNft;
