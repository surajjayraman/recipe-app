import React from "react";

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Login />
      <Container className="app-container">
        <Row>
          <Col className="side-bar-col">{/* <Sidebar /> */}</Col>
          <Col>{/* <MainContainer /> */}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
