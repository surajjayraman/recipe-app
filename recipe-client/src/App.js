import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import MyRecipes from "./components/";

// import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Container className="app-container">
        <Row>
          <Col className="side-bar-col">
            <Router>
              <Sidebar />
              <Switch>
                {/* <Route path="/" component={MainContainer} /> */}
                <Route path="/mealPlanner" component={MealPlanner} />
                <Route path="/mealPlanner" component={MyRe} />
                <Route path="/mealPlanner" component={MealPlanner} />
              </Switch>
            </Router>
          </Col>
          <Col>
            <MainContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
