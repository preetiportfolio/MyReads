import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {

  render() {
    const { books, shelfChanger } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            shelfChanger={shelfChanger}
          />
        ))}
      </ol>
    );
  }


}

export default BookShelf;