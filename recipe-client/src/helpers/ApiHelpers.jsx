import useFetch from "./UseFetch";

const recipe_app_key = process.env.RECIPE_APP_KEY;
const app_id = e56e3fea;

// API for fetching recipe
export const useFetchCurrentWeather = (city = cityName) =>
  useFetch(
    `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${recipe_app_key}`
  );
