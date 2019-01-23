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
        <div>
          <h2>Add book info!</h2>
          <form onSubmit={this.handleSelectionChange}>
            <label>
              Select Book Genre(s)
              <FilteredMultiSelect
                onChange={this.selectedGenres}
                options={this.state.genres}
                selectedOptions={this.selectedGenres}
              />
            </label>
            <button
              type="button"
              onClick={() => this.handleSelectionChange()}
            />
          </form>
        </div>
        <div>
          <form>
            <label>
              Start date:
              <input type="date" name="start" />
            </label>
            <input className="btn" type="submit" value="Submit" />
          </form>
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
