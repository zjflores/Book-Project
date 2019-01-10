import React, { Component } from 'react';

class TrashButton extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			title : this.props.title,	
			author: this.props.author	
		};
		this.handleDeleteBook = this.handleDeleteBook.bind(this);
	}

	handleDeleteBook(event) {
		event.preventDefault();
		fetch('http://localhost:5000/delete-book', {
			method: "POST",
			mode: "cors", // no-cors, cors, *same-origin
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({title:this.state.title, author:this.state.author})
		})
		.then(response => response.json())
		.then(function(data){
			console.log(data);
		})
		.catch(error => console.error(error));
	}
	
	render() {
		
		return <button onClick={this.handleDeleteBook}>
  		Delete
		</button>};
}
	

export default TrashButton;