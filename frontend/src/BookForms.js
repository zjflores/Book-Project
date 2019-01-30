import React, { Component } from 'react'
import FilteredMultiSelect from 'react-filtered-multiselect'
import { Col, Row } from 'react-bootstrap'

class BookForms extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params.bookId)
    this.state = {
      genres: [],
      selectedGenres: [],
      startDate: '',
      endDate: '',
      title: '',
    }
    this.getGenres = this.getGenres.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleDeselect = this.handleDeselect.bind(this)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
    this.handleSubmitGenres = this.handleSubmitGenres.bind(this)
    this.handleSubmitStartDate = this.handleSubmitStartDate.bind(this)
    this.handleSubmitEndDate = this.handleSubmitEndDate.bind(this)
    this.getTitle = this.getTitle.bind(this)
  }
  handleSelect(addGenres) {
    const newSelectedGenres = this.state.selectedGenres.concat(addGenres)
    this.setState({ selectedGenres: newSelectedGenres })
  }

  handleDeselect(deselectedGenres) {
    // Object.assign({}, this.state.selectedGenres)
    const genresSelected = this.state.selectedGenres.filter(genre => {
      for (let i = 0; i < deselectedGenres.length; i++) {
        if (deselectedGenres[i].text === genre.text) {
          return false
        }
      }

      return true
    })
    this.setState({ selectedGenres: genresSelected })
  }

  handleStartDateChange(event) {
    this.setState({ startDate: event.target.value })
  }

  handleEndDateChange(event) {
    this.setState({ endDate: event.target.value })
  }

  handleSubmitStartDate(event) {
    event.preventDefault()
    fetch('http://localhost:5000/book/set-start-date', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.bookId,
        start: this.state.startDate,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
  }

  handleSubmitEndDate(event) {
    event.preventDefault()
    fetch('http://localhost:5000/book/set-end-date', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.bookId,
        end: this.state.endDate,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
  }

  handleSubmitGenres(event) {
    event.preventDefault()
    fetch('http://localhost:5000/set-genres', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.bookId,
        genres: this.state.selectedGenres,
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

  getTitle() {
    fetch('http://localhost:5000/get-title', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.bookId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ title: data })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getGenres()
    this.getTitle()
  }

  render() {
    return (
      <div>
        <h2>Add info for {this.state.title}</h2>
        <div>
          <form onSubmit={this.handleSubmitGenres}>
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
            <input type="submit" value="Submit" />
          </form>
        </div>
        <br />
        <Row>
          <Col>
            <form onSubmit={this.handleSubmitStartDate}>
              <label>
                Start date:
                <input
                  type="date"
                  name="start"
                  value={this.state.startDate}
                  onChange={this.handleStartDateChange}
                />
              </label>
              <input className="btn" type="submit" value="Submit" />
            </form>
          </Col>
          <Col>
            <form onSubmit={this.handleSubmitEndDate}>
              <label>
                End date:
                <input
                  type="date"
                  name="end"
                  value={this.state.endDate}
                  onChange={this.handleEndDateChange}
                />
              </label>
              <input className="btn" type="submit" value="Submit" />
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default BookForms
