import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import AddBook from './AddBook';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {  
    myReads: []
  }
  componentDidMount() {

    BooksAPI.getAll().then(response => {
      this.setState({ myReads: response });
    });

  }

  onShelfChangerUpdate = (book, shelf) => {

    BooksAPI.update(book, shelf).then(response => {
      // set shelf for new or updated book
      book.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        myReads: prevState.myReads
          // remove updated book from array
          .filter(bk => bk.id !== book.id)
          // add updated book to array
          .concat(book)
      }));
    });
  }


  render = () => {
    const { myReads } = this.state;

    return (
      <div className="app">
        <Route path='/AddBook' render={() => (
          <AddBook onShelfChangerUpdate={this.onShelfChangerUpdate} />
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelf title="currentlyReading" myReads={myReads} onShelfChangerUpdate={this.onShelfChangerUpdate} />
            <BookShelf title="wantToRead" myReads={myReads} onShelfChangerUpdate={this.onShelfChangerUpdate} />
            <BookShelf title="read" myReads={myReads} onShelfChangerUpdate={this.onShelfChangerUpdate} />
            <div className="open-search">
              <Link to='/AddBook'><button>Add a book</button></Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
