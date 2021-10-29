const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Connected to dietDash database!");
});

const recipeRouter = require("./routes/recipeRouter.js");
const ingredientsRouter = require("./routes/ingredientsRouter.js");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/recipe", cors(), (req, res) => {
  recipeRouter
    .getRecipes()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/recipe", cors(), (req, res) => {
  recipeRouter
    .addRecipes(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/recipe/:id", cors(), (req, res) => {
  recipeRouter
    .deleteRecipe(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/ingredients", cors(), (req, res) => {
  ingredientsRouter
    .getIngredients()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/ingredients", cors(), (req, res) => {
  ingredientsRouter
    .addIngredients(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete("/ingredients/:id", cors(), (req, res) => {
  ingredientsRouter
    .deleteIngredients(req.params.id)
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
