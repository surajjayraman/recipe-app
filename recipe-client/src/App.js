import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import MyRecipes from "./components/MyRecipes/MyRecipes";

import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainContainer}>
            <Login />
          </Route>
        </Switch>
        {/* <Container className="app-container">
        <Row>
          <Col className="side-bar-col">
            
              <Sidebar />
              <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/mealPlanner" component={MealPlanner} />
                <Route path="/myRecipes" component={MyRecipes} />
                <Route path="/mealPlanner" component={MealPlanner} />
              </Switch>
            </Router>
          </Col>
          <Col>
            <MainContainer />
          </Col>
        </Row>
      </Container> */}
      </div>
    </Router>
  );
}

export default App;
