import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Row, Col } from "react-bootstrap";

function Login() {
  return (
    <Row className="landing">
      <Col>
        <LeftSide />
      </Col>

      <Col>
        <RightSide />
      </Col>
    </Row>
  );
}
export default Login;
