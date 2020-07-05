import React from "react";
import { Contain, SignUpCard, Column, ImageCol, Image } from "./LoginStyled";
import { Row } from "react-bootstrap";
import Img from "../../Assets/SignUpImg.jpg";
import LoginFormController from "./Form/LoginFormController";
import AuthContext from "../../Store/Auth";

function Login() {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <div style={{ backgroundColor: "gray" }}>
          <Contain>
            <SignUpCard>
              <Row>
                <Column lg={6}>
                  <LoginFormController signInWithGoogle={context.signInWithGoogle} />
                </Column>
                <ImageCol lg={6} style={{}}>
                  <Image src={Img} alt="" />
                </ImageCol>
              </Row>
            </SignUpCard>
          </Contain>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default Login;
