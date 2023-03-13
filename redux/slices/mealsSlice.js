import {createSlice} from '@reduxjs/toolkit';
import {MEALS} from '../../data/dummy-data';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.favoriteMeals.includes(action.payload)) {
        state.favoriteMeals.splice(
            state.favoriteMeals.indexOf(action.payload), 1,
        );
        state.meals.find((meal) => meal === action.payload).isFavorite = false;
      } else {
        state.favoriteMeals = [...state.favoriteMeals, action.payload];
        state.meals.find((meal) => meal === action.payload).isFavorite = true;
      }
    },
    setFilters: (state, action) => {
      state.filteredMeals = state.meals.filter((meal) =>
        Object.keys(action.payload).every((key) =>
          action.payload[key] === false || action.payload[key] === meal[key],
        ),
      );
      console.log(state.filteredMeals);
    },
  },
});

export default mealsSlice.reducer;
export const {toggleFavorite, setFilters} = mealsSlice.actions;

