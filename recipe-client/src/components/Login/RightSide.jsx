import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import logo from "../../images/orange_dietdash_logo_2.png";

function RightSide() {
  return (
    <div>
      <Form className="login-form">
        <img src={logo} className="logo" />
        <h2>Join, and Eat well</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="login_email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="login_email"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
export default RightSide;
