import React from "react";
// import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
// import addRecipe from "../MainContainer/MainContainer";
import "./displayCard.css";
import axios from "axios";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DisplayCard = (props) => {
  const data = props.props.hits;
  console.log("from display card>>>>>>", data);

  const addRecipe = (addData) => {
    console.log("inside addReacipe>>>>>", addData);
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
    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/recipe",
    //   data: {
    //     user_id: user_id,
    //     recipe_name: recipe_name,
    //     image_url: image_url,
    //     prep_time: prep_time,
    //     serving_size: serving_size,
    //     cuisine_type: cuisine_type,
    //     source: source,
    //     preparation: preparation,
    //     ingredients: ingredients,
    //     meal_type: meal_type,
    //     calories: calories,
    //     fat: fat,
    //     carbs: carbs,
    //     protein: protein,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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
        <Card sx={{ width: 300 }} key={`${index}`}>
          <CardMedia
            component="img"
            alt="Meal Image"
            height="140"
            image={`${data[item].recipe.image}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${data[item].recipe.label}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Calories: {`${data[item].recipe.calories}`}
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
            <Button size="small" onClick={`${data[item].recipe.url}`}>
              Recipe
            </Button>
            <Button size="small" onClick={() => addRecipe(data[item])}>
              Add to My Recipe
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* {Object.keys(data).map((item, index) => (
        <Card key={`${index}`} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${data[item].recipe.image}`} />
          <Card.Body>
            <Card.Title>{`${data[item].recipe.label}`}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Cuisine Type: {`${data[item].recipe.cuisineType}`}
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <Card.Link href="{`${data[item].recipe.ingredients}`}">
                Ingridient List
              </Card.Link>{" "}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              href={`${data[item].recipe.url}`}
            >{`${data[item].recipe.source}`}</Card.Link>
            <button onClick={addRecipe}>Add Recipe</button>
          </Card.Body>
        </Card>
      ))} */}
    </div>
  );
};
export default DisplayCard;
