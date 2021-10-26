import React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
    </Box>
  );
}

export default App;
