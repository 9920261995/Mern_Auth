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
    
    try {
      // window.location.reload()
      const username = this.state.username.toLowerCase();
      const password = this.state.password;
      const data = {
          email : username,
          password : password
      }


      const url = "http://localhost:4000/api/auth/login";
    
      const response = await axios.post(url,data)
      const token = response.data
      localStorage.setItem('token',response)
      if (response){
        this.context.updateLoginStatus()
      }

      const decoded = jwt(token)
    
      
     
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
    if(localStorage.getItem('token')!== null){
      return<Redirect to = "/"></Redirect>
    }
   
    return (
      <div>
        <Forms onChange={this.handleOnChange} onClick={this.handleOnClick} />
      </div>
    );
  }
}
