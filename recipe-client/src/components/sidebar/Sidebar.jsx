import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { orange } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SearchIcon from "@mui/icons-material/Search";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CopyrightIcon from "@mui/icons-material/Copyright";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import "./sideBar.css";
import logo from "../../images/orange_dietdash_logo_2.png";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <img src={logo} className="logo" alt="" />
      <Divider />
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit">Home</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FastfoodIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit">Meal Planner</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NoteAltIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Ingridients List
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SearchIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Browse
          </Typography>
        </MenuItem>
      </MenuList>

      <Divider orientation="horizontal" flexItem>
        My Collection
      </Divider>

      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit">Breakfast</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit">Lunch</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Dinner
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FolderOpenIcon fontSize="small" sx={{ color: orange[500] }} />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Snack
          </Typography>
        </MenuItem>
      </MenuList>
      <Divider />

      <Typography variant="inherit">
        <CopyrightIcon fontSize="small" sx={{ color: orange[500] }} /> DietDash.
        2021.
      </Typography>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
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
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        Recomendations
        <ImageList sx={{ width: 1000, height: 600 }} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Sidebar;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
