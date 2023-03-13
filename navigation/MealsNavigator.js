import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesSreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import getCategoriesNavigationOptions from './options/Categories';
import DefaultNavigationOptions from './options/Default';
import getCategoryMealsNavigationOptions from './options/CategoryMeals';
import getMealDetailNavigationOptions from './options/MealDetail';

const Stack = createNativeStackNavigator();

const MealsNavigator = () =>
  <Stack.Navigator screenOptions={DefaultNavigationOptions}>
    <Stack.Screen
      name='Categories'
      component={CategoriesSreen}
      options={getCategoriesNavigationOptions}
    />
    <Stack.Screen
      name='CategoryMeals'
      component={CategoryMealsScreen}
      options={getCategoryMealsNavigationOptions}
    />
    <Stack.Screen
      name='MealDetail'
      component={MealDetailScreen}
      options={getMealDetailNavigationOptions}
    />
  </Stack.Navigator>;

export default MealsNavigator;
