import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  useColorScheme,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {Fragment, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectConnectWalletModal,
  selectPlaceBidModal,
  setConnectWalletModal,
  setPlaceBidModal,
} from '../../Utils/Redux/modalSlice';
import Modal from 'react-native-modal';
import {Colors} from '../../Utils/Colors';
import {Lables} from '../../Utils/Strings';
import Icon from '../Icon';
import {CustomText} from '../Methods/Methods';
import LinearGradient from 'react-native-linear-gradient';
import PlaceBidModal from './PlaceBidModal';
import {useMoralis} from 'react-moralis';
import {
  selectAccounts,
  selectChainid,
  selectSolidityInput,
  selectSolidityStorage,
  selectSolidityValue,
  selectVyperInput,
  selectVyperStorage,
  selectVyperValue,
  selectWeb3,
} from '../../Utils/Redux/connectEthereumSlice';
import {WalletSdk, Auth, Wallets} from '@cybavo/react-native-wallet-service';
import {getWeb3} from './Ethereum/getWeb3';
import {getEthereum} from './Ethereum/getEthereum';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
const {width, height} = Dimensions.get('window');
const ConnectWallet = () => {
  const reduxDispatch = useDispatch();
  const selConnectWallet = useSelector(selectConnectWalletModal);
  const selPlaceBidModal = useSelector(selectPlaceBidModal);
  const window = useWindowDimensions();
  // Connecting to Ethereum.
  const selWeb3 = useSelector(selectWeb3);
  const selAccounts = useSelector(selectAccounts);
  const selChainid = useSelector(selectChainid);
  const selVyperStorage = useSelector(selectVyperStorage);
  const selVyperValue = useSelector(selectVyperValue);
  const setVyperInput = useSelector(selectVyperInput);
  const selSolidityStorage = useSelector(selectSolidityStorage);
  const selSolidityValue = useSelector(selectSolidityValue);
  const selSolidityInput = useSelector(selectSolidityInput);

  const scheme = useColorScheme();
  const {authenticate, isAuthenticated, user} = useMoralis();
  const hideModal = () => {
    reduxDispatch(setConnectWalletModal(Boolean(false)));
  };
  const connector = useWalletConnect();

  const connectWallet = useCallback(() => {
    if (connector.connected) {
      console.log(`The connected account: ${connector.accounts}`);
    } else {
      return connector.connect();
    }
  }, [connector]);

  const handlePlaceBidButton = () => {
    connectWallet();
    if (connector.connected) {
      reduxDispatch(setPlaceBidModal(Boolean(!selPlaceBidModal)));
    }
  };
  return (
    <Fragment>
      <Modal
        style={{alignSelf: 'center'}}
        presentationStyle="formSheet"
        isVisible={selConnectWallet}
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
              paddingBottom: PixelRatio.getPixelSizeForLayoutSize(8),
            },
          ]}>
          <View style={styles.connectWalletView}>
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
              {Lables.CONNECTWALLET}
            </Text>
            <Icon name="close_btn" onPress={hideModal} />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Icon
              name={'connect_wallet_icon'}
              size={PixelRatio.getPixelSizeForLayoutSize(43)}
            />
          </View>
          <CustomText
            text={Lables.CONNECTWALLETTERMS}
            textChange={Lables.TERMSOFSERVICE}
            userNameText={Lables.PRIVACYPOLICY}
            color={
              scheme == 'light' ? Colors.SEARCHBARCOLORDARK : Colors.VIEWALLDARK
            }
            fontWeight={'700'}
            userNameColor={
              scheme == 'light' ? Colors.SEARCHBARCOLORDARK : Colors.VIEWALLDARK
            }
            userNameFontWeight={'700'}
            textStyles={styles.connectWalletSubText}
          />
          <View
            style={{
              alignSelf: 'center',
              marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
            }}>
            <TouchableOpacity
              style={styles.placeABidBtn}
              activeOpacity={0.5}
              onPress={handlePlaceBidButton}>
              <LinearGradient
                colors={[
                  Colors.PLACEABIDFIRSTCOLOR,
                  Colors.PLACEABIDSECONDCOLOR,
                ]}
                start={{x: 0.8, y: -0.8}}
                end={{x: 1, y: 1}}
                style={styles.linearGradient}>
                <Text style={styles.placeBidText}>{Lables.CONNECTWALLET}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.learnMoreBtn}>
            <Text
              style={[
                styles.learnMoreText,
                {
                  color:
                    scheme == 'light'
                      ? Colors.SEARCHBARCOLORDARK
                      : Colors.VIEWALLDARK,
                },
              ]}>
              {Lables.CONNECTWALLETLEARNMORE}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {selPlaceBidModal ? <PlaceBidModal /> : <View />}
    </Fragment>
  );
};

export default ConnectWallet;

const styles = StyleSheet.create({
  container: {
    // height: PixelRatio.getPixelSizeForLayoutSize(130),
    width: width - 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  connectWalletView: {
    justifyContent: 'space-between',
    margin: PixelRatio.getPixelSizeForLayoutSize(4),
    flexDirection: 'row',
  },
  connectWalletText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
  connectWalletSubText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    width: width - 100,
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
    width: width - 120,
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeBidText: {
    color: Colors.BACKGROUND,
    fontWeight: '700',
    fontSize: 20,
  },
  learnMoreBtn: {
    alignSelf: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  learnMoreText: {
    fontSize: 16,
    fontWeight: '400',
  },
});
