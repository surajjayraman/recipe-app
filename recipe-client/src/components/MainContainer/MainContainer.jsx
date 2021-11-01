import React from "react";

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

// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   drawer: {
//     width: "240px",
//   },
// });

const drawerWidth = 240;

function MainContainer(props) {
  // // const { window } = props;
  // const { history } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const classes = useStyles();
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  const { data, error, loading } = useFetchRecipe();

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  // const itemsList = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon fontSize="small" sx={{ color: orange[500] }} />,
  //     onClick: () => history.push("/"),
  //   },
  //   {
  //     text: "Meal Planner",
  //     icon: <FastfoodIcon fontSize="small" sx={{ color: orange[500] }} />,
  //     onClick: () => history.push("/mealPlanner"),
  //   },
  //   {
  //     text: "My Recipes",
  //     icon: <NoteAltIcon fontSize="small" sx={{ color: orange[500] }} />,
  //     onClick: () => history.push("/contact"),
  //   },
  //   {
  //     text: "Ingredients List",
  //     icon: <NoteAltIcon fontSize="small" sx={{ color: orange[500] }} />,
  //     onClick: () => history.push("/contact"),
  //   },
  // ];

  // const drawer = (
  //   <div>
  //     {/* <Toolbar /> */}
  //     <img src={logo} className="logo" alt="" />
  //     <Divider />
  //     <MenuList>
  //       <MenuItem >
  //         <ListItemIcon>
  //           <HomeIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit">Home</Typography>
  //       </MenuItem>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <FastfoodIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit">Meal Planner</Typography>
  //       </MenuItem>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <NoteAltIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           Ingridients List
  //         </Typography>
  //       </MenuItem>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <SearchIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           Browse
  //         </Typography>
  //       </MenuItem>
  //     </MenuList>

  //     <Divider orientation="horizontal" flexItem>
  //       My Collection
  //     </Divider>

  //     <MenuList>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit">Breakfast</Typography>
  //       </MenuItem>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit">Lunch</Typography>
  //       </MenuItem>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           Dinner
  //         </Typography>
  //       </MenuItem>
  //       <MenuItem>
  //         <ListItemIcon>
  //           <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
  //         </ListItemIcon>
  //         <Typography variant="inherit" noWrap>
  //           Snack
  //         </Typography>
  //       </MenuItem>
  //     </MenuList>
  //     <Divider />

  //     <Typography variant="inherit">
  //       <CopyrightIcon fontSize="small" sx={{ color: orange[500] }} /> DietDash.
  //       2021.
  //     </Typography>
  //   </div>
  // );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

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
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for Recipes" />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </AppBar>

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      {/* <MUIDrawer variant="permanent" className={classes.drawer}>
          <img src={logo} className="logo" alt="" />
          <Divider />
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
        </MUIDrawer> */}

      {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer> */}

      <ImageList sx={{ width: 1030, height: 1400, marginLeft: 8 }}>
        <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="div">For You</ListSubheader>
        </ImageListItem>
        {data.hits.map((item, index) => (
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
