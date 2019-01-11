import React, { Component } from 'react';

class UpdateButton extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			title : this.props.title,	
			author: this.props.author	
		};
		this.handleUpdateBook = this.handleUpdateBook.bind(this);
	}

	handleUpdateBook(event) {
		event.preventDefault();
		// change title and author fields in render to text form input

	}

	handleSaveUpdate(event) {
		event.preventDefault();
		fetch('http://localhost:5000/update-book', {
			method: "POST",
			mode: "cors", // no-cors, cors, *same-origin
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({title:this.state.title, author:this.state.author})
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			this.props.onSaveUpdate(this.state.title, this.state.author)
		})
		.catch(error => console.error(error));
	}
	
	render() {
		
		return <button onClick={this.handleUpdateBook}>
  		Update
		</button>};
}
	

export default UpdateButton;