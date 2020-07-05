import React from "react";
import { Contain, SignUpCard, Column, ImageCol, Image } from "./LoginStyled";
import { Row } from "react-bootstrap";
import Img from "../../Assets/SignUpImg.jpg";
import FormController from './Form/LoginFormController'

function Login() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Contain>
        <SignUpCard>
          <Row>
            <Column lg={6}>
            <FormController></FormController>
            </Column>
            <ImageCol lg={6} style={{}}>
              <Image src={Img} alt="" />
            </ImageCol>
          </Row>
        </SignUpCard>
      </Contain>
    </div>
  );
}

export default Login;
