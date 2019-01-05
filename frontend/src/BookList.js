import React, { Component } from 'react';

class BookList extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		let liTags = [];

		this.props.books.forEach(book => {
			liTags.push(<li>{book.title}</li>);
			liTags.push(<li>{book.author}</li>)
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