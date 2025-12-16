import { createNativeStackNavigator } from '@react-navigation/native-stack';
import dashboard from '../navigation/dashboard/dashboard';
import { createStaticNavigation } from '@react-navigation/native';

const dashboardScreen = createNativeStackNavigator({
  screens: {
    Dashboard: {
      screen: dashboard,
      options: {
        headerShown: false,
      }
    },
  },
});

const Navigation = createStaticNavigation(dashboardScreen)