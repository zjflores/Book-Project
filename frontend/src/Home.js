import React, { Component } from 'react'
import NavBar from './NavBar'

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
      <div className="Home">
        <header>
          <NavBar />
          <img
            src="https://assets.atlasobscura.com/article_images/54798/image.jpg"
            className="Library"
            alt="Library"
          />
          <p>{this.state.quote}</p>
        </header>
      </div>
    )
  }
}

export default Home
