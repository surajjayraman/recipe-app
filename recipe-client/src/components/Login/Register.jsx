import React, { useState, useEffect, Component } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import logo from "../../images/orange_dietdash_logo_2.png";

export class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form className="login-form">
          <img src={logo} className="logo" />
          <h2>Join, and Eat well</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              className="login_email"
              type="text"
              placeholder="Enter User Name"
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="login_email"
              type="email"
              placeholder="Enter email"
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="login_email"
              type="password"
              placeholder="Password"
              //   onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={login}>
            Register
          </Button>
        </Form>
      </div>
    );
  }
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const history = useHistory();
  //   useEffect(() => {
  //     if (localStorage.getItem("user-info")) history.push("/mainContainer");
  //   }, []);
  //   async function login() {
  //     let item = { email, password };
  //     let result = await fetch("http://localhost:8080/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },

  //       body: JSON.stringify(item),
  //     });
  //     result = await result.json();
  //     // console.log("Logged in");
  //     localStorage.setItem("user-info", JSON.stringify(result));
  //     history.pushState("/mainContainer");
  //   }
}
export default Register;
