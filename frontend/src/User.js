import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  render() {
    return (
      <NavLink className="userBtn" to={`/user/${this.props.userId}/books`}>
        <Button block>{this.props.name}</Button>
      </NavLink>
    )
  }
}

export default User
