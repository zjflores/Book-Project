import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home';
import BookList from './BookList';
import Login from './Login';


class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoggedin: false
		}	
		this.onLogin = this.onLogin.bind(this)
	}
	onLogin() {
		this.setState({isLoggedIn : true})
	}
	 render() {
		return (
			<Router>
				<div className="App">
					{/* <Home/>
					<Login onLogin = {this.onLogin}/>
					{this.state.isLoggedIn && <BookList />} */}
				
			{/* <div className="container">
				<ul>
				<li><a href="">Hello</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Books</a></li>
				</ul>
				<hr/> */} 
			{/* Routes will go here */}
			<Route path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/books" component={BookList} />
			{/* </div> */}
				</div>
			</Router>
		);
	};
}

export default App;