import React from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends React.Component {
 
 render() {
     const {book, books, shelfChanger} = this.props;
     return (
       <li>
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.smallThumbnail+`)`}}></div>
          <ShelfChanger book={book} books={books} shelfChanger={shelfChanger}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
      </li>
     )
 }
}

export default Book;
