import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      email: this.props.email,
      password: this.props.password,
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout(event) {
    event.preventDefault()
    fetch('http://localhost:5000/logout', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        email: this.props.email,
        password: this.props.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.props.onLogout()
      })
      .catch(error => console.error(error))
  }
  render() {
    if (this.props.isLoggedIn) {
      return <Button onClick={this.handleLogout}>Logout</Button>
    } else {
      return <Redirect push to="/" />
    }
  }
}

export default Logout
