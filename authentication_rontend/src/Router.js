import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from  './Pages/Login/Login'
import SignUp from './Pages/SignUp/Signup'

const Navigate = () => {
    return (
        <Switch> 
            <Route path = "/LogIn"  component = {Login} />
            <Route path = "/SignUp" component = {SignUp} />             
        </Switch>
    )
}

export default Navigate;


