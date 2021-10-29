import React, { setState } from "react";
import { Container, Row } from "react-bootstrap";
import { DisplayCard } from "../Card/DisplayCard";
import MealPlanner from "../MealPlanner/MealPlanner";
import { Search } from "../search/Search.jsx";
import { useFetchRecipe } from "../../helpers/ApiHelpers";
import "./mainContainer.css";

function MainContainer() {
  const { data, error, loading } = useFetchRecipe();
  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  console.log(data.hits[0].recipe.label);
  function createRecipe() {
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
  }

  return (
    <Container className="sidebar-container">
      <Row>
        {/* <MealPlanner /> */}
        <Search className="search-component" placeholder="Search Recipes" />
        <DisplayCard />
        <button>Add Recipe</button>
      </Row>
    </Container>
  );
}
export default MainContainer;
