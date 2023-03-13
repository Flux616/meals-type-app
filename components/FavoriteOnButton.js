import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native';

const FavoriteOnButton = () => {
  return (
    <TouchableWithoutFeedback>
      <Icon
        name={'star'}
        size={23}
        color='#fff'
      />
    </TouchableWithoutFeedback>
  );
};

export default FavoriteOnButton;

const styles = StyleSheet.create({});
