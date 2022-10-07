export const getPopular = async () => {
  const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9`
  );
  const data = await api.json();
  return data.recipes;
};
