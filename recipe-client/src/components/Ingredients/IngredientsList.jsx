import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useFetchMyIngredients } from "../../helpers/ApiHelpers";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", ingredientData: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const formData = this.state.value;

    const user_info = JSON.parse(localStorage.getItem("user-info"));

    const user_id = user_info[0].id;
    const ingridient_name = formData;

    fetch("http://localhost:8080/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        user_id,
        ingridient_name,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.seState = { value: "" };
    return formData;
  }

  async componentDidMount() {
    const api_url = `http://localhost:8080/ingredients`;
    const response = await fetch(api_url);
    const data = await response.json();
    this.setState({ ingredientData: data });
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Ingredients
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <form onSubmit={this.handleSubmit}>
                <label>
                  Ingredient Name:
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Box>
            <Demo>
              <List>
                {/* {Object.keys(this.state.ingredientData).map((item, index) => ( */}
                <ListItem
                  // key={`${index}`}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <NoteAltIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                  // {...this.state.ingredientData[item].ingridient_name}
                  />
                </ListItem>
                {/* ))} */}
              </List>
            </Demo>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default IngredientList;
