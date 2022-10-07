export const getDetails = async (id) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API}`
  );
  const recipes = await data.json();
  return recipes;
};
