import React from 'react';


class AddBook extends React.Component {
    state = { term: ''};

    onInputChange = (event) => {
      this.setState({ term: event.target.value })
    };
    onFormSubmit = (event) => {
        event.preventDefault();
       
        // TODO : MAkeSure we call callback from Parent Component
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form onSubmit={this.onFormSubmit}>
                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  value={this.state.term} 
                  onChange={this.onInputChange}
                />
                </form>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
    }
}
export default AddBook;