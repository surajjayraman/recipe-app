import useFetch from "./UseFetch";

// const recipe_app_key = process.env.REACT_APP_RECIPE_KEY;
// console.log(recipe_app_key);
const recipe_app_key = "9250dede3c2afdb663839121df608485";
const recipe_app_id = "e56e3fea";

// API for fetching recipe
export const useFetchRecipe = () =>
  useFetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=health&app_id=${recipe_app_id}&app_key=${recipe_app_key}`
  );

export const useFetchMyRecipe = () => useFetch(`http://localhost:8080/recipe`);

export const useFetchBreakfast = () =>
  useFetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=health&app_id=${recipe_app_id}&app_key=${recipe_app_key}&mealType=Breakfast&dishType=Main%20course`
  );

export const useFetchLunch = () =>
  useFetch(
    `https://api.edamam.com/search?app_id=${recipe_app_id}&app_key=${recipe_app_key}q=health&from=0&to=30dishType=main&mealType=lunch`
  );
export const useFetchDinner = () =>
  useFetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=health&app_id=${recipe_app_id}&app_key=${recipe_app_key}&mealType=Breakfast&dishType=Main%20course`
  );

// https://api.edamam.com/api/recipes/v2?type=public&q=health&app_id=e56e3fea&app_key=9250dede3c2afdb663839121df608485&mealType=Breakfast&dishType=Main%20course
