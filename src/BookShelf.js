import React from 'react';

import Book from './Book'

class BookShelf extends React.Component {

	// Define which bookshelf the book belongs to 
    defineBookShelf(bookShelf) {

        let bookshelfType = 'Currently Reading'
        
        bookShelf.forEach(book => {

            if (book.shelf === "wantToRead") {
                return bookshelfType = "Want to Read"
            }
            else if (book.shelf === "read") {
                return bookshelfType = "Read"
            }
        })
        return bookshelfType
    }


	render(){
		const { books } = this.props;
		// Filtering books based on the bookeshelf type
    	let currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading");
    	let wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    	let readBooks = books.filter(book => book.shelf === "read");

		const allBookShelves = [currentlyReadingBooks, wantToReadBooks, readBooks];

		return (
			<div>
	            { allBookShelves.map((book) => (
                    <div key={ Math.random() + book.length } className="bookshelf" >
                        <h2 className="bookshelf-title">{this.defineBookShelf(book)}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {book.map((book) => (
                                    <Book
                                        key={book.id}
                                        book={book}
                                        books={this.props.books}
                                        changeBookShelf= {this.props.changeBookShelf}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}  
	        </div>
		)
	}
}

export default BookShelf 




