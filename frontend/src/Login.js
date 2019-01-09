import React, { Component } from "react";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {email: "", password: ""};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:5000/login', {
			method: "POST",
			mode: "cors", // no-cors, cors, *same-origin
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({email:this.state.email, password:this.state.password})
		})
		.then(response => response.json())
		.then(function(data){
			console.log(data);
		})
		.catch(error => console.error(error));
	}
	render() {	
		return(
			<div>
				<h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Email:
						<input type="text" value={this.state.email} onChange={this.handleEmailChange} />
					</label><br/>
					<label>
						Password:
						<input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
					</label><br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
export default Login;