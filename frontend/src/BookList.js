import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

class BookList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			books : []
		};
		this.getBooks = this.getBooks.bind(this);
		this.onBookDelete = this.onBookDelete.bind(this);
		this.onBookAdd = this.onBookAdd.bind(this);
		this.onBookUpdate=this.onBookUpdate.bind(this);
	}

	onBookDelete(title,author) {
		const newBooks = this.state.books.filter((book) => {
			if (book.title !== title && book.author!== author)
				return true	
			else
				return false
			})
		this.setState({books: newBooks})
		// wait for server return when successful a list of books
	}

	onBookAdd(title,author) {
		const newBooks = this.state.books
		newBooks.push({title: title, author: author})
		this.setState({books: newBooks})
	}

	onBookUpdate(title,author,newTitle,newAuthor) {
		// Object.assign({}, this.state.books)
		const updatedBooks = this.state.books.filter((book) => {
			return book.title !== title && book.author!== author
			})
		updatedBooks.push({title: newTitle, author: newAuthor})
		this.setState({books: updatedBooks})
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
		.then(data => {
			console.log(data);
			this.setState({books: data})
		})
		.catch(error => console.error(error));
	}
	componentDidMount() {this.getBooks()}
	
	render() {
		return(
			<div>
				<h2>User's Books</h2>
				<div>
					{this.state.books.map(book => 
						<Book 
							key={book.title} 
							title={book.title} 
							author={book.author} 
							onBookDelete = {this.onBookDelete} 
							onBookUpdate={this.onBookUpdate} 
						/>
					)}
				</div>
				<div>
					<AddBook onBookAdd={this.onBookAdd}/>
				</div>
			</div>
			
		)
	}
}

export default BookList;