import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book'

class SearchBooks extends React.Component {
	static propTypes = {
    	searchResults: PropTypes.array.isRequired,
    	search: PropTypes.func.isRequired,
  	};

  	state = {
  		query: ''
  	}

    // update search input
  	updateQuery = (query) => {
  		this.props.search (query.trim());
  		this.setState({ query: query.trim()})
  	}

  	render () {
      const { query } = this.state.query;
  		const { searchResults } = this.props;

  		return(
  			<div className="search-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            	<div className="search-books-bar">
              		<Link 
              			className="close-search" 
              			to='/'>Close
              		</Link>
              		<div className="search-books-input-wrapper">
               	 		<input 
               	 			type="text" 
               	 			placeholder="Search by title or author"
               	 			value={query}
               	 			onChange={(event) => this.updateQuery(event.target.value)}
               	 		/>
              		</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
              			{ searchResults.map(book => 
              				<Book
                        key={book.id}
                        book={book}
                        books={this.props.books}
                        changeBookShelf= {this.props.changeBookShelf}
                      />
                    )}
              		</ol>
            	</div>
          	</div>
        )
  	}
}

export default SearchBooks