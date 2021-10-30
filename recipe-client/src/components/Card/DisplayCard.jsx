import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
// import addRecipe from "../MainContainer/MainContainer";
import "./displayCard.css";

export const DisplayCard = (props) => {
  const data = props;
  const addRecipe = (state, props) => {
    console.log("Clicked");
    fetch("http://localhost:8080/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        // useFetchMyRecipe();
      });
  };

  return (
    <div className="card-container">
      {Object.keys(data).map((item, index) => (
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
            {/* <button onClick={this.addRecipe.bind(this)}>Add Recipe</button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
