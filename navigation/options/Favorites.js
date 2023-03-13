import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';

const getFavoritesNavigationOptions = ({navigation}) => {
  return {
    title: 'Favorites',
    headerLeft: () =>
      <Icon
        onPress={() => navigation.openDrawer('Filters')}
        name={'ios-menu'}
        size={30}
        color={Colors.primaryColor}
        style={{marginRight: 10}}
      />,
  };
};

export default getFavoritesNavigationOptions;
