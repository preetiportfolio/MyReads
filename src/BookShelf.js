import React from 'react';
import Book from './Book';

const BookShelf = ({ books, shelfChanger }) => (
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

export default BookShelf;