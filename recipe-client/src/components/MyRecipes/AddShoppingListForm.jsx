import React, { useState, useContext } from "react";
import RecipesContext from "../../contexts/RecipesContext";
import Button from 'react-bootstrap/Button';
const formStyle = {
    border: '1px solid black',
    width: '75%',
    margin: 10,
    padding: 5
}

const inputStyle = {
    width: '90%'
}

/**
 * Form that used by user for adding new recipe to the cookbook
 * @returns {*}
 * @constructor
 */
const AddShoppingListForm = ({recipe}) => {
    const { addShoppingList } = useContext(RecipesContext);

    const [shoppingList, setShoppingList] = useState({
        title: '',
        content: ''
    })

    //console.log("Contents of shopping list obj:", shoppingList);

    /**
     * When user submits the shopping list for the recipe :)
     */
    const onSubmit = (event) => {
        event.preventDefault();

        //call our callback for editing our recipes states
        //onAddRecipe(recipe);
        //addRecipe(recipe);

        // call our callback for adding a new shopping list
        addShoppingList(recipe, shoppingList);

        //reset shopping list after it's created
        setShoppingList({ title: '', content: '' });
    }

    return (
        <form style={formStyle} onSubmit={onSubmit}>

            <div>
                <label style={{ display: 'block' }} htmlFor={"title"}>Title: </label>
                <input type={"text"}
                       id={"title"}
                       style={inputStyle}
                       value={shoppingList.title}
                       onChange={({ target }) => setShoppingList({ ...shoppingList, title: target.value })}
                />
            </div>


            <div>
                <label style={{ display: 'block' }} htmlFor={"content"}>Shopping List   : </label>
                <textarea id={"content"} value={shoppingList.content} rows={5}
                          style={inputStyle}
                          onChange={({ target }) => setShoppingList({ ...shoppingList, content: target.value })}
                />
            </div>


            <Button variant="success" type={"submit"}>
                Add Shopping List
            </Button>
        </form>
    );
}

export default AddShoppingListForm;