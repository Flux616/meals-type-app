import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealsNavigator from './MealsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import FavoritesNavigator from './FavoritesNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SansText from '../components/SansText';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const TabBarIcon = ({focused, iconName}) => {
  return <Icon
    name={focused ? `${iconName}` : `${iconName}-outline`}
    size={23}
    color={Colors.primaryColor}
  />;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {color: Colors.primaryColor},
      }}
    >
      <Tab.Screen
        name='Home'
        component={MealsNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            <TabBarIcon focused={focused} iconName={'ios-restaurant'} />,
          tabBarLabelStyle: {
            fontFamily: 'open-sans',
            color: Colors.primaryColor,
          },
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            <TabBarIcon focused={focused} iconName={'ios-star'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
