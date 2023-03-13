import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import SansTextBold from '../components/SansTextBold';
import SansText from '../components/SansText';

const CategoryMealsScreen = ({route, navigation}) => {
  const {categoryId} = route.params;
  const availableMeals = useSelector((state) =>
    state.meals.filteredMeals.filter((meal) => meal.categoryIds.includes(categoryId)),
  );

  const renderMealItem = (itemData) => {
    return <MealItem
      item={itemData.item}
      onSelectMeal={() => {
        navigation.navigate('MealDetail', {
          mealId: itemData.item.id,
        },
        );
      }}
    />;
  };

  if (!availableMeals.length) {
    return (
      <View style={styles.mainText}>
        <View>
          <SansTextBold size={26}>No meals found!</SansTextBold>
        </View>
        <View style={{marginTop: 10}}>
          <SansText size={18}>Change your filters maybe...</SansText>
        </View>
      </View>
    );
  }

  return (
    <MealList
      meals={availableMeals}
      renderMealItem={renderMealItem}
    />
  );
};

export default CategoryMealsScreen;

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  mainText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
