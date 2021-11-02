import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import logo from "../../images/dietDash-small.png";
import { orange } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SearchIcon from "@mui/icons-material/Search";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CopyrightIcon from "@mui/icons-material/Copyright";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon fontSize="small" sx={{ color: orange[500] }} />,
      onClick: () => history.push("/"),
    },
    {
      text: "Meal Planner",
      icon: <FastfoodIcon fontSize="small" sx={{ color: orange[500] }} />,
      onClick: () => history.push("/mealPlanner"),
    },
    {
      text: "My Recipes",
      icon: <NoteAltIcon fontSize="small" sx={{ color: orange[500] }} />,
      onClick: () => history.push("/myRecipes"),
    },
    {
      text: "Ingredients List",
      icon: <NoteAltIcon fontSize="small" sx={{ color: orange[500] }} />,
      onClick: () => history.push("/contact"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <img src={logo} className="logo" alt="" />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
