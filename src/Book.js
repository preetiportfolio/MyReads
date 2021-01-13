import React from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';
import noImage from './images/no-image.png'

class Book extends React.Component {

  render() {
    const { book, books, shelfChanger } = this.props;

    // add alternate for undefined images and title
    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noImage;
    const title = book.title ? book.title : 'No title available';
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
            <ShelfChanger book={book} books={books} shelfChanger={shelfChanger} />
          </div>
          <div className="book-title">{title}</div>
          {
            book.authors && book.authors.map((author, index) => (
              <div className="book-authors" key={index}>{author}</div>
            ))
          }
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired
};


export default Book;
