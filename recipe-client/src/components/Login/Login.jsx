import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Row, Col } from "react-bootstrap";

function Login() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) history.push("/home");
  }, []);

  if (localStorage.getItem("user-info")) return null;

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
