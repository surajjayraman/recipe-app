import React, { setState, Component } from "react";
import { Container, Row } from "react-bootstrap";
import { DisplayCard } from "../Card/DisplayCard";
import MealPlanner from "../MealPlanner/MealPlanner";
import { Search } from "../search/Search.jsx";
// import { useFetchRecipe } from "../../helpers/ApiHelpers";
import "./mainContainer.css";

class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      // searchField: "",
    };
  }
  componentDidMount() {
    // const recipe_app_key = process.env.REACT_APP_RECIPE_KEY;
    // console.log(recipe_app_key);
    const recipe_app_key = "9250dede3c2afdb663839121df608485";
    const recipe_app_id = "e56e3fea";
    const api_url = `https://api.edamam.com/search?q=chicken&app_id=${recipe_app_id}&app_key=${recipe_app_key}`;

    fetch(api_url)
      .then((response) => response.json())
      .then((recipesData) => this.setState({ recipes: recipesData.hits }));
  }

  render() {
    const { recipes } = this.state;
    console.log(recipes);

    // function clickMe() {
    //   alert("test");
    // }

    return (
      <Container className="sidebar-container">
        <Row>
          {/* <MealPlanner /> */}
          <Search className="search-component" placeholder="Search Recipes" />
          <DisplayCard {...recipes} />
        </Row>
      </Container>
    );
  }
}
export default MainContainer;
