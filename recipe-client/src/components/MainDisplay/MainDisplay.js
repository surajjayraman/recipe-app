import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./mainDisplay.css";
import MainContainer from "../MainContainer/MainContainer";
import SideBar from "../sidebar/Sidebar";

function MainDisplay() {
  return (
    // <BrowserRouter>
    <div>
      <Container className="app-container">
        <Row>
          <Col className="side-bar-col">
            <SideBar />
          </Col>
          <Col className="main-col">
            <MainContainer />
          </Col>
        </Row>
      </Container>
      {/* <Switch> */}
      {/* <Route exact path="/" component={Login} /> */}
      {/* <Route path="/mainContainer" component={MainContainer} /> */}
      {/* <Login /> */}
      {/* </Switch> */}
      {/* <Container className="app-container">
        <Row>
          <Col className="side-bar-col">
            
              <Sidebar />
              <Switch>
                <Route exact path="/home" component={MainContainer} />
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
    // </BrowserRouter>
  );
}

export default MainDisplay;
