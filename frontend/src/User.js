import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  render() {
    return (
      <div>
        <NavLink to={`/user/${this.props.userId}/books`}>
          {this.props.name}
        </NavLink>
      </div>
    )
  }
}

export default User
