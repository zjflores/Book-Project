import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home';
import BookList from './BookList';
import Login from './Login';
import Register from './Register';


class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoggedin: false
		}	
		this.onLogin = this.onLogin.bind(this)
		this.renderLogin = this.renderLogin.bind(this)
	}
	onLogin() {
		this.setState({isLoggedIn : true})
	}
	renderLogin() {
		return (<Login
			onLogin = {this.onLogin}
		></Login>)
	}
	 render() {
		return (
			<Router>
				<div className="App">
				<div className="App container">
						<Route path="/" component={Home} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={this.renderLogin} />
						<Route path="/books" component={BookList} />
					</div>
				</div>
			</Router>
		);
	};
}

export default App;