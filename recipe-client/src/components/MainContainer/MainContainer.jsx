import React, {useState, useEffect} from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import SearchIcon from "@mui/icons-material/Search";

//Search
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import ListSubheader from "@mui/material/ListSubheader";
import InfoIcon from "@mui/icons-material/Info";

import "./mainContainer.css";
import { useFetchRecipe } from "../../helpers/ApiHelpers";
import { withRouter } from "react-router-dom";



const drawerWidth = 240;

function MainContainer(props) {
 // begin search implementation
 const APP_ID = '';
 const APP_KEY = '';  
 
 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState('');
 const [query, setQuery] = useState("salmon");

 //const { data, error, loading } = useFetchRecipe();

  //if (loading) return <p>Still Loading!</p>;
  //if (error) throw error;

  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect (() => {
    console.log("Effect has been run");
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }  

  const updateSearch = e => {
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      <div className="App">        
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>               
      </div>
        
      </AppBar>

      
      <ImageList sx={{ width: 1030, height: 1400, marginLeft: 8 }}>
        <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="div">For You</ListSubheader>
        </ImageListItem>
        {recipes.map((item, index) => (
          <ImageListItem key={`${index}`}>
            <img
              src={`${item.recipe.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.recipe.label}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.recipe.label}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default withRouter(MainContainer);