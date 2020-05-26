import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import FundScreen from './src/screens/FundScreen';
import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ReseloveAuthScreen';
import {createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

const switchNavigator = createSwitchNavigator({
  loginflow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainflow: createBottomTabNavigator({
    Home: HomeScreen,
    Fund: FundScreen,
    Account: AccountScreen
  })
});

export default createAppContainer(switchNavigator);

