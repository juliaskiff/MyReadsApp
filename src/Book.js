import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
    };

	render(){
		const { book } = this.props;
		return(
            
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128, height: 193, backgroundImage: `url(${ book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : '' })`
                                    }}>
                                </div>
                                <BookShelfChanger
                                    book={book}
                                    books={this.props.books}
                                    changeBookShelf= {this.props.changeBookShelf}
                                />
                            </div>
                            <div className="book-title">{ book.title }</div>
                            <div className="book-authors">{ book.authors }</div>
                        </div>
                    </li>
                
		)
	}
}
export default Book