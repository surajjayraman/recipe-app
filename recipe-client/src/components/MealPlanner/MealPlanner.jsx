import React, { useState } from "react";
import {
  useFetchBreakfast,
  useFetchLunchData,
  useFetchDinnerData,
} from "../../helpers/ApiHelpers";

import "../Card/displayCard.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  const { data, error, loading } = useFetchBreakfast();
  const { lunchData, lunchError, lunchloading } = useFetchLunchData();
  const { dinnerData, dinnerError, dinnerloading } = useFetchDinnerData();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

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
    </div>
  );
}
export default MealPlanner;
