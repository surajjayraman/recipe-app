import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./sideBar.css";
import logo from "../../images/orange_dietdash_logo_2.png";
import MainContainer from "../MainContainer/MainContainer";
import MealPlanner from "../MealPlanner/MealPlanner";
import MyRecipes from "../MyRecipes/MyRecipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Sidebar() {
  return (
    <div></div>
    // <Router>
    // <Container className="sidebar-container">
    //   <Row>
    //     <Col className="sidebar-image-hr-col">
    //       <img src={logo} className="logo" />
    //       <hr className="hr" />
    //     </Col>
    //   </Row>

    //   <Nav defaultActiveKey="/home" className="flex-column">
    //     <Nav.Link>{/* <Link to="/">Home</Link> */}</Nav.Link>
    //     <Nav.Link eventKey="link-1">
    //       <Link to="/mealPlanner">Meal Planner</Link>
    //     </Nav.Link>
    //     <Nav.Link eventKey="link-1">
    //       <Link to="/myRecipes">My Recipes</Link>
    //     </Nav.Link>
    //     <Nav.Link eventKey="link-2">Ingridients List</Nav.Link>
    //     <Nav.Link eventKey="link-2">Browse</Nav.Link>
    //   </Nav>
    //   {/* <Switch> */}
    //   {/* <Route exact path="/" component={MainContainer} /> */}
    //   {/* <Route path="/mealPlanner" component={MealPlanner} />
    //       <Route path="/myRecipes" component={MyRecipes} />
    //       <Route path="/mealPlanner" component={MealPlanner} /> */}
    //   {/* </Switch> */}
    // </Container>
    // // </Router>
  );
}
export default Sidebar;
