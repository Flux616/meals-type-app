import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const SansText = ({children, size, color}) =>
  <Text style={{...styles.text, fontSize: size ? size : 14, color: color ? color : Colors.primaryColor}}>
    {children}
  </Text>;

export default SansText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});
