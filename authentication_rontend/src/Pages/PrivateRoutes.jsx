import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Store/Auth";

export const PrivateRoutes = ({ component: Component, ...rest }) => {

  return (
    <AuthContext.Consumer>
      {(context) => (
        <Route
          render={(props) =>
            context.isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/LogIn",
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};
