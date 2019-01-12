import React, { Component } from 'react';
import AddBook from './AddBook';
import TrashButton from './TrashButton';
import UpdateButton from './UpdateButton';

class BookList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			books : []
		};
		this.getBooks = this.getBooks.bind(this);
		this.onBookDelete = this.onBookDelete.bind(this);
		this.onBookAdd = this.onBookAdd.bind(this);
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
	onBookAdd(title,author) {
		const newBooks = this.state.books
		newBooks.push({title: title, author: author})
		this.setState({books: newBooks})
		}
	// onBookUpdate(title,author) {
	// 	const updatedBooks = this.state.books.filter((book,index) => {
	// 		if (book.title !== title && book.author!== author)
	// 			return true	
	// 		else
	// 			return false
	// 		})
	// 	this.setState({books: updatedBooks})
		// }
	
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
			liTags.push(<li>{book.title} - {book.author} <TrashButton title = {book.title} author = {book.author} onBookDelete = {this.onBookDelete} /><UpdateButton/></li>);

			// Add back into liTag once complete
			// <UpdateButton title = {book.title} author = {book.author} onBookUpdate = {this.onBookDelete} />
		});

		return(
			<div>
				<h2>User's Books</h2>
				<div>
					<ul>{liTags}</ul>
				</div>
				<div>
				<AddBook books={this.state.books} onBookAdd={this.onBookAdd}/>
				</div>
			</div>
			// switch to map and have the list iterated as new book components
			// <div>
			// 	{props.books.map((book.title, book.author) => (
			// 	<Book key={book.title} title={book.title} author={book.author} />
			// 	)}
			// </div>
			
		)
	}
}

export default BookList;