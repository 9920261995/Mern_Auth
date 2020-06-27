import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/Signup'
import Home from './Pages/Home/Home'
import { PrivateRoutes } from './Pages/PrivateRoutes'
import AuthContext from './Store/Auth'

const Navigate = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false)


    const updateLoginStatus = decoded => {
        if (decoded !== null) {
            setisAuthenticated(true)
        } else {
            setisAuthenticated(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            updateLoginStatus: updateLoginStatus,
        }}>
            <Switch>
                <PrivateRoutes path="/" exact component={Home} />
                <Route path="/LogIn" component={Login} />
                <Route path="/SignUp" component={SignUp} />
            </Switch>
        </AuthContext.Provider>
    )
}

export default Navigate;


