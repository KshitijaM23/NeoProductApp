/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import Navigator from './container/navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
