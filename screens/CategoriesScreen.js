import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data.js';
import CategoryGridTile from '../components/CategoryGridTile.js';

const CategoriesScreen = ({navigation, route}) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        item={itemData.item}
        onSelect={() =>
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          },
          )}
      />
    );
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
