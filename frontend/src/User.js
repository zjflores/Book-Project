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
      <Button className="userBtn" block>
        <NavLink to={`/user/${this.props.userId}/books`}>
          {this.props.name}
        </NavLink>
      </Button>
    )
  }
}

export default User
