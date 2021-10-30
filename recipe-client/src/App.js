import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  // const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/mainContainer" component={MainContainer} />
          {/* <Login /> */}
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
    </BrowserRouter>
  );
}

export default App;
