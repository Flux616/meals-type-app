import {CATEGORIES} from '../../data/dummy-data';

const getCategoryMealsNavigationOptions = ({route}) => {
  const {categoryId} = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

export default getCategoryMealsNavigationOptions;
