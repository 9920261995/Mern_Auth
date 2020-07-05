import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HeadLink } from './HeaderStyled'
import AuthContext from '../Store/Auth'
import styled from 'styled-components'

const StyledNav = styled(Nav)`
    display : ${props => props.display};

` 

const BaseLayout = () => {
    const token = localStorage.getItem('token')
    return (
        <AuthContext.Consumer>
            {(context)=>(
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">FlopKArt</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <StyledNav className="ml-auto" display = {token !== null ?"none":""}>
                                <HeadLink to="/LogIn">Log In</HeadLink>
                                <HeadLink to="/SignUp">Sign Up</HeadLink>
                            </StyledNav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            )}
            
        </AuthContext.Consumer>
    )
}

export default BaseLayout;