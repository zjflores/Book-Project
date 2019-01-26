import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class UserBooks extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.id)

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
        id: this.props.match.params.id,
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
        <h2>User {this.props.match.params.id}'s Books</h2>
        <div>
          {this.state.books.map(book => {
            return (
              <div>
                <NavLink to={`/book/${this.props.match.params.id}`}>
                  {book.title} - {book.author}
                </NavLink>
              </div>
            )
          })}
          <br />
        </div>
      </div>
    )
  }
}

export default UserBooks
