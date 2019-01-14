import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
				<div className="App container">
					<Navbar fluid collapseOnSelect>
						<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Home</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
						<Nav pullRight>
							<LinkContainer to="/">
								<NavItem>Home</NavItem>
							</LinkContainer>
							{/* <LinkContainer to="/register">
								<NavItem>Register</NavItem>
							</LinkContainer> */}
							<LinkContainer to="/login">
								<NavItem>Login</NavItem>
							</LinkContainer>
							<LinkContainer to="/books">
								<NavItem>Books</NavItem>
							</LinkContainer>
							
						</Nav>
						</Navbar.Collapse>
					</Navbar>
					{/* <Routes /> */}
						<Route path="/" component={Home} />
						{/* <Route path="/register" component={Register} /> */}
						<Route path="/login" component={Login} />
						<Route path="/books" component={BookList} />
					</div>
					{/* <Home/>
					<Login onLogin = {this.onLogin}/>
					{this.state.isLoggedIn && <BookList />} */}
				
			
			{/* </div> */}
				</div>
			</Router>
		);
	};
}

export default App;