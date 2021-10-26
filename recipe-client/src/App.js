import React from "react";

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Container className="app-container">
      <Sidebar />
      <Row></Row>
    </Container>
  );
}

export default App;
