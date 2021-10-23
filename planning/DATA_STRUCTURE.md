# Data structure for Dietdash
### Recipe JSON from Edamam API
{
  "recipe": {
    "uri": "string",
    "label": "string",
    "image": "string",
    "source": "string",
    "url": "string",
    "shareAs": "string",
    "yield": 0,
    "dietLabels": [
      "string"
    ],
    "healthLabels": [
      "string"
    ],
    "cautions": [
      "string"
    ],
    "ingredientLines": [
      "string"
    ],
    "ingredients": [
      {
        "text": "string",
        "quantity": 0,
        "measure": "string",
        "food": "string",
        "weight": 0,
        "foodId": "string"
      }
    ],
    "calories": 0,
    "totalWeight": 0,
    "cuisineType": [
      "string"
    ],
    "mealType": [
      "string"
    ],
    "dishType": [
      "string"
    ],
    "totalNutrients": {},
    "totalDaily": {},
    "digest": [
      {
        "label": "string",
        "tag": "string",
        "schemaOrgTag": "string",
        "total": 0,
        "hasRDI": true,
        "daily": 0,
        "unit": "string",
        "sub": {}
      }
    ]
  }
}

### Entity Relationship Diagram
![Entity Relationship Diagram](https://github.com/surajjayraman/recipe-app/blob/main/planning/img/recipe-app-Page-1.drawio.png?raw=true)

### Tables

## Recipes
This table holds all of the recipes.

## RecipeIngredients
This table connects the recipes table and the ingredients table. Recipes can include many ingredients and ingredients can be associated with multiple recipes.

## RecipesList
This bridge table connects recipes table and the users table. It holds recipes that each user wants to make.

## Ingredients
All the ingredients are stored in this table. Ingredients are food or drink items. 

## Users
This table holds all of the users signed up for DietDash Web app.