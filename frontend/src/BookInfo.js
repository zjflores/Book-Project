import React, { Component } from 'react'

class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genre: '',
      startDate: '',
      endDate: '',
    }
  }
  render() {
    return (
      <div>
        <h2>Add book info!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Genre
            <input type="checkbox" />
          </label>
          <br />
          <label>
            Start date:
            <input type="date" name="start" />
          </label>
          <label>
            End date
            <input type="date" name="end" />
          </label>
          <br />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default BookInfo
