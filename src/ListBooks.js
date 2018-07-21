import React from 'react';
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

class ListBooks extends React.Component {

	render() {
	
	    return (
	        <div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content"> 
                    <BookShelf
                        books={this.props.books}
                        changeBookShelf = {this.props.changeBookShelf}
                    />
	            </div>
	            <div className="open-search">
                   <Link to='/search' className='add-contact'> Add a Book</Link>
                </div>
	        </div> 
	    )
  	}
}

export default ListBooks