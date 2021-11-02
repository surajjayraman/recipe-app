const Pool = require("pg").Pool;
const pool = new Pool({
  user: "vagrant",
  host: "localhost",
  database: "dietdash_db",
  password: "123",
  port: 5432,
});

pool.connect(console.log("connected to dietdash db"));

const getRecipes = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM recipe ORDER BY recipe_id ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const addRecipes = (body) => {
  console.log("from the router>>>>>>");
  return new Promise(function (resolve, reject) {
    const {
      user_id,
      recipe_name,
      image_url,
      prep_time,
      serving_size,
      cuisine_type,
      source,
      preparation,
      ingredients,
      meal_type,
      calories,
      fat,
      carbs,
      protein,
    } = body;
    pool.query(
      "INSERT INTO recipe (user_id, recipe_name, image_url, prep_time, serving_size, cuisine_type, source, preparation, ingredients, meal_type, calories, fat, carbs, protein) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
      [
        user_id,
        recipe_name,
        image_url,
        prep_time,
        serving_size,
        cuisine_type,
        source,
        preparation,
        ingredients,
        meal_type,
        calories,
        fat,
        carbs,
        protein,
      ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new recipe has been added added`);
      }
    );
  });
};
const deleteRecipe = (recipeId) => {
  console.log("Id from Router>>>>>>>>");
  return new Promise(function (resolve, reject) {
    const id = parseInt(recipeId);
    console.log("Id from Router>>>>>>>>", request.params.id);
    pool.query("DELETE FROM recipe WHERE id = $1", [id], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(`Recipe deleted`);
    });
  });
};

module.exports = {
  getRecipes,
  addRecipes,
  deleteRecipe,
};
