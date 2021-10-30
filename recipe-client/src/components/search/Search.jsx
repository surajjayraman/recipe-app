import React from "react";
import { Button } from "react-bootstrap";
import "./search-box.css";

export const Search = ({ placeholder, handleChange }) => (
  <div className="search-container">
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
    <Button className="search-button" variant="primary" type="submit">
      Search
    </Button>
  </div>
);
