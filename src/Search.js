import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends React.Component {
  state = {
    term: '',
    newBooks: []
  };

  onInputChange = (event) => {
    const query = event.target.value;
    this.setState({ term: query });
    if (query) {
      BooksAPI.search(query).then(books =>
        this.setState({ newBooks: books }));
    }
    else {
      this.setState({ newBooks: [] });
    }
  };


  render() {
    const { books, shelfChanger } = this.props;
    const { term, newBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

            <input
              type="text"
              placeholder="Search by title or author"
              value={term}
              onChange={this.onInputChange}
            />

          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 ? (
            <ol className="books-grid">
              {
                newBooks.map(book =>
                  <li>
                    <Book book={book} shelfChanger={shelfChanger} books={books}/>
                  </li>)
              }
            </ol>
          ) :
            <h3>No Books Matching Search Found
              <p> The search is limited to a particular set of search terms.
                  You can find these search terms here:
                  <a href="https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md" target ="_blank"> Possible Search Terms </a></p>
              </h3>}
        </div>
      </div>
    );
  }
}
export default Search;