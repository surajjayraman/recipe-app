import React, { useState } from "react";
import {
  useFetchMyRecipe,
  useFetchRecipe,
  useFetchBreakfast,
  useFetchLunch,
  useFetchDinner,
} from "../../helpers/ApiHelpers";
import "../Card/displayCard.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { orange } from "@mui/material/colors";
import DisplayCard from "../Card/DisplayCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MealPlanner() {
  // if()
  // const { data, error, loading } = useFetchRecipe();
  const { data, error, loading } = useFetchBreakfast();

  const { lunchData, lunchError, lunchloading } = useFetchLunch();
  const { dinnerData, dinnerError, dinnerloading } = useFetchDinner();
  const [value, setValue] = React.useState(0);

  console.log(">>>>>>>>", data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  // setRecipes(data.hits);

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
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Breakfast" {...a11yProps(0)} />
            <Tab label="Lunch" {...a11yProps(1)} />
            <Tab label="Dinner" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DisplayCard props={data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DisplayCard props={lunchData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DisplayCard props={dinnerData} />
        </TabPanel>
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
