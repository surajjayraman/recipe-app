import React from "react";
import "./search-box.css";

export const Search = ({ placeholder, handleChange }) => (
  <div className="search-container">
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
