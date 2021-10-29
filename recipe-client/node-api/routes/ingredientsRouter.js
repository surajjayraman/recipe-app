const Pool = require("pg").Pool;
const pool = new Pool({
  user: "vagrant",
  host: "localhost",
  database: "dietdash_db",
  password: "123",
  port: 5432,
});

pool.connect(console.log("connected to dietdash db"));

const getIngredients = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "SELECT * FROM ingredients ORDER BY ingredient_id ASC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};
const addIngredients = (body) => {
  return new Promise(function (resolve, reject) {
    const { user_id, ingredient_id, ingridient_name } = body;
    pool.query(
      "INSERT INTO ingredients (user_id, ingredient_id, ingridient_name) VALUES ($1, $2, $3) RETURNING *",
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new ingredient has been added: ${results.rows[0]}`);
      }
    );
  });
};
const deleteIngredient = () => {
  return new Promise(function (resolve, reject) {
    const id = parseInt(request.params.id);
    pool.query(
      "DELETE FROM ingredients WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Ingredient deleted with ID: ${id}`);
      }
    );
  });
};

module.exports = {
  getIngredients,
  addIngredients,
  deleteIngredient,
};
