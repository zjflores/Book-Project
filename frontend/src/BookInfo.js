import React, { Component } from 'react'
import FilteredMultiSelect from 'react-filtered-multiselect'

class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selectedGenres: [],
      startDate: '',
      endDate: '',
    }
    this.getGenres = this.getGenres.bind(this)
    this.handleSelectionChange = this.handleSelectionChange.bind(this)
  }
  handleSelectionChange = selectedGenres => {
    this.setState({ selectedGenres })
  }

  getGenres() {
    fetch('http://localhost:5000/get-genres', {
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
        this.setState({ genres: data })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getGenres()
  }

  render() {
    return (
      <div>
        <h2>Add book info!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Book Genre(s)
            <FilteredMultiSelect
              onSelectionChange={this.selectedGenres}
              options={this.state.genres}
            />
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
