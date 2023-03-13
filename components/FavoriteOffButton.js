import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableWithoutFeedback} from 'react-native';


const FavoriteOffButton = () => {
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <Icon
        name={'star-outline'}
        size={23}
        color={'#fff'}
      />
    </TouchableWithoutFeedback>
  );
};

export default FavoriteOffButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});
