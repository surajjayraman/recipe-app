import React from "react";

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <Container className="app-container">
      <Row>
        <Col className="side-bar-col">
          <Sidebar />
        </Col>
        <Col>
          <MainContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
