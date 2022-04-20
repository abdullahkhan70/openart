import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {Lables} from '../../Utils/Strings';
import {useColorScheme} from 'react-native';
import {Colors} from '../../Utils/Colors';
import {DummyActivities} from '../../Utils/Lists/DummyActivities';
import {
  firstLetter,
  formattedDate,
  numberWithCommas,
} from '../../Customs/Methods/Methods';
import Icon from '../../Customs/Icon';
import LinearGradient from 'react-native-linear-gradient';

type renderItemsProps = {
  item: {
    userName: string;
    image: number;
    auctionType: string;
    name: string;
    rate: number;
    dollarRate: number;
    sold: boolean;
  };
  index: number;
};
const Activity: React.FC = () => {
  const scheme = useColorScheme();
  useEffect(() => {
    formattedDate(new Date().toUTCString());
  }, []);
  const renderItems = ({item, index}: renderItemsProps) => {
    return (
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity
          style={{
            marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
            alignSelf: 'center',
          }}>
          <View
            style={[
              styles.activitiesMainView,
              {
                backgroundColor:
                  scheme == 'light'
                    ? Colors.BACKGROUND
                    : Colors.SEARCHBARCOLORDARK,
              },
            ]}>
            <View style={{flexDirection: 'row'}}>
              {item?.image != null ? (
                <Image style={styles.activitiesImage} source={item?.image} />
              ) : (
                <LinearGradient
                  colors={[
                    Colors.PLACEABIDFIRSTCOLOR,
                    Colors.PLACEABIDSECONDCOLOR,
                  ]}
                  start={{x: 0.8, y: -0.8}}
                  end={{x: 1, y: 1}}
                  style={styles.linearGradientSoldFor}>
                  <Text style={styles.firstLetterName}>
                    {firstLetter(Lables.FIRSTNAME)}
                  </Text>
                </LinearGradient>
              )}

              <View
                style={{marginLeft: PixelRatio.getPixelSizeForLayoutSize(5)}}>
                {item?.auctionType == 'auction' && (
                  <Text
                    style={[
                      styles.activityTitle,
                      {
                        color:
                          scheme == 'light'
                            ? Colors.SEARCHBARCOLORDARK
                            : Colors.VIEWALLDARK,
                      },
                    ]}>
                    {Lables.AUCTIONWON + item?.name}
                  </Text>
                )}
                {item?.auctionType == 'bid' && (
                  <Text>{Lables.BIDPLACE + item?.userName}</Text>
                )}
                {item?.auctionType == 'listing' && (
                  <Text>{Lables.LISTINGBY + item?.userName}</Text>
                )}
                <Text
                  style={{
                    color:
                      scheme == 'dark'
                        ? Colors.GREYSCALE
                        : Colors.SEARCHBARCOLORDARK,
                  }}>
                  {formattedDate(new Date().toUTCString())}
                </Text>
                {item?.sold ? (
                  <Text>
                    {Lables.SOLDFOR + item?.rate + ' ' + Lables.ETHLABEL}
                  </Text>
                ) : (
                  <Text>
                    {item?.rate +
                      ' ' +
                      Lables.ETHLABEL +
                      ' ' +
                      Lables.DOLLARSYMBOL +
                      numberWithCommas(item?.dollarRate)}
                  </Text>
                )}
              </View>
            </View>
            <Icon
              name="open_link"
              style={{margin: PixelRatio.getPixelSizeForLayoutSize(2)}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.activityContainer}>
      <Text
        style={[
          styles.activityMainText,
          {
            color:
              scheme == 'light'
                ? Colors.SEARCHBARCOLORDARK
                : Colors.VIEWALLDARK,
          },
        ]}>
        {Lables.ACTIVITYLABEL}
      </Text>
      <FlatList
        style={{
          marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
          alignSelf: 'center',
        }}
        data={DummyActivities}
        renderItem={renderItems}
        contentContainerStyle={{
          paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4),
        }}
      />
    </View>
  );
};

export default Activity;
