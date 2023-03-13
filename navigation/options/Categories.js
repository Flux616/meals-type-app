import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';

const getCategoriesNavigationOptions = ({navigation}) => {
  return {
    title: 'Meal Categories',
    headerLeft: () =>
      <Icon
        onPress={() => navigation.openDrawer('Filters')}
        name={'ios-menu'}
        size={30}
        color={Colors.primaryColor}
        style={{marginRight: 10}}
      />
    ,
  };
};

export default getCategoriesNavigationOptions;
