import React from 'react';
import './App.css';
import Home from './Home';
import AddBook from './AddBook';
import BookList from './BookList';
import Login from './Login';
// import TrashButton from '.TrashButton';

class App extends React.Component{
	constructor(props) {
		super(props);
	}
	 render() {
		return (
			<div className="App">
				<Home/>
				<Login />
				<AddBook />
				<BookList />
			</div>
		);
	};
}

export default App;