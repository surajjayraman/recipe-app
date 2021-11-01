import React from "react";
import { useFetchMyRecipe } from "../../helpers/ApiHelpers";
import "../Card/displayCard.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { orange } from "@mui/material/colors";

function MealPlanner() {
  const { data, error, loading } = useFetchMyRecipe();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [recipes, setRecipes] = setState([]);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  // setRecipes(data.hits);
  console.log(data);

  // const [recipes, setRecipes] = useState(false);
  // useEffect(() => {
  //   getRecipes();
  // }, []);

  // function getRecipes() {
  //   fetch("http://localhost:8080/recipe")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setRecipes(data);
  //     });
  // }

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
        // useFetchMyRecipe();
      });
  }

  return (
    <div class="mealPlanner-container">
      <h1> Create your Meal Plan</h1>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="Breakfast" label="breakfast" />
          <Tab value="Lunch" label="lunch" />
          <Tab value="Dinner" label="dinner" />
        </Tabs>
      </Box>

      <br />
      {/* <div className="card-container">
        {data.map((item, index) => (
          <Card key={`${index}`} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${item.image_url}`} />
            <Card.Body>
              <Card.Title>{`${item.recipe_name}`}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Cuisine Type: {`${item.cuisine_type}`}
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <Card.Link href="{`${item.ingredients}`}">
                  Ingridient List
                </Card.Link>{" "}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link
                href={`${item.preparation}`}
              >{`${item.source}`}</Card.Link>
            </Card.Body>
          </Card>
        ))}
        <button>Delete Recipe</button>
      </div> */}
    </div>
  );
}
export default MealPlanner;
