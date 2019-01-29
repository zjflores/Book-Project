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
    return (
      <Navbar>
        <Nav className="mynav">
          <NavItem>
            <LinkContainer to="/">
              <span>Home</span>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/books">
              <span>Your Library</span>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/users">
              <span>Users</span>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/register">
              <span>Register</span>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/login">
              <span>Login</span>
            </LinkContainer>
          </NavItem>
          <NavItem>
            <LinkContainer to="/logout">
              <span>Logout</span>
            </LinkContainer>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
