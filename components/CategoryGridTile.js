import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import React from 'react';

const CategoryGridTile = ({item, onSelect}) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback
        onPress={onSelect}
      >
        <View style={{...styles.container, ...{backgroundColor: item.color}}}>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
  },
});
