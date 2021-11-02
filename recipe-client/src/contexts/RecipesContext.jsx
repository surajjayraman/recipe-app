import React, { useState, useEffect } from 'react';
import axios from 'axios';

let nextRecipeId = 1;

/**
 * We create our recipe context
 * @type {React.Context<{removeRecipe: (function(): *), recipes: [], addRecipe: (function(): *)}>}
 */
const RecipesContext = React.createContext({
    recipes: [],
    shoppingLists : [],
    addRecipe: (recipe) => console.error("Please implement this function."),
    addShoppingList: (recipe, shoppingList) => console.error("Please implement this function."),
    removeRecipe: (recipeId) => console.error("Please implement this function."),
});


/**
 * We make component for manage business logic between children components and context
 * @param children
 * @returns {*}
 * @constructor
 */
const RecipeContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [shoppingLists, setShoppingLists] = useState([]);

    // fetch recipes from api
    useEffect (() => {
        console.log("Effect has been run");
        getRecipes();
      },[]);
    
      const getRecipes = async () => {
        const response = await fetch("http://localhost:8080/recipe");
        const data = await response.json();
        console.log(data);
        setRecipes(data);
      }  

   /**
     * Callback when user add new recipe into recipes list
     * @param recipe
     */
    const addRecipe = (recipe) => {
        const newRecipe = {...recipe, id: nextRecipeId++};
        console.log('new recipe added !', newRecipe);
        //setRecipes([...recipes, newRecipe]);
        
        // persist recipe in db using axios
        axios({
            method: 'post',
            url: 'http://localhost:8080/recipe',
            data: {
                
                    user_id : 1,
                    recipe_name: "Filipano Chillapalaco",
                    image_url: "none",
                    prep_time: 10,
                    serving_size: 3,
                    cuisine_type: "Asian",
                    source: "unknown",
                    preparation: "DIY",
                    ingredients: "whatever you like blah blah blah blaaaaaaaaaaaaaaaaaaah",
                    meal_type: "lunch",
                    calories: 700,
                    fat: 800,
                    carbs: 250,
                    protein: 300,
                  
            }
          }).then(res => {
            console.log(res);
            getRecipes();
        })
        .catch(err => {
            console.log(err);
        });
    }

    /**
     * Callback when user add new recipe into recipes list
     * @param recipe
     */
     const addShoppingList = (recipe, shoppingList) => {
        const newShoppingList = {...shoppingList, id: recipe.id};
        console.log('new shopping list added !', newShoppingList);
        setShoppingLists([...shoppingLists, newShoppingList]);
    }

    /**
     * Callback when user remove recipe into recipes list
     * @param recipeId
     */
    const removeRecipe = (recipeId) => {
        console.log('remove recipe id', recipeId)
        setRecipes([...recipes].filter(recipe => recipe.recipe_id !== recipeId));

        // delete recipe from db
        axios.delete(`http://localhost:8080/recipe/${recipeId}`)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }


    return (
        <RecipesContext.Provider value={{
            recipes, shoppingLists, addRecipe, addShoppingList, removeRecipe
        }}>
            {children}
        </RecipesContext.Provider>
    )
}


export default RecipesContext;
export { RecipeContextProvider };