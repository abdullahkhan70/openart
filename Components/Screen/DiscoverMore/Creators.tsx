import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableHighlight,
  PixelRatio,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React, {Fragment} from 'react';
import {DummyDiscoverCreator} from '../../Utils/Lists/DummyDiscoverCreator';
import {styles} from './styles';
import {Colors} from '../../Utils/Colors';
import {Lables, Screen} from '../../Utils/Strings';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const {height} = Dimensions.get('window');
type renderItemsProps = {
  item: {
    profileImage: number;
    backgroundImage: number;
    creatorName: string;
    aboutCreator: string;
    followers: number;
  };
  index: number;
};
const Creators: React.FC = () => {
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const handleUserProfile = () => {
    navigation.navigate(Screen.USERPROFILE);
  };
  const renderItems = ({item, index}: renderItemsProps) => (
    <TouchableOpacity onPress={handleUserProfile}>
      <View
        style={[
          styles.creatorsMainView,
          {
            backgroundColor:
              scheme == 'light' ? Colors.BACKGROUND : Colors.SEARCHBARCOLORDARK,
          },
        ]}>
        <ImageBackground
          style={styles.creatorBackgroundImage}
          imageStyle={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            zIndex: -1,
          }}
          source={item?.backgroundImage}>
          <Image
            style={styles.creatorProfileImage}
            source={item?.profileImage}
          />
        </ImageBackground>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: PixelRatio.getPixelSizeForLayoutSize(15),
          }}>
          <Text
            style={[
              styles.creatorName,
              {
                color:
                  scheme == 'light'
                    ? Colors.DIGITALARTCOLOR
                    : Colors.BACKGROUND,
              },
            ]}>
            {item?.creatorName}
          </Text>
          <Text
            numberOfLines={3}
            style={[
              styles.creatorDescription,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.VIEWALLDARK,
              },
            ]}>
            {item?.aboutCreator}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: PixelRatio.getPixelSizeForLayoutSize(4),
            marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
            paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.follwersCounts,
                {
                  color:
                    scheme == 'light'
                      ? Colors.DIGITALARTCOLOR
                      : Colors.BACKGROUND,
                },
              ]}>
              {item?.followers}
            </Text>
            <Text style={styles.followersLabel}>{Lables.FOLLOWERS}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.followBtn,
              {
                backgroundColor:
                  scheme == 'dark'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.SEARCHBARCOLORLIGHT,
              },
            ]}>
            <Text
              style={[
                styles.followBtnText,
                {
                  color:
                    scheme == 'light'
                      ? Colors.SEARCHBARCOLORDARK
                      : Colors.VIEWALLDARK,
                },
              ]}>
              {Lables.FOLLOW}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList
        style={{flex: 1}}
        data={DummyDiscoverCreator}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignSelf: 'center',
          flexGrow: 1,
          paddingBottom: PixelRatio.getPixelSizeForLayoutSize(5),
          borderRadius: 20,
        }}
      />
      <LinearGradient
        colors={[Colors.PLACEABIDFIRSTCOLOR, Colors.PLACEABIDSECONDCOLOR]}
        start={{x: 0.8, y: -0.8}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientArtWork}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.viewArtworkBtn,
            {
              backgroundColor:
                scheme == 'light' ? Colors.BACKGROUND : Colors.DIGITALARTCOLOR,
            },
          ]}>
          <Text
            style={[
              styles.placeBidTextHello,
              {
                color:
                  scheme == 'light'
                    ? Colors.DIGITALARTCOLOR
                    : Colors.BACKGROUND,
              },
            ]}>
            {Lables.LOADMORE}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default Creators;
