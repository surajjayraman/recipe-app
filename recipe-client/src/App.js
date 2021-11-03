import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./components/Login/Login";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import Drawer from "./components/Drawer/Drawer";
import MyRecipes from "./components/MyRecipes/MyRecipes";
import IngredientList from "./components/Ingredients/IngredientsList";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <div className={classes.container}>
            <Drawer />

            <Route path="/home" component={MainDisplay} />
            <Route path="/mealPlanner" component={MealPlanner} />
            <Route path="/myRecipes" component={MyRecipes} />
            <Route path="/ingredientsList" component={IngredientList} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
