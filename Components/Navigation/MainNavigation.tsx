import {Platform, useColorScheme} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from '../Utils/Strings';
import {Provider as PaperProvider} from 'react-native-paper';
import {MoralisProvider} from 'react-moralis';
import {
  CreatorProfile,
  CreatorUploadArt,
  DiscoverMore,
  EditProfile,
  Home,
  ItemDetails,
  MintProcess,
  MyProfile,
  PriceScreen,
  PurchaseProcess,
  UserProfile,
} from '../Screen';
import {Colors} from '../Utils/Colors';
import {Provider} from 'react-redux';
import {store} from '../Utils/Redux/Store';
import WalletConnectProvider, {
  WalletConnectProviderProps,
} from '@walletconnect/react-native-dapp';
import Moralis from 'moralis/react-native';
import {MORALIS_APP_ID, MORALIS_SERVER_URL} from '@env';
import app from '../../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {MoralisDappProvider} from '../providers/Moralis/MoralisDappProvider';
Moralis.setAsyncStorage(AsyncStorage);
const MainNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  React.useEffect(() => console.log(`Scheme: ${app.schemename}`), []);
  const lightTheme = {
    dark: false,
    colors: {
      primary: Colors.DIGITALARTCOLOR,
      text: Colors.BLACK,
      background: Colors.WHITE,
    },
  };

  const darkTheme = {
    dark: true,
    colors: {
      primary: Colors.WHITE,
      text: Colors.WHITE,
      background: Colors.TOOLBARDARKCOLOR,
    },
  };

  const walletConnectOptions: WalletConnectProviderProps = {
    storageOptions: {
      // @ts-ignore
      asyncStorage: AsyncStorage,
    },
    redirectUrl: `${app.schemename}`,
  };

  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <MoralisProvider
        appId={process.env.MORALIS_APP_ID}
        serverUrl={process.env.MORALIS_SERVER_URL}
        environment="native">
        {/* <MoralisDappProvider> */}
        <PaperProvider>
          <Provider store={store}>
            <NavigationContainer
              theme={scheme == 'light' ? lightTheme : darkTheme}>
              <Stack.Navigator initialRouteName={Screen.USERHOME}>
                <Stack.Screen
                  name={Screen.USERHOME}
                  component={Home}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={Screen.USERITEMDETAILS}
                  component={ItemDetails}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={Screen.DISCOVERMOORE}
                  component={DiscoverMore}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={Screen.USERPROFILE}
                  component={UserProfile}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={Screen.MYPROFILE}
                  component={MyProfile}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name={Screen.USEREDITPROFILE}
                  component={EditProfile}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name={Screen.CREATORPROFILE}
                  component={CreatorProfile}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name={Screen.CREATORUPLOADARTWORK}
                  component={CreatorUploadArt}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name={Screen.PURCHASEPROCESS}
                  component={PurchaseProcess}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name={Screen.PRICESCREEN}
                  component={PriceScreen}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name={Screen.MINTPROCESS}
                  component={MintProcess}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </PaperProvider>
        {/* </MoralisDappProvider> */}
      </MoralisProvider>
    </WalletConnectProvider>
  );
};

export default MainNavigation;
