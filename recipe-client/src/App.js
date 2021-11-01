import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./components/Login/Login";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import Drawer from "./components/Drawer/Drawer";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});
function App() {
  const classes = useStyles();
  // const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <div className={classes.container}>
            <Drawer />

            <Route path="/home" component={MainDisplay} />
            <Route path="/mealPlanner" component={MealPlanner} />
          </div>
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
