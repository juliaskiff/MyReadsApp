import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
    	changeBookShelf:  PropTypes.func.isRequired
  	};
	render() {
		const { book,  changeBookShelf } = this.props


		return (
			<div className="book-shelf-changer">
                <select id="custom-select-book" value={ book.shelf } onChange={(event) => changeBookShelf(book, event.target.value)}>
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
export default BookShelfChanger