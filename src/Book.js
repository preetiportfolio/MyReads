import React from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends React.Component {


 render() {
   console.log(this.props);
     const {book, onShelfChangerUpdate} = this.props;
     return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.smallThumbnail+`)`}}></div>
          <ShelfChanger book={book} onShelfChangerUpdate={onShelfChangerUpdate} {...this.props}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
     )
 }
}

export default Book;
