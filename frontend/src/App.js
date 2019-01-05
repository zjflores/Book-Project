import React from 'react';
import './App.css';
import Home from './Home';
import AddBook from './AddBook';
import BookList from './BookList';
// import TrashButton from '.TrashButton';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      books : [
        {title: 'Curious George',
        author: 'HA Ray'},
        {title: 'Where The Wild Things Are',
        author: 'Maurice Sendak'}
      ]
    };
    this.addBook = this.addBook.bind(this);

  }
  
  addBook(title, author) {
    let newBooks = this.state.books

    newBooks.push({title: title, author: author})
    this.setState({books : newBooks})
  }
  // deleteBook(title, author) {
  //   let removedBooks = this.state.remove
  //   removedBooks.push({title: title, author: author})
  // }
    
  // }
   render(){
    return (
      <div className="App">
        <Home/>
        <AddBook onAddBook={this.addBook}/>
        <BookList books={this.state.books} />
        {/* <TrashButton remove={this.state.remove} /> */}
      </div>
    );
  };
}

export default App;