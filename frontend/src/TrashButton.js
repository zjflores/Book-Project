import React, { Component } from 'react'

class TrashButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDeleteBook = this.handleDeleteBook.bind(this)
  }

  handleDeleteBook(event) {
    event.preventDefault()
    fetch('http://localhost:5000/delete-book', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.bookId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.props.onBookDelete(this.props.bookId)
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <button className="trashButton btn" onClick={this.handleDeleteBook}>
        Delete
      </button>
    )
  }
}

export default TrashButton
