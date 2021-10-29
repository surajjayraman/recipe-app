import React, { useState, useEffect } from "react";

function MealPlanner() {
  const [recipes, setRecipes] = useState(false);
  useEffect(() => {
    getRecipes();
  }, []);

  function getRecipes() {
    fetch("http://localhost:8080/recipe")
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        setRecipes(data);
      });
  }

  function createRecipe() {
    let name = prompt("Enter name");
    let email = prompt("Enter name");
    fetch("http://localhost:8080/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getRecipes();
      });
  }

  function deleteRecipe() {
    let id = prompt("Enter recipe id");
    fetch(`http://localhost:8080/recipe/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getRecipes();
      });
  }

  return (
    <div>
      <h1> Create your Meal Plan</h1>
      <p>Some description</p>
      <p>Breakfast | Lunch | Dinner | Snack and Desert</p>
      {recipes ? recipes : "There is no recipe data available"}
      <br />
      <button onClick={createRecipe}>Add Recipe</button>
      <br />
      <button onClick={deleteRecipe}>Delete Recipe</button>
    </div>
  );
}
export default MealPlanner;
