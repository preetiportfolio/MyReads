import React from 'react';
import Book from './Book';

class BookShelf extends React.Component { 
    
getTitle = (title) => {
  switch(title) {
    case "currentlyReading":
      return "Currently Reading";
    case "wantToRead":
      return "Want To Read";
    case "read":
      return "Read";
    default:
      return "";      
      
  }
}
     render() {
         const {title} = this.props;
            
         return (
             <div>
            <h2 className="bookshelf-title">{this.getTitle(title)}</h2>
            {
             this.props.myReads.filter(book => book.shelf === title).map(book => 
                <div className="bookshelf">
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                       <Book book={book} onShelfChangerUpdate={this.props.onShelfChangerUpdate} {...this.props}/> 
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