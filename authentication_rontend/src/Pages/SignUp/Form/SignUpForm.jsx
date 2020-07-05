import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { InputFields } from "./Components/InputFields";

const Forms = (props) => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        Sign Up
      </div>
      <Form>
        <Row>
          <Col>
            <InputFields
              controlId="formBasicFirstName"
              label="First Name"
              name="firstname"
              placeholder="Enter First Name"
              onChange={(event) => props.onChange(event)}
              validation={props.nameResponse}
              value = {props.firstname}
            />
          </Col>
          <Col>
            <InputFields
              controlId="formBasicLastName"
              label="Last Name"
              name="lastname"
              placeholder="Enter Last Name"
              onChange={(event) => props.onChange(event)}
              value = {props.lastname}
            />
          </Col>
        </Row>

        <InputFields
          controlId="formBasicEmail"
          label="Email address"
          name="email"
          placeholder="Enter Email"
          onChange={(event) => props.onChange(event)}
          validation={props.emailResponse}
          value = {props.email}
          // ref="email"
        />

        <InputFields
          controlId="formBasicPassword"
          label="Password"
          name="password"
          placeholder="Enter Password"
          onChange={(event) => props.onChange(event)}
          validation={props.passwordResponse}
          value = {props.password}
          // ref="password"
        />
        <InputFields
          controlId="formConfirmPassword"
          label="Confirm Password"
          name="confirm_password"
          placeholder="ReEnter password"
          onChange={(event) => props.onChange(event)}
          validation={props.confirmResponse}
          value = {props.confirm_password}
          // ref="password"
        />
        <Button variant="primary" onClick={props.onClick}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
