import React, { Component } from 'react';

class AddBook extends React.Component{
	constructor(props) {
		super(props);
		this.state = {Title:'', Author:''};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTitleChange(event) {
		this.setState({Title: event.target.value});
	}

	handleAuthorChange(event) {
		this.setState({Author: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onAddBook(this.state.Title, this.state.Author);
		fetch('http://localhost:5000/add-book', {
			method: "POST",
			mode: "cors", // no-cors, cors, *same-origin
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({title:this.state.Title, author:this.state.Author})
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
				<h2>Add a book!</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Title:
						<input type="text" value={this.state.Title} onChange={this.handleTitleChange} />
					</label><br/>
					<label>
						Author:
						<input type="text" value={this.state.Author} onChange={this.handleAuthorChange} />
					</label><br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default AddBook;