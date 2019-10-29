import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';

const PetStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

PetStack.navigationOptions = {
  tabBarLabel: 'Pets',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pricetags' : 'md-pricetags'} />
  ),
};

PetStack.path = '';

const ScheduleStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} />
  ),
};

ScheduleStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PetStack,
  ScheduleStack,
  
});

tabNavigator.path = '';

export default tabNavigator;
