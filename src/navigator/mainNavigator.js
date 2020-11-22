import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp14177319Navigator from '../features/SignUp14177319/navigator';
import CopyOfSettings177314Navigator from '../features/CopyOfSettings177314/navigator';
import CalendarView70177313Navigator from '../features/CalendarView70177313/navigator';
import UserProfile177281Navigator from '../features/UserProfile177281/navigator';
import NotificationList177252Navigator from '../features/NotificationList177252/navigator';
import Settings177243Navigator from '../features/Settings177243/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp14177319: { screen: SignUp14177319Navigator },
CopyOfSettings177314: { screen: CopyOfSettings177314Navigator },
CalendarView70177313: { screen: CalendarView70177313Navigator },
UserProfile177281: { screen: UserProfile177281Navigator },
NotificationList177252: { screen: NotificationList177252Navigator },
Settings177243: { screen: Settings177243Navigator },

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
