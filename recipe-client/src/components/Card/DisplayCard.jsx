import React from "react";
// import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
// import addRecipe from "../MainContainer/MainContainer";
import "./displayCard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DisplayCard = (props) => {
  const data = props.props.hits;
  console.log(data[1]);
  // const addRecipe = (state, props) => {
  //   console.log("Clicked");
  //   fetch("http://localhost:8080/recipe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       // useFetchMyRecipe();
  //     });
  // };

  return (
    <div className="card-container">
      {Object.keys(data).map((item, index) => (
        <Card sx={{ maxWidth: 345 }} key={`${index}`}>
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
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
