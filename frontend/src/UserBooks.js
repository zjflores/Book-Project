import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class UserBooks extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.id)
    console.log(
      JSON.stringify({
        id: this.props.match.params.id,
      })
    )

    this.state = {
      books: [],
      name: '',
    }
    this.getBooks = this.getBooks.bind(this)
    this.getName = this.getName.bind(this)
  }

  getName() {
    fetch('http://localhost:5000/get-name', {
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
        this.setState({ name: data })
      })
      .catch(error => console.error(error))
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
    this.getName()
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}'s Shelf</h2>
        <div>
          {this.state.books.map(book => {
            return (
              <div key={book.id}>
                <NavLink
                  to={`/user/${this.props.match.params.id}/book/${book.id}`}
                >
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
