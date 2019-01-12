import React from 'react';
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
			<div className="App">
				<Home/>
				<Login onLogin = {this.onLogin}/>
				{this.state.isLoggedIn && <BookList />}
			</div>
		);
	};
}

export default App;