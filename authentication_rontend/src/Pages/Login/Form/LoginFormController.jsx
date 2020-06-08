import React, { Component } from "react";
import { Forms } from "./Form";
import axios from "axios";
import jwt from 'jwt-decode'

export default class FormController extends Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value)
  };

  handleOnClick = async () => {
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

      const decoded = jwt(token)
      console.log(decoded)

      this.setState({
        username: "",
        password: "",
      })

    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Forms onChange={this.handleOnChange} onClick={this.handleOnClick} />
      </div>
    );
  }
}
