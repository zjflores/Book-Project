import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      name: '',
      email: '',
      password: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:5000/register', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.props.onLogin()
      })
      .catch(error => console.error(error))
  }
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect push to="/books" />
    } else {
      return (
        <div>
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
}
export default Register
