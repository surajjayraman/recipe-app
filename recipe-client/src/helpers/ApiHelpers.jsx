import useFetch from "./UseFetch";

// const recipe_app_key = process.env.REACT_APP_RECIPE_KEY;
// console.log(recipe_app_key);
const recipe_app_key = "9250dede3c2afdb663839121df608485";
const recipe_app_id = "e56e3fea";

// API for fetching recipe
export const useFetchRecipe = () =>
  useFetch(
    `https://api.edamam.com/search?q=chicken&app_id=${recipe_app_id}&app_key=${recipe_app_key}`
  );

export const useFetchMyRecipe = () => useFetch(`http://localhost:8080/recipe`);
