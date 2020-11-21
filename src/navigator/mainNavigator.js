import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList177252Navigator from '../features/NotificationList177252/navigator';
import Settings177251Navigator from '../features/Settings177251/navigator';
import Settings177243Navigator from '../features/Settings177243/navigator';
import UserProfile177241Navigator from '../features/UserProfile177241/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList177252: { screen: NotificationList177252Navigator },
Settings177251: { screen: Settings177251Navigator },
Settings177243: { screen: Settings177243Navigator },
UserProfile177241: { screen: UserProfile177241Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
