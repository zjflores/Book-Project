import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css'
import './Base.css'
import Home from './Home'
import BookList from './BookList'
import BookInfo from './BookInfo'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderLogout = this.renderLogout.bind(this)
    this.renderRegister = this.renderRegister.bind(this)
  }
  onLogin() {
    this.setState({ isLoggedIn: true })
  }
  onLogout() {
    this.setState({ isLoggedIn: false })
  }
  renderLogin() {
    return <Login onLogin={this.onLogin} isLoggedIn={this.state.isLoggedIn} />
  }
  renderLogout() {
    return (
      <Logout onLogout={this.onLogout} isLoggedIn={this.state.isLoggedIn} />
    )
  }
  renderRegister() {
    return (
      <Register onLogin={this.onLogin} isLoggedIn={this.state.isLoggedIn} />
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App container">
            <Route path="/" component={Home} />
            <Route path="/register" component={this.renderRegister} />
            <Route path="/login" component={this.renderLogin} />
            <Route path="/books" component={BookList} />
            <Route path="/logout" component={this.renderLogout} />
            <Route path="/book/:bookId" component={BookInfo} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
