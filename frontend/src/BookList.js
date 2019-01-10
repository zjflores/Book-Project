import React, { Component } from 'react';
import TrashButton from './TrashButton';

class BookList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			books : []
		};
		this.getBooks = this.getBooks.bind(this);
		this.onBookDelete = this.onBookDelete.bind(this);
	}

	onBookDelete(title,author) {
		const newBooks = this.state.books.filter((book,index) => {
			if (book.title !== title && book.author!== author)
				return true	
			else
				return false
			})
		this.setState({books: newBooks})
		}
	
	getBooks() {
		fetch('http://localhost:5000/get-user-books', {
			method: "GET",
			mode: "cors", // no-cors, cors, *same-origin
			credentials: 'include',
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
			liTags.push(<li>{book.title} - {book.author} <TrashButton title = {book.title} author = {book.author} onBookDelete = {this.onBookDelete} /></li>);
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