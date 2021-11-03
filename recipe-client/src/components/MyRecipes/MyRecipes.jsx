import React, { useState } from "react";
import { useFetchMyRecipe } from "../../helpers/ApiHelpers";
import "../Card/displayCard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function MyRecipes() {
  const { data, error, loading, refreshData } = useFetchMyRecipe();
  const [buttonPopup, setButtonPopup] = useState(false);

  function removeRecipe(deleteData) {
    console.log(">>>>>", deleteData.recipe_id);
    fetch(`http://localhost:8080/recipe/${deleteData.recipe_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        refreshData();
        return response.text();
      })
      .then((data) => {});
  }
  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  return (
    <div>
      <h1> My Recipes</h1>

      <br />
      <div className="card-container">
        {Object.keys(data).map((item, index) => (
          <Card sx={{ width: 300 }} key={`${index}`}>
            <CardMedia
              component="img"
              alt="Meal Image"
              height="140"
              image={`${data[item].image_url}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`${data[item].recipe_name}`}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
              <Typography variant="body2" color="text.secondary">
                Calories: {`${data[item].calories}`}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Prep Time: {`${data[item].prep_time}`} mins
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Meal Type: {`${data[item].meal_type}`}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Recipe</Button>
              <Button size="small" onClick={() => removeRecipe(data[item])}>
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default MyRecipes;
