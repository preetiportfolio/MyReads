import React from 'react'

class ShelfChanger extends React.Component {
    onShelfUpdate = (book, shelf) => {
        this.props.shelfChanger(book, shelf);
    }

    render() {
        const { book, books } = this.props;
        let currentShelf = "none";

        // if book is in current list, set current shelf to book.shelf
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }
        return (
            <div className="book-shelf-changer">
                <select onChange = {(e) => this.onShelfUpdate(book, e.target.value)} defaultValue={currentShelf}>
                    <option value="none" disabled>
                        Move to... </option>
                    <option value="currentlyReading" selected={currentShelf === "currentlyReading"}>Currently Reading</option>
                    <option value="wantToRead" selected={currentShelf === "wantToRead"}>Want to Read</option>
                    <option value="read" selected={currentShelf === "read"}>Read</option>
                    <option value="none" selected={currentShelf === "none"}>None</option>
                </select>
            </div>
        );
    }
}

export default ShelfChanger;