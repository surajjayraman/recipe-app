import React from "react";
import "./displayCard.css";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DisplayCard = (props) => {
  console.log(props);
  const data = props.props.hits;

  const addRecipe = (addData) => {
    const user_info = JSON.parse(localStorage.getItem("user-info"));
    const user_id = user_info[0].id;
    const recipe_name = addData.recipe.label;
    const image_url = addData.recipe.image;
    const prep_time = addData.recipe.totalTime;
    const serving_size = addData.recipe.yield;
    const cuisine_type = addData.recipe.cuisineType[0];
    const source = addData.recipe.source;
    const preparation = addData.recipe.url;
    const ingredients = addData.recipe.ingredients;
    const meal_type = addData.recipe.mealType[0];
    const calories = addData.recipe.calories;
    const fat = addData.recipe.digest[0].total;
    const carbs = addData.recipe.digest[1].total;
    const protein = addData.recipe.digest[2].total;

    fetch("http://localhost:8080/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
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
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card-container">
      {Object.keys(data).map((item, index) => (
        <Card className="displaycard-card" sx={{ width: 250 }} key={`${index}`}>
          <CardMedia
            component="img"
            alt="Meal Image"
            height="180"
            image={`${data[item].recipe.image}`}
          />
          <CardContent>
            <Typography
              className="typography-h1"
              gutterBottom
              variant="h5"
              component="div"
            >
              <a src={`${data[item].recipe.url}`}>
                {`${data[item].recipe.label}`}
              </a>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Calories: {`${Math.floor(data[item].recipe.calories)}`}
              {/* {Object.keys(data[item].recipe.ingredients).map((itm, idx) => ( */}
              {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  key={`${idx}`}
                > */}
              {/* {`${data[item].recipe.ingredients[itm].text}`} */}
              {/* </Typography> */}
              {/* ))} */}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Cuisine Type: {`${data[item].recipe.cuisineType[0]}`}
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              className="recipe-link"
              href={`${data[item].recipe.url}`}
              underline="none"
            >
              RECIPE
            </Link>
            <Button size="small" onClick={() => addRecipe(data[item])}>
              Add to My Recipe
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
export default DisplayCard;
