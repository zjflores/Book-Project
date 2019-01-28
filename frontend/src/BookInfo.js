import React, { Component } from 'react'
import moment from 'moment'

class BookInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      name: '',
      genres: [],
      startDate: '',
      endDate: '',
      authorized: false,
      readers: [],
    }
    this.getTitle = this.getTitle.bind(this)
    this.getName = this.getName.bind(this)
    this.getBookGenres = this.getBookGenres.bind(this)
    this.getStartDate = this.getStartDate.bind(this)
    this.getEndDate = this.getEndDate.bind(this)
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

  getBookGenres() {
    fetch('http://localhost:5000/get-bookgenres', {
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
        this.setState({ genres: data })
      })
      .catch(error => console.error(error))
  }
  getStartDate() {
    fetch('http://localhost:5000/get-start-date', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.id,
        book_id: this.props.match.params.bookId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data = moment(data).format('MMMM Do gggg')
        this.setState({ startDate: data })
      })
      .catch(error => console.error(error))
  }
  getEndDate() {
    fetch('http://localhost:5000/get-end-date', {
      method: 'POST',
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        id: this.props.match.params.id,
        book_id: this.props.match.params.bookId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data = moment(data).format('MMMM Do gggg')
        this.setState({ endDate: data })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getBookGenres()
    this.getTitle()
    this.getName()
    this.getStartDate()
    this.getEndDate()
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>Genres</h2>
        <div>
          {this.state.genres.map(genre => {
            return <div key={genre.genre}>{genre.genre}</div>
          })}
        </div>
        <h2>{this.state.name} started this book on: </h2>
        {this.state.startDate}
        <h2>{this.state.name} finished this book on:</h2>
        {this.state.endDate}
        <h2>Other User's Reading This Title</h2>
      </div>
    )
  }
}
export default BookInfo
