import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Camera from 'src/screens/Camera/Camera';
import HelpAndFeedback from 'src/screens/HelpAndFeedback/HelpAndFeedback';
import Home from 'src/screens/Home/Home';
import NotificationAndEmail from 'src/screens/NotificationAndEmail/NotificationAndEmail';
import Payment from 'src/screens/Payment/Payment';
import PersonalInfo from 'src/screens/PersonalInfo/PersonalInfo';
import PrivacyAndPolicy from 'src/screens/PrivacyAndPolicy/PrivacyAndPolicy';
import Profile from 'src/screens/Profile/Profile';
import Settings from 'src/screens/Settings/Settings';
import SplashScreen from 'src/screens/SplashScreen/SplashScreen';
import {
  CAMERA_PAGE,
  HELP_AND_FEEDBACK_PAGE,
  HOME_PAGE,
  NOTIFICATIONS_AND_EMAIL_PAGE,
  PAYMEMT_PAGE,
  PERSONAL_INFO_PAGE,
  PRIVACY_AND_SECURITY_PAGE,
  PROFILE_PAGE,
  SETTINGS_PAGE,
  SPLASH_SCREEN,
} from './routes';

export type RouteProps = NativeStackScreenProps<any>;

const Stack = createStackNavigator();

type RouteType = {
  component: React.ComponentType<any>;
  route: string;
};

const routes: RouteType[] = [
  {
    component: SplashScreen,
    route: SPLASH_SCREEN,
  },
  {
    component: Home,
    route: HOME_PAGE,
  },
  {
    component: Profile,
    route: PROFILE_PAGE,
  },
  {
    component: Settings,
    route: SETTINGS_PAGE,
  },
  {
    component: Camera,
    route: CAMERA_PAGE,
  },
  {
    component: HelpAndFeedback,
    route: HELP_AND_FEEDBACK_PAGE,
  },
  {
    component: PrivacyAndPolicy,
    route: PRIVACY_AND_SECURITY_PAGE,
  },
  {
    component: PersonalInfo,
    route: PERSONAL_INFO_PAGE,
  },
  {
    component: NotificationAndEmail,
    route: NOTIFICATIONS_AND_EMAIL_PAGE,
  },
  {
    component: Payment,
    route: PAYMEMT_PAGE,
  },
];

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME_PAGE}
        screenOptions={{headerShown: false}}>
        {routes.map((route, index) => (
          <Stack.Screen
            key={`${route.route}${index}`}
            name={route.route}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
