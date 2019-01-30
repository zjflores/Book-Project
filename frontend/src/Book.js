import React, { Component } from 'react'
import TrashButton from './TrashButton'
import './Book.css'
import { NavLink } from 'react-router-dom'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookId: this.props.bookId,
      updateClicked: false,
      saveClicked: false,
      newTitle: this.props.title,
      newAuthor: this.props.author,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleUpdateBook = this.handleUpdateBook.bind(this)
    this.handleSaveUpdate = this.handleSaveUpdate.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ newTitle: event.target.value })
  }

  handleAuthorChange(event) {
    this.setState({ newAuthor: event.target.value })
  }

  handleUpdateBook(event) {
    event.preventDefault()
    this.setState({ updateClicked: true })
  }

  handleSaveUpdate(event) {
    event.preventDefault()
    fetch('http://localhost:5000/update-book', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.bookId,
        newTitle: this.state.newTitle,
        newAuthor: this.state.newAuthor,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.props.onBookUpdate(
          this.props.bookId,
          this.state.newTitle,
          this.state.newAuthor
        )
        this.setState({ updateClicked: false })
      })
      .catch(error => console.error(error))
  }

  render() {
    if (this.state.updateClicked) {
      return (
        <div>
          <form onSubmit={this.onBookUpdate}>
            <label>
              <input
                type="text"
                value={this.state.newTitle}
                onChange={this.handleTitleChange}
              />
            </label>
            <label>
              <input
                type="text"
                value={this.state.newAuthor}
                onChange={this.handleAuthorChange}
              />
            </label>
          </form>
          <button onClick={this.handleSaveUpdate}>Save</button>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <NavLink to={`user/${this.props.userId}/book/${this.props.bookId}`}>
              {this.props.title} - {this.props.author}
            </NavLink>
            <TrashButton
              bookId={this.props.bookId}
              onBookDelete={this.props.onBookDelete}
            />
            <button
              className="updateButton btn"
              onClick={this.handleUpdateBook}
            >
              <i className="fas fa-pencil-alt" />
            </button>
          </div>
        </div>
      )
    }
  }
}

export default Book
