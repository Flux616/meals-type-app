import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeTabs from './HomeTabs';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/colors';
import getFiltersNavigationOptions from './options/Filters';

const Drawer = createDrawerNavigator();

function FiltersNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerActiveTintColor: Colors.primaryColor,
    }}>
      <Drawer.Screen
        name="MealsFavs"
        component={HomeTabs}
        options={{drawerLabel: 'Meals'}}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersScreen}
        options={getFiltersNavigationOptions}
      />
    </Drawer.Navigator>
  );
}

export default FiltersNavigator;
