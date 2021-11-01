import React from "react";
import { useFetchMyRecipe } from "../../helpers/ApiHelpers";
import "../Card/displayCard.css";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

function MyRecipes() {
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

  function deleteRecipe(id) {
    // let id = prompt("Enter recipe id");
    console.log(">>>>>", id);
    fetch(`http://localhost:8080/recipe/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        // alert(data);
        // useFetchMyRecipe();
      });
  }

  return (
    <div>
      <h1> My Recipes</h1>
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
            <button onClick={() => deleteRecipe(item.recipe_id)}>
              Delete Recipe
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default MyRecipes;
