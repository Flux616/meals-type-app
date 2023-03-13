import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const SansTextBold = ({children, size}) =>
  <Text style={{...styles.text, fontSize: size ? size : 14}}>
    {children}
  </Text>;

export default SansTextBold;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold',
    color: Colors.primaryColor,
  },
});
