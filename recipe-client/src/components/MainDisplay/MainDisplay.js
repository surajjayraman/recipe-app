import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mainDisplay.css";
import MainContainer from "../MainContainer/MainContainer";

function MainDisplay() {
  return (
    <div>
      <Container className="app-container">
        <Row>
          <Col className="main-col">
            <MainContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainDisplay;
