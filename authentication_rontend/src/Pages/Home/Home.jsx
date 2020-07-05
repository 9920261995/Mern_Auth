import React from 'react'
import {Button} from 'react-bootstrap'
import AuthContext from '../../Store/Auth'

export default class Home extends React.Component {


    componentDidMount = () =>{
        // window.location.reload()
    }

    static contextType = AuthContext
    sessionLogout = ()=>{
        localStorage.removeItem('token')
        window.location.reload();
    }
   
    
    render() {
        if (localStorage.getItem('token') === null ) {
            this.context.updateLoginStatus()
            // return <Redirect to = "/LogIn"></Redirect>
        }
        return (
            <div style = {{textAlign:"center"}}>
                <h4> Home</h4>
                <br/>
                <h2>Congrats!! You have Successfully Logged in</h2>
                <h2>To Log out click here</h2>
                <Button onClick = {this.sessionLogout}>Log Out</Button>
            </div>
        )
    }
}
