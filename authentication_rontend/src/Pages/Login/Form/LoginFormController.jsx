import React, { Component } from "react";
import { Forms } from "./Form";
import axios from "axios";
import jwt from 'jwt-decode'
import { Redirect } from "react-router-dom";
import AuthContext from '../../../Store/Auth'

export default class FormController extends Component {
  static contextType = AuthContext;
  state = {
    username: "",
    password: "",
    id: "",
    iat: "",
    isAuthenticated : false

  };


  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnClick = async () => {
    // const loginStatus = this.context.updateLoginStatus;
    try {
      const username = this.state.username.toLowerCase();
      const password = this.state.password;
      const data = {
          email : username,
          password : password
      }


      const url = "http://localhost:4000/api/auth/login";
    
      const response = await axios.post(url,data)
      const token = response.data

      if (response){
        this.context.updateLoginStatus(response)
      }

      const decoded = jwt(token)
      // console.log(decoded)

      this.setState({
        username: "",
        password: "",
        id: decoded._id,
        iat: decoded.iat,
      })

    } catch (error) {
      
      console.log(error);
    }
  };

  render() {
    if(this.state.id){
      return<Redirect to = "/"></Redirect>
    }
    return (
      <div>
        <Forms onChange={this.handleOnChange} onClick={this.handleOnClick} />
      </div>
    );
  }
}
