import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AddBook from './AddBook';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    myReads: []
  }
componentDidMount() {

  BooksAPI.getAll().then(response => {
    this.setState({myReads: response});
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

  onTermSubmit = async term => {
    const books = await BooksAPI.search(term);
  };

  render = () =>{
   // console.log(this.state.myReads[0].imageLinks.smallThumbnail);
    // console.log(this.state.myReads);
    const {books} = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <AddBook onFormSubmit={this.onTermSubmit} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelf title="currentlyReading" myReads={this.state.myReads} onShelfChangerUpdate={this.onShelfChangerUpdate}/>
            <BookShelf title="wantToRead" myReads={this.state.myReads} onShelfChangerUpdate={this.onShelfChangerUpdate}/>
            <BookShelf title="read" myReads={this.state.myReads} onShelfChangerUpdate={this.onShelfChangerUpdate} />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
