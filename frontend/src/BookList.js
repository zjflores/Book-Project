import React from 'react'
import AddBook from './AddBook'
import Book from './Book'

class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
    this.getBooks = this.getBooks.bind(this)
    this.onBookDelete = this.onBookDelete.bind(this)
    this.onBookAdd = this.onBookAdd.bind(this)
    this.onBookUpdate = this.onBookUpdate.bind(this)
  }

  onBookDelete(bookId) {
    const updatedBooks = this.state.books.filter(book => {
      return book.id !== bookId
    })
    this.setState({ books: updatedBooks })
  }

  onBookAdd(title, author, bookId) {
    const newBooks = this.state.books
    newBooks.push({ title: title, author: author, id: bookId })
    this.setState({ books: newBooks })
  }

  onBookUpdate(bookId, newTitle, newAuthor) {
    // Object.assign({}, this.state.books)
    const updatedBooks = this.state.books.filter(book => {
      return book.id !== bookId
    })
    updatedBooks.push({ title: newTitle, author: newAuthor, id: bookId })
    this.setState({ books: updatedBooks })
  }

  getBooks() {
    fetch('http://localhost:5000/get-your-books', {
      method: 'GET',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ books: data })
      })
      .catch(error => console.error(error))
  }
  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div>
        <h2>Your Books</h2>
        <div>
          {this.state.books.map(book => {
            return (
              <Book
                key={book.id}
                title={book.title}
                author={book.author}
                bookId={book.id}
                onBookDelete={this.onBookDelete}
                onBookUpdate={this.onBookUpdate}
              />
            )
          })}
        </div>
        <div>
          <AddBook onBookAdd={this.onBookAdd} />
        </div>
      </div>
    )
  }
}

export default BookList
