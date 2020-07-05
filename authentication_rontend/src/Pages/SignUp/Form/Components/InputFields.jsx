import React, { useRef } from "react";
import { Form } from "react-bootstrap";

export const InputFields = (props) => {
  const textInput = useRef(props.ref);
  return (
    <>
      <Form.Group controlId={`${props.controlId}`}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          ref={textInput}
          name={`${props.name}`}
          placeholder={`${props.placeholder}`}
          onChange={(event) => props.onChange(event)}
          value = {props.value}
        />
      </Form.Group>
      <p>{props.validation}</p>
    </>
  );
};
