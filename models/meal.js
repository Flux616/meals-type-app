class Meal {
  constructor(
      id,
      categoryIds,
      title,
      affordability,
      complexity,
      imageUrl,
      duration,
      ingredients,
      steps,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
      isFavorite,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.affordability = affordability;
    this.complexity = complexity;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isLactoseFree = isLactoseFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isFavorite = isFavorite;
  }
}

export default Meal;
