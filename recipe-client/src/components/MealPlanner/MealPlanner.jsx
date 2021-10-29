import React from "react";
import { useFetchMyRecipe } from "../../helpers/ApiHelpers";
import "../Card/displayCard.css";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

function MealPlanner() {
  const { data, error, loading } = useFetchMyRecipe();
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

  // function createRecipe() {
  //   let name = prompt("Enter name");
  //   let email = prompt("Enter name");
  //   fetch("http://localhost:8080/recipe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email }),
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getRecipes();
  //     });
  // }

  // function deleteRecipe() {
  //   let id = prompt("Enter recipe id");
  //   fetch(`http://localhost:8080/recipe/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       alert(data);
  //       getRecipes();
  //     });
  // }

  return (
    <div>
      <h1> Create your Meal Plan</h1>
      <p>Some description</p>
      <p>Breakfast | Lunch | Dinner | Snack and Desert</p>
      {/* {recipes ? recipes : "There is no recipe data available"} */}
      <br />
      <div className="card-container">
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
        <button>Add Recipe</button>
        <br />
        <button>Delete Recipe</button>
      </div>
    </div>
  );
}
export default MealPlanner;
