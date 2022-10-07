export const getCuisine = async (name) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${name}`
  );
  const recipes = await data.json();
  return recipes.results;
};
