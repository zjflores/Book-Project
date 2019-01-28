import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      fname: '',
      lname: '',
      email: '',
      password: '',
    }
    this.handleFnameChange = this.handleFnameChange.bind(this)
    this.handleLnameChange = this.handleLnameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFnameChange(event) {
    this.setState({ fname: event.target.value })
  }

  handleLnameChange(event) {
    this.setState({ lname: event.target.value })
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
        fname: this.state.fname,
        lname: this.state.lname,
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
              First Name:
              <input
                type="text"
                value={this.state.fname}
                required
                onChange={this.handleFnameChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={this.state.lname}
                required
                onChange={this.handleLnameChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={this.state.email}
                required
                onChange={this.handleEmailChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                required
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
