import React from 'react'

class ShelfChanger extends React.Component {
    onShelfUpdate = (book, shelf) => {
        this.props.onShelfChangerUpdate(book, shelf);
     }
     
     render() {
      const Options = ["currentlyReading", "wantToRead", "read"];
      const { book } = this.props;
      return (
            <div className="book-shelf-changer">
            <select onChange = {(e) => this.onShelfUpdate(book, e.target.value)}>  
               {Options.map(text => <option value={text} selected={book.shelf === text}>{text}</option>)}
            </select>
          </div>
         )
     }
}

export default ShelfChanger;