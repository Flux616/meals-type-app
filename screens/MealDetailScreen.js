import {StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  ScrollView} from 'react-native';
import React, {useState} from 'react';
import SansText from '../components/SansText';
import SansTextBold from '../components/SansTextBold';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../redux/slices/mealsSlice';

const ItemRow = ({itemText}) =>
  <View style={styles.ItemRow}>
    <SansText>{itemText}</SansText>
  </View>;
;

const MealDetailScreen = ({route}) => {
  const {mealId} = route.params;

  const currentMeal = useSelector(
      (state) => state.meals.meals.find((meal) => meal.id === mealId),
  );

  const [isFavorite, setIsFavorite] = useState(currentMeal.isFavorite);

  const dispatch = useDispatch();

  const toggleFavoriteIcon = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleFavorite(currentMeal));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoContainer}>
          <ImageBackground
            resizeMode="cover"
            source={{uri: currentMeal.imageUrl}}
            style={styles.bgImage}>
            <View style={styles.favoriteIconContainer}>
              <Icon
                onPress={toggleFavoriteIcon}
                name={isFavorite ? 'ios-star' : 'ios-star-outline'}
                size={30}
                color={Colors.primaryColor}
              />
            </View>
          </ImageBackground>
          <View style={styles.textRow}>
            <SansText size={16}>{currentMeal.duration} m</SansText>
            <SansText size={16}>{currentMeal.complexity.toUpperCase()}</SansText>
            <SansText size={16}>{currentMeal.affordability.toUpperCase()}</SansText>
          </View>
        </View>
        <SansTextBold size={22}>Ingredients</SansTextBold>
        {currentMeal.ingredients.map((ingredient) =>
          <ItemRow key={ingredient} itemText={ingredient}/>,
        )}
        <SansTextBold size={22}>Steps</SansTextBold>
        {currentMeal.steps.map((step) =>
          <ItemRow key={step} itemText={step}/>,
        )}
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    width: '100%',
    height: 200,
    marginBottom: 50,

  },
  ItemRow: {
    width: Dimensions.get('screen').width / 1.15,
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    margin: 7,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  favoriteIconContainer: {
    position: 'absolute',
    right: 7,
    top: 7,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 32,
    height: 32,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textRow: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'space-around',
  },
});
