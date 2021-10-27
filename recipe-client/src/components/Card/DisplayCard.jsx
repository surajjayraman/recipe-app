import React, { useState } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { useFetchRecipe } from "../../helpers/ApiHelpers";

import "./displayCard.css";

export const DisplayCard = () => {
  const { data, error, loading } = useFetchRecipe();

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  console.log(data);

  return (
    <div className="card-container">
      {data.hits.map((item, index) => (
        <Card key={`${index}`} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${item.recipe.image}`} />
          <Card.Body>
            <Card.Title>{`${item.recipe.label}`}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Cuisine Type: {`${item.recipe.cuisineType}`}
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <Card.Link href="{`${item.recipe.ingredients}`}">
                Ingridient List
              </Card.Link>{" "}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              href={`${item.recipe.url}`}
            >{`${item.recipe.source}`}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
