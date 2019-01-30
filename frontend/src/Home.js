import React, { Component } from 'react'
import NavBar from './NavBar'
import './Base.css'
import { Container } from 'react-bootstrap'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { quote: '' }
  }

  getQuote = () => {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => this.setState({ quote: data.quote }))
  }

  componentDidMount() {
    this.getQuote()
  }

  render() {
    return (
      <Container className="Home container-fluid">
        <header>
          <NavBar isLoggedIn={this.props.isLoggedIn} />
          <div className="Cover">
            <h1 className="Title">Build Your Own Book Club</h1>
            {/* <img
              src="https://assets.atlasobscura.com/article_images/54798/image.jpg"
              className="Library"
              alt="Library"
            /> */}
            {/* <img
              src="https://lh5.googleusercontent.com/proxy/5nNPUjX8L-Nn4fWJ4tPM5ES2Gk5R_YpD6oh0A5IL1CklpM9ZzOmY3e9BHWaE5NtpbL00UxSsuApQ5J_skQ6nHrHw6WpGnr9V4JAPmn1PzvxW1OUiRR8P_PNjGon7taEArOg0Vh45yAmwEUeCrA3bEgOKGmtkeopEdng=w5000-h5000"
              className="book-img"
              alt="books"
            /> */}
            <p>{this.state.quote}</p>
          </div>
        </header>
      </Container>
    )
  }
}

export default Home
