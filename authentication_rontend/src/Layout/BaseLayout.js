import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HeadLink } from './HeaderStyled'
import AuthContext from '../Store/Auth'

const BaseLayout = () => {
    return (
        <AuthContext.Consumer>
            {(context)=>(
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">FlopKArt</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <HeadLink display = {context.isAuthenticated===true?"none":""} to="/LogIn">Log In</HeadLink>
                                <HeadLink display = {context.isAuthenticated ===true?"none":""} to="/SignUp">Sign Up</HeadLink>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
            
        </AuthContext.Consumer>
    )
}

export default BaseLayout;