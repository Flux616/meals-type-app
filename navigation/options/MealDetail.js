const getMealDetailNavigationOptions = ({route}) => {
  const {title} = route.params;

  return {
    headerTitle: title,
  };
};

export default getMealDetailNavigationOptions;
