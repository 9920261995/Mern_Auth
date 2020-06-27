import React, { Component } from "react";
import Forms from "./SignUpForm";
import axios from "axios";
// import { Redirect } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail';
import { Redirect } from "react-router-dom";
 

export default class FormController extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password:"",
  
      //Validation States
  
      nameValidation: "",
      emailValidation: "",
      passwordValidation: "",
      confirmResponse:"",
  
      response:"",
      error:""
    }
    this.valid = this.valid.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  

  // Validation for fields
  valid = () => {
    
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const password = this.state.password;
    const confirm_Password = this.state.confirm_password;


    console.log(password)
    console.log(confirm_Password)

    if (firstname === "" && lastname === "") {
      this.setState({ nameValidation: "*Please Enter Atleast First Name" });
      return false;
    } else {
      this.setState({ nameValidation: "" });
    }

    if (password !== confirm_Password ) {
      this.setState({ confirmResponse : "*Password Does not match" });
      return false;
    } else {
      this.setState({ confirmResponse : "" });
    }

    if (email === "") {
      this.setState({ emailValidation: "*Please Enter Email" });
      return false;
    } else {
      this.setState({ emailValidation: "" });
    }

    if (isEmail(email) === false) {
      this.setState({ emailValidation: "*Please Enter a Valid Email" });
      return false;
    } else {
      this.setState({ emailValidation: "" });
    }

    if (password.length < 8 || password === "") {
      this.setState({
        passwordValidation: "*Please Enter Password above * Characters",
      });
      return false;
    } else {
      this.setState({ passwordValidation: "" });
    }

    return true;
  };

  //Handle Change in fields at set them to respective fields
  handleOnChange = (event) => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
    console.log([event.target.name] +" "+ event.target.value);
  };

  //Send Post Request to the Api
  handleOnClick = async () => {

    try {
      const isValid = this.valid();

      if (isValid) {
        const name = this.state.firstname + " " + this.state.lastname;
        const email = this.state.email.toLowerCase();
        const password = this.state.password;
        const url = "http://localhost:4000/api/auth/register";
        const data = {
          name: name,
          email: email,
          password: password,
        };
        
        const response = await axios.post(url, data);

        //Check response and a display div to login
        this.setState({
          response:response,
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirm_password:"",
          
        })

        console.log(response.status);
       
      } 
      
    } catch (error) {

      //Check error and a display div to login
      this.setState({error:error})
      console.log(error.response.data)

    }
  };



  render() {
    if(this.state.response.status === 200){
      return <Redirect to = "/LogIn"></Redirect>

    }
    return (
      <div>
        <Forms
          onChange={this.handleOnChange}
          onClick={this.handleOnClick}
          nameResponse={this.state.nameValidation}
          emailResponse={this.state.emailValidation}
          passwordResponse={this.state.passwordValidation}
          confirmResponse = {this.state.confirmResponse}
          properResponse={this.state.valid}
          
          firstname = {this.state.firstname}
          lastname = {this.state.lastname}
          email = {this.state.email}
          password = {this.state.password}
          confirm_password = {this.state.confirm_password}

        />
      </div>
    );
  }
}
