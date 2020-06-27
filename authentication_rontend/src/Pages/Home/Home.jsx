import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div style = {{textAlign:"center"}}>
                <h4> Home</h4>
                <br/>
                <h2>Congrats!! You have Successfully Logged in</h2>
                <h2>To Log out click here</h2>
                <Button onClick = {()=>{alert("Yet to code this part")}}>Log Out</Button>
            </div>
        )
    }
}
