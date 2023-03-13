import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mealsSlice from './slices/mealsSlice';

const rootReducer = combineReducers({
  meals: mealsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
