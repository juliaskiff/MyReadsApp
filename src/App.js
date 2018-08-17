import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'

import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

import './App.css'

class App extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  // Get books list via API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //Change the bookshelf
  changeBookShelf = (book, newShelf) => {
    // Update the database     
    BooksAPI.update(book, newShelf)

    // Update the state
      .then(() => {
        BooksAPI.getAll().then((books) => {
          this.setState({
            books
          })
        })
      }) 
  }


  // Get search results via API
  search = (searchQuery) => {

    // if the search input is empty
    if (searchQuery === '') {
      this.setState(() => {
       //console.log('Search input is empty');
        return {
          searchResults: []
        }
      })
    }

    // if the search input is not empty
    else {

      // Search the API 
      BooksAPI.search(searchQuery).then(searchResults => {
          return searchResults
      })
      // 
        .then(searchResults => {

          let queryValid = Object.entries(searchResults)[0][0] === 'error' ? false : true

          if(!queryValid) {
              console.log("Invalid Search Paramters")
          }

          if(queryValid) {

            //Match search results with books on home page
            let queryResults = searchResults.map(book => book.id)
            let bookRequests = []

            queryResults.forEach(function (book) {
              bookRequests.push(BooksAPI.get(book))
            })

            return Promise.all(bookRequests)
              .then(newQueryResults => {
                ///Return the new ResultSet Object
                return newQueryResults
              })
          }

          else {
            return searchResults = []
          }

      })

        // Set the state to see updates
        .then(searchResults => {
          this.setState(state => ({
            searchResults
          }))
        })
    }
  }

  render() {
    return (
      <div>

        <Route exact path = '/' render={() => (
          <ListBooks
            books={this.state.books}
            changeBookShelf = { this.changeBookShelf }
          />
        )} />

        <Route path = '/search' render={({ history }) => (
          <SearchBooks 
            books = { this.state.books }
            searchResults = { this.state.searchResults }
            changeBookShelf = { this.changeBookShelf }
            search = { this.search }
          />
        )} />

      </div>
    )
  }
}

export default App
