import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HeadLink } from './HeaderStyled'

const BaseLayout = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">FlopKArt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <HeadLink to = "/LogIn">Log In</HeadLink>
                        <HeadLink to = "/SignUp">Sign Up</HeadLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BaseLayout;