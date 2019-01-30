import React, { Component } from 'react'
import NavBar from './NavBar'
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
      <div className="Home container-fluid">
        <header>
          <NavBar isLoggedIn={this.props.isLoggedIn} />
          <div>
            <img
              src="https://assets.atlasobscura.com/article_images/54798/image.jpg"
              className="Library"
              alt="Library"
            />
          </div>
          <p>{this.state.quote}</p>
        </header>
      </div>
    )
  }
}

export default Home
