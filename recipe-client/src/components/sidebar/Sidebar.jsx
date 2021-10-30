import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
// import { ImHome3 } from "react-icons/aifill";
import "./sideBar.css";
import logo from "../../images/orange_dietdash_logo_2.png";

function Sidebar() {
  return (
    <Container className="sidebar-container">
      <Row>
        <Col className="sidebar-image-hr-col">
          <img src={logo} className="logo" />
          <hr className="hr" />
        </Col>
      </Row>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link to="/">Home</Nav.Link>
        <Nav.Link eventKey="link-1" to="/">
          Meal Planner
        </Nav.Link>
        <Nav.Link eventKey="link-1" to="">
          My Recipes
        </Nav.Link>
        <Nav.Link eventKey="link-2">Ingridients List</Nav.Link>
        <Nav.Link eventKey="link-2">Browse</Nav.Link>
      </Nav>
    </Container>
  );
}
export default Sidebar;
