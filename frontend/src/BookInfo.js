import React, { Component } from 'react'

class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genre: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
    }
  }
  render() {
    return (
      <div>
        <h2>Add book info!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Genre
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <br />
          <label>
            Start Month
            <input
              type="text"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </label>
          <label>
            Start Year
            <input
              type="text"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
          </label>
          <br />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default BookInfo
