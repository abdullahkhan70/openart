import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useColorScheme,
  PixelRatio,
  FlatList,
  Image,
} from 'react-native';
import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectNotificationModal,
  setNotificationModal,
} from '../../Utils/Redux/modalSlice';
import Modal from 'react-native-modal';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import {DummyNotifications} from '../../Utils/Lists/DummyNotifications';
import TimeAgo from 'react-native-timeago';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

type renderItemProps = {
  item: {
    notificationTitle: string;
    artImage: number;
    receiveRate: number;
    time: string;
    title: string;
  };
  index: number;
};
const NotificationDialog = () => {
  const reduxDispatch = useDispatch();
  const selNotificationModal = useSelector(selectNotificationModal);
  const scheme = useColorScheme();
  const hideModal = () => {
    reduxDispatch(setNotificationModal(Boolean(false)));
  };
  const renderItems = ({item, index}: renderItemProps) => (
    <View style={styles.notificationsRenderItemsMainView}>
      <Image style={styles.profileImage} source={item?.artImage} />
      <View style={styles.notificationSubView}>
        <Text
          numberOfLines={1}
          style={[
            styles.notificationTitle,
            {
              color:
                scheme == 'light' ? Colors.DIGITALARTCOLOR : Colors.BACKGROUND,
            },
          ]}>
          {item?.notificationTitle}
        </Text>
        {item?.receiveRate != null ? (
          <Text
            numberOfLines={1}
            style={[
              styles.NotificationSubTitle,
              {
                color:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.HIGHTESTBIDDARK,
              },
            ]}>
            {item?.receiveRate + Lables.ETHRECEIVED}
          </Text>
        ) : (
          <Text
            numberOfLines={1}
            style={[
              styles.NotificationSubTitle,
              {
                color:
                  scheme == 'light'
                    ? Colors.DISCOVERMAINTEXT
                    : Colors.HIGHTESTBIDDARK,
              },
            ]}>
            {item?.title}
          </Text>
        )}
        <View style={{marginTop: PixelRatio.getPixelSizeForLayoutSize(5)}}>
          <TimeAgo
            style={[
              styles.timeStamp,
              {
                color:
                  scheme == 'light'
                    ? Colors.PLACEHOLDERCOLOR
                    : Colors.VIEWALLDARK,
              },
            ]}
            time={item?.time}
          />
        </View>
      </View>
    </View>
  );
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        isVisible={selNotificationModal}
        coverScreen
        onDismiss={hideModal}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                scheme == 'light' ? Colors.WHITE : Colors.DIGITALARTCOLOR,
            },
          ]}>
          <Text
            style={[
              styles.notificationLabel,
              {
                color:
                  scheme == 'light'
                    ? Colors.SEARCHBARCOLORDARK
                    : Colors.BACKGROUND,
              },
            ]}>
            {Lables.NOTIFICATION}
          </Text>
          <FlatList
            // contentContainerStyle={{height: 20}}
            data={DummyNotifications}
            renderItem={renderItems}
          />
          <View
            style={{
              alignItems: 'center',
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(7),
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.placeABidBtn} activeOpacity={0.5}>
              <LinearGradient
                colors={[
                  Colors.PLACEABIDFIRSTCOLOR,
                  Colors.PLACEABIDSECONDCOLOR,
                ]}
                start={{x: 0.8, y: -0.8}}
                end={{x: 1, y: 1}}
                style={styles.linearGradient}>
                <Text style={styles.placeBidText}>{Lables.VIEWALL}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
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
                {Lables.MARKASREAD}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </Fragment>
  );
};

export default NotificationDialog;

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    width: width - 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  notificationLabel: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1.2,
    margin: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  profileImage: {
    width: width * 0.22,
    height: height * 0.15,
    borderRadius: 15,
  },
  linearGradientArtWork: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 60,
    height: PixelRatio.getPixelSizeForLayoutSize(18),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  viewArtworkBtn: {
    width: width - 58,
    height: PixelRatio.getPixelSizeForLayoutSize(18.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  notificationsRenderItemsMainView: {
    margin: PixelRatio.getPixelSizeForLayoutSize(5),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(10),
    flexDirection: 'row',
  },
  notificationSubView: {
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  NotificationSubTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  timeStamp: {
    fontSize: 13,
    fontWeight: '500',
  },
  placeABidBtn: {
    width: width - 60,
    height: PixelRatio.getPixelSizeForLayoutSize(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    width: width - 60,
    height: PixelRatio.getPixelSizeForLayoutSize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
});
