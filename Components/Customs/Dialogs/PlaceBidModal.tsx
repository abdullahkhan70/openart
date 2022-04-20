import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useColorScheme,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment} from 'react';
import {Colors} from '../../Utils/Colors';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectPlaceBidModal,
  setConnectWalletModal,
  setPlaceBidModal,
} from '../../Utils/Redux/modalSlice';
import Icon from '../Icon';
import {Lables, Screen} from '../../Utils/Strings';
import {DummyCurrentBiddingNFT} from '../../Utils/Lists/DummyCurrentBiddingNFT';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
const PlaceBidModal: React.FC = () => {
  const reduxDispatch = useDispatch();
  const selPlaceBidModal = useSelector(selectPlaceBidModal);
  const scheme = useColorScheme();
  const navigation = useNavigation();
  const hideModal = () => {
    reduxDispatch(setPlaceBidModal(Boolean(true)));
    reduxDispatch(setConnectWalletModal(Boolean(false)));
  };
  const handleDiscoverMore = () => {
    navigation.navigate(Screen.DISCOVERMOORE);
    hideModal();
  };
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        isVisible={selPlaceBidModal}
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
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(6),
            },
          ]}>
          <View style={styles.connectWalletView}>
            <View>
              <Text
                style={[
                  styles.connectWalletText,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.SEARCHBARCOLORDARK
                        : Colors.BACKGROUND,
                  },
                ]}>
                {Lables.PLACEBIDLABEL}
              </Text>
              <Text
                style={[
                  styles.mustBidText,
                  {
                    color:
                      scheme == 'light'
                        ? Colors.DISCOVERMAINTEXT
                        : Colors.VIEWALLDARK,
                  },
                ]}>
                {Lables.ATLEASTETH +
                  DummyCurrentBiddingNFT[0].rate +
                  ' ' +
                  Lables.ETHLABEL}
              </Text>
            </View>
            <Icon name="close_btn" onPress={hideModal} />
          </View>
          <View
            style={{
              margin: PixelRatio.getPixelSizeForLayoutSize(3),
              marginLeft: PixelRatio.getPixelSizeForLayoutSize(6),
              marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
            }}>
            <Text
              style={[
                styles.yourbidText,
                {
                  color:
                    scheme == 'light'
                      ? Colors.DIGITALARTCOLOR
                      : Colors.BACKGROUND,
                },
              ]}>
              {Lables.YOURBID}
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
              }}>
              <View>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.SEARCHBARCOLORDARK
                          : Colors.BACKGROUND,
                      fontWeight: '400',
                      fontSize: 14,
                    },
                  ]}>
                  {Lables.ENTERBID}
                </Text>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.SEARCHBARCOLORDARK
                          : Colors.BACKGROUND,
                      fontWeight: '400',
                      fontSize: 14,
                      marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
                    },
                  ]}>
                  {Lables.YOURBALANCE}
                </Text>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.SEARCHBARCOLORDARK
                          : Colors.BACKGROUND,
                      fontWeight: '400',
                      fontSize: 14,
                      marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
                    },
                  ]}>
                  {Lables.SERVICEFEE}
                </Text>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.SEARCHBARCOLORDARK
                          : Colors.BACKGROUND,
                      fontWeight: '400',
                      fontSize: 14,
                      marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
                    },
                  ]}>
                  {Lables.TOTAL}
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.DIGITALARTCOLOR
                          : Colors.BACKGROUND,
                      fontSize: 14,
                      textAlign: 'right',
                    },
                  ]}>
                  {Lables.ETHLABEL}
                </Text>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.DIGITALARTCOLOR
                          : Colors.BACKGROUND,
                      fontSize: 14,
                      marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
                      textAlign: 'right',
                    },
                  ]}>
                  {DummyCurrentBiddingNFT[0].rate + ' ' + Lables.ETHLABEL}
                </Text>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.DIGITALARTCOLOR
                          : Colors.BACKGROUND,
                      fontSize: 14,
                      marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
                      textAlign: 'right',
                    },
                  ]}>
                  {DummyCurrentBiddingNFT[0].rate + ' ' + Lables.ETHLABEL}
                </Text>
                <Text
                  style={[
                    styles.yourbidText,
                    {
                      color:
                        scheme == 'light'
                          ? Colors.DIGITALARTCOLOR
                          : Colors.BACKGROUND,
                      fontSize: 14,
                      marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
                      textAlign: 'right',
                    },
                  ]}>
                  {DummyCurrentBiddingNFT[0].rate + ' ' + Lables.ETHLABEL}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
              }}>
              <TouchableOpacity
                style={styles.placeABidBtn}
                activeOpacity={0.5}
                onPress={handleDiscoverMore}>
                <LinearGradient
                  colors={[
                    Colors.PLACEABIDFIRSTCOLOR,
                    Colors.PLACEABIDSECONDCOLOR,
                  ]}
                  start={{x: 0.8, y: -0.8}}
                  end={{x: 1, y: 1}}
                  style={styles.linearGradient}>
                  <Text style={styles.placeBidText}>{Lables.PLACEBID}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default PlaceBidModal;

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  viewArtworkBtn: {
    width: width - 60,
    height: PixelRatio.getPixelSizeForLayoutSize(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  linearGradientArtWork: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  connectWalletView: {
    justifyContent: 'space-between',
    margin: PixelRatio.getPixelSizeForLayoutSize(4),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(6),

    flexDirection: 'row',
  },
  placeABidBtn: {
    width: width - 40,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: width - 60,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
  connectWalletText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
  mustBidText: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  yourbidText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
