import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/Signup";
import Home from "./Pages/Home/Home";
import { PrivateRoutes } from "./Pages/PrivateRoutes";
import AuthContext from "./Store/Auth";
import dotenv from 'dotenv'

class Navigate extends Component {
  state = {
    isAuthenticated: false,
  };

  componentDidMount = () => {
    dotenv.config();
    console.log(process.env.API_KEY)
    this.updateLoginStatus();
  };

  updateLoginStatus = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token !== null) {
      this.setState({
        isAuthenticated: true,
      });
    } else {
      this.setState({
        isAuthenticated: false,
      });
    }
  };

  
  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          updateLoginStatus: this.updateLoginStatus,
          signInWithGoogle: this.signInWithGoogle,
        }}
      >
        <Switch>
          <PrivateRoutes path="/" exact component={Home} />
          <Route path="/LogIn" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </AuthContext.Provider>
    );
  }
}

export default Navigate;
