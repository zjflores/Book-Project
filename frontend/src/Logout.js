import React, { Component } from "react";

class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.email, 
			password: this.props.password};
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout(event) {
		event.preventDefault();
		fetch('http://localhost:5000/logout', {
			method: "POST",
			mode: "cors", // no-cors, cors, *same-origin
			credentials: 'include',
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({email:this.props.email, password:this.props.password})
		})
		.then(response => response.json())
		.then (data => {
			console.log(data);
		})
		.catch(error => console.error(error));
	}
	render() {
		return( 
		<button onClick={this.handleLogout}>
  			Logout
		</button>
		)
	}
	
}
	

export default Logout;