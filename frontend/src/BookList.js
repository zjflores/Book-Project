import React, { Component } from 'react';

class BookList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			books : []
		};
		this.getBooks = this.getBooks.bind(this);
	}

	getBooks() {
		fetch('http://localhost:5000/get-user-books', {
			method: "GET",
			mode: "cors", // no-cors, cors, *same-origin
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			}
		})
		.then(response => response.json())
		.then((data) => {
			console.log(data);
			this.setState({books: data})
		})
		.catch(error => console.error(error));
	}
	componentDidMount() {this.getBooks()}
	
	render() {
		let liTags = [];

		this.state.books.forEach(book => {
			liTags.push(<li>{book.title} - {book.author}</li>);
		});

		return(
			<div>
				<h2>User's Books</h2>
				<div>
					<ul>{liTags}</ul>
				</div>
			</div>
		)
	}
}

export default BookList;