import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';

const getFiltersNavigationOptions = ({navigation, route}) => {
  return {
    title: 'Filters',
    headerShown: true,
    headerTintColor: Colors.primaryColor,
    headerLeft: () =>
      <Icon
        onPress={() => navigation.openDrawer('Filters')}
        name={'ios-menu'}
        size={30}
        color={Colors.primaryColor}
        style={{marginLeft: 15}}
      />,
  };
};

export default getFiltersNavigationOptions;
