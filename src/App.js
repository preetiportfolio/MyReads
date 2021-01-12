import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import BookList from './BookList';

class BooksApp extends React.Component {
  state = {  
    books: []
  }
  componentDidMount() {

    BooksAPI.getAll().then(response => {
      this.setState({ books: response });
    });

  }

  shelfChanger = (book, shelf) => {

    BooksAPI.update(book, shelf).then(response => {
      // set shelf for new or updated book
      book.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(bk => bk.id !== book.id)
          // add updated book to array
          .concat(book)
      }));
    });
  }


  render = () => {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path='/Search' render={() => (
          <Search books={books} shelfChanger={this.shelfChanger} />
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList books={books} shelfChanger={this.shelfChanger} />
            <div className="open-search">
              <Link to='/Search'><button>Add a book</button></Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
