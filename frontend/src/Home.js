// create a "class" constructor
// within constructor create state that holds empty quote string
// create lifecycle with didmount
// within there make fetch request
// fetch('http://localhost:5000').then(res => res.json()).then(data => connsole.log(data))
// update state with data
// in render make sure to use quotes state not edit src app

import React, { Component } from 'react';

class Home extends Component {
	constructor(props){
	  super(props);
	  this.state = {quote: ""};
	}
  
  getQuote = () => {
	fetch('http://localhost:5000')
	  .then(response => response.json())
	  .then(data => this.setState({quote: data.quote}) )
  }
  
  componentDidMount() {
	this.getQuote()
  }
	
  
	render() {
	  return (
		<div className="Home">
		  <header className="Home">
			<img src="https://assets.atlasobscura.com/article_images/54798/image.jpg" className="Library" alt="Library" />
			<p>
			  {this.state.quote}
			</p>
		  </header>
		</div>
	  );
	}
  }
  
  export default Home;