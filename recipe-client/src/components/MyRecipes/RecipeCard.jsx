import React, { useContext } from "react";
import RecipesContext from "../../contexts/RecipesContext";
import AddShoppingListForm from "./AddShoppingListForm";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardStyle = {
    border: '1px solid gray',
    padding: 5,
    width: '20%',
    margin: 5
}

/**
 * Card that represent the recipe
 * @param recipe
 * @param onEditRecipe
 * @param onRemoveRecipe
 * @returns {*}
 * @constructor
 */
const RecipeCard = ({ recipe }) => {
    const { title = "", content = "" } = recipe;
    const { removeRecipe } = useContext(RecipesContext);

    return (
        <Card className="bg-light text-black" style={{ width: '18rem' }} >
        <div>
            <Card.Title> <h4><u>Recipe</u>: {recipe.recipe_name}</h4> </Card.Title>

            <u>Ingredients:</u>
            {
                recipe.ingredients
                //.split('\n')
                    //.map((line, index) => <p key={index}>{line}</p>)
                    
            }

            <Button variant="danger" onClick={() => removeRecipe(recipe.recipe_id)}>
                Remove
            </Button>
            
              
            <AddShoppingListForm recipe={recipe}/>
        </div>
        </Card>
    );
}

export default RecipeCard;