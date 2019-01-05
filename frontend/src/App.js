import React from 'react';
import './App.css';
import Home from './Home';
import AddBook from './AddBook';
import BookList from './BookList';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      books : [
        {Title: 'Curious George',
        Author: 'HA Ray'},
        {Title: 'Where The Wild Things Are',
        Author: 'Maurice Sendak'}
      ]
    };
    this.addBook = this.addBook.bind(this);

  }
  
  addBook(title, author) {
    let newBooks = this.state.books

    newBooks.push({Title: title, Author: author})

    this.setState({books : newBooks})
    
  }
   render(){
    return (
      <div className="App">
        <Home/>
        <AddBook onAddBook={this.addBook}/>
        <BookList books={this.state.books} />
      </div>
    );
  };
}

export default App;