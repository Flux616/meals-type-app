import {StyleSheet, View} from 'react-native';
import React from 'react';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import SansTextBold from '../components/SansTextBold';

const FavoritesScreen = ({navigation}) => {
  const favoritesMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          navigation.navigate('FavoriteMealDetails', {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  if (!favoritesMeals.length) {
    return (
      <View style={styles.mainText}>
        <SansTextBold size={22}>You don't have favorites yet!</SansTextBold>
      </View>
    );
  }

  return (
    <MealList
      meals={favoritesMeals}
      renderMealItem={renderMealItem}
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  mainText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
