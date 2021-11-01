const Pool = require("pg").Pool;
const pool = new Pool({
  user: "vagrant",
  host: "localhost",
  database: "dietdash_db",
  password: "123",
  port: 5432,
});

pool.connect(console.log("connected to dietdash db"));

const getUser = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};
const addUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { user_id, name, email, password } = body;
    pool.query(
      "INSERT INTO users (user_id, name, email, password ) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id],
      (error, results) => {
        if (error) {
          // console.log(error);
          reject(error);
        }
        resolve(`A new user has been added: ${results.rows[0]}`);
      }
    );
  });
};

module.exports = {
  getUser,
  addUser,
};
