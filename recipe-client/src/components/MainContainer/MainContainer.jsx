import React, { setState } from "react";
import { Container, Row } from "react-bootstrap";
import { DisplayCard } from "../Card/DisplayCard";
import { Search } from "../search/Search.jsx";
import { useFetchRecipe } from "../../helpers/ApiHelpers";
import "./mainContainer.css";

function MainContainer() {
  const { data, error, loading } = useFetchRecipe();
  // const [recipes, setRecipes] = setState([]);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  // setRecipes(data.hits);
  // console.log(data.hits);
  return (
    <Container className="sidebar-container">
      <Row>
        <Search className="search-component" placeholder="Search Recipes" />
        <DisplayCard />
      </Row>
    </Container>
  );
}
export default MainContainer;
