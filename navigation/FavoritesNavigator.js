import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DefaultNavigationOptions from './options/Default';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import getFavoritesNavigationOptions from './options/Favorites';
import getMealDetailNavigationOptions from './options/MealDetail';

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () =>
  <Stack.Navigator screenOptions={DefaultNavigationOptions}>
    <Stack.Screen
      name='FavoritesMeals'
      component={FavoritesScreen}
      options={getFavoritesNavigationOptions}
    />
    <Stack.Screen
      name='FavoriteMealDetails'
      component={MealDetailScreen}
      options={getMealDetailNavigationOptions}
    />
  </Stack.Navigator>;

export default FavoritesNavigator;
