import React, { Component } from 'react';

class AddBook extends React.Component{
	constructor(props) {
		super(props);
		this.state = {title:'', author:''};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	handleTitleChange(event) {
		this.setState({title: event.target.value});
	}

	handleAuthorChange(event) {
		this.setState({author: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:5000/add-book', {
			method: "POST",
			mode: "cors", // no-cors, cors, *same-origin
			credentials: 'include',
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({title:this.state.title, author:this.state.author})
		})
		.then(response => response.json())
		.then(function(data){
			console.log(data);
			this.props.onBookAdd(this.state.title, this.state.author)
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
						<input type="text" value={this.state.title} onChange={this.handleTitleChange} />
					</label><br/>
					<label>
						Author:
						<input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
					</label><br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default AddBook;