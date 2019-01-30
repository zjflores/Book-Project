import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    if (this.props.isLoggedIn) {
      return (
        <Navbar>
          <Nav className="mynav">
            <NavItem>
              <LinkContainer to="/">
                <span className="navlink">Home</span>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/books">
                <span className="navlink">Your Library</span>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/users">
                <span className="navlink">Users</span>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/logout">
                <span className="navlink">Logout</span>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
      )
    } else {
      return (
        <Navbar>
          <Nav className="mynav">
            <NavItem>
              <LinkContainer to="/">
                <span className="navlink">Home</span>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/register">
                <span className="navlink">Register</span>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/login">
                <span className="navlink">Login</span>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
      )
    }
  }
}

export default NavBar
