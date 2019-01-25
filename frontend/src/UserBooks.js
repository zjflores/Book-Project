import React, { Component } from 'react'
// import TrashButton from './TrashButton'
// import './Book.css'
import { NavLink } from 'react-router-dom'

class Book extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.userId)
    this.state = {
      books: [],
    }
    this.getBooks = this.getBooks.bind(this)
  }

  getBooks() {
    fetch('http://localhost:5000/get-user-books', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.userId,
      }),
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
        <div>
          <NavLink to={`/book/${this.props.bookId}`}>
            {this.props.title} - {this.props.author}
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Book
