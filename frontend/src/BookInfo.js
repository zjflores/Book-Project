import React, { Component } from 'react'
import FilteredMultiSelect from 'react-filtered-multiselect'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from 'react-router-dom'

class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // bookId: match.params.bookId,
      genres: [],
      selectedGenres: [],
      startDate: '',
      endDate: '',
    }
    this.getGenres = this.getGenres.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleDeselect = this.handleDeselect.bind(this)
    this.handleSubmitGenres = this.handleSubmitGenres.bind(this)
  }
  handleSelect(selectedGenres) {
    this.setState({ selectedGenres })
  }

  handleDeselect(deselectedGenres) {
    // Object.assign({}, this.state.selectedGenres)
    const genresSelected = this.state.selectedGenres.filter(genre => {
      return genre.text !== genre
    })
    this.setState({ selectedGenres: genresSelected })
  }

  handleSubmitGenres() {
    fetch('http://localhost:5000/set-genres', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.bookId,
        genres: this.selectedGenres,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
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
        <div>
          <form onSubmit={this.handleSelect}>
            <label>
              Select Book Genre(s)
              <FilteredMultiSelect
                buttonText="Add"
                onChange={this.handleSelect}
                options={this.state.genres}
                selectedOptions={this.selectedGenres}
              />
            </label>
            <label>
              <FilteredMultiSelect
                buttonText="Remove"
                onChange={this.handleDeselect}
                options={this.state.selectedGenres}
                showFilter={false}
              />
            </label>
            <button type="button" onClick={this.handleSubmitGenres()}>
              Submit
            </button>
          </form>
        </div>
        <br />
        <div>
          <form>
            <label>
              Start date:
              <input type="date" name="start" />
            </label>
            <input className="btn" type="submit" value="Submit" />
          </form>
          <br />
          <form>
            <label>
              End date
              <input type="date" name="end" />
            </label>
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
export default BookInfo
