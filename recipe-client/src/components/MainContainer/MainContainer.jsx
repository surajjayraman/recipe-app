import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { CardList } from "../cardList/CardList.jsx";
import { Search } from "../search/Search.jsx";
import "./mainContainer.css";

function MainContainer() {
  return (
    <Container className="sidebar-container">
      <Row>
        <Search className="search-component" placeholder="Search Recipes" />
        <CardList />
      </Row>
    </Container>
  );
}
export default MainContainer;
