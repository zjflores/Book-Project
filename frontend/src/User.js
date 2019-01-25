import React, { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  render() {
    return <div>{this.props.name}</div>
  }
}
export default User
