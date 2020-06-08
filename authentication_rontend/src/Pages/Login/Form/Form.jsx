import React,{useRef} from "react";
import { Form, Button } from "react-bootstrap";

export const Forms = (props) => {
   const ref = useRef("username")
  return (
    <div>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        Log in
      </div>
      <Form.Group controlId="form_username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="email"
          name="username"
          placeholder="Enter your email"
          onChange={props.onChange}
          ref = {ref}
        />
      </Form.Group>
      <p>{props.validation}</p>
      <Form.Group controlId="form_password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password should be atleast 8 character"
          onChange={props.onChange}
        />
      </Form.Group>
      <p>{props.validation}</p>
      <Button variant="primary" onClick={props.onClick}>
        Log In !!
      </Button>
    </div>
  );
};
