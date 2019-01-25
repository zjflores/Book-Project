import React, { Component } from 'react'
import User from './User'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
    this.getUsers = this.getUsers.bind(this)
  }
  getUsers() {
    fetch('http://localhost:5000/get-users', {
      method: 'GET',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ users: data })
      })
      .catch(error => console.error(error))
  }
  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <div>
          {this.state.users.map(user => {
            return <User key={user.id} name={user.name} userId={user.id} />
          })}
        </div>
      </div>
    )
  }
}
export default UserList
