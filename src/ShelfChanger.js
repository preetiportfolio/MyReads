import React from 'react'

class ShelfChanger extends React.Component {
    onShelfUpdate = (book, shelf) => {
        this.props.onShelfChangerUpdate(book, shelf);
     }
     
     render() {
         return (
            <div className="book-shelf-changer">
            <select onChange = {(e) => this.onShelfUpdate(this.props.book, e.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
         )
     }
}

export default ShelfChanger;