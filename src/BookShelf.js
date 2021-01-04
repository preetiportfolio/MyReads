import React from 'react';
import ShelfChanger from './ShelfChanger';

class BookShelf extends React.Component {

  onShelfUpdate = (book, shelf) => {
    this.props.onShelfChangerUpdate(book, shelf);
 }
    

     render() {
         const {title} = this.props;
            
         return (
             <div>
            <h2 className="bookshelf-title">{title}</h2>
            {
             this.props.myReads.filter(book => book.shelf === title).map(book => 
                <div className="bookshelf">

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(`+book.imageLinks.smallThumbnail+`)`}}></div>
                            <ShelfChanger book={book} onShelfUpdate={this.onShelfUpdate}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.author}</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
           )}
         </div>
         )
     }


}

export default BookShelf;