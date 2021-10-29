const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Connected to dietDash database!");
});

const recipeRouter = require("./routes/recipeRouter.js");

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/recipe", (req, res) => {
  recipeRouter
    .getRecipes()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/recipe", (req, res) => {
  recipeRouter
    .addRecipes(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/recipe/:id", (req, res) => {
  recipeRouter
    .deleteRecipe(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
