import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';

const MealList = ({meals, renderMealItem}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        showsVerticalScrollIndicator={false}
        renderItem={renderMealItem}
        style={{
          width: '95%',
        }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
