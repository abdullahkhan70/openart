/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainNavigation from './Components/Navigation/MainNavigation';
AppRegistry.registerComponent(appName, () => MainNavigation);
