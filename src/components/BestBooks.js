import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Books from './Books.js'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';

// const SERVER = 'http://localhost:3001/books';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      books: null,
      // user: null,
    }
  }

  // componentDidMount() {
  //   this.fetchBooks();
  // }

  // loginHandler = () => {
  //   this.setState({
  //     user: user,
  //   });
  // }

  // logoutHandler = () => {
  //   this.setState({
  //     user: user,
  //   });
  // }

  async fetchBooks(title) {
    let API = process.env.REACT_APP_SERVER;
    // console.log(this.state.searchQuery, '<---- FETCH BOOKS TITLE LOG ---<<<')
    console.log(API, '<---- API LOG ---<<<');
    try {
      const bookResponse = await axios.get(API, {params: {title: title}});
      // const bookResponse = await axios.get('http://localhost:3001/books', {params: {title: title}});

      console.log(bookResponse, '<---- What is BOOK RESPONSE ---<<<')

      this.setState({
        books: bookResponse.data
      });

      // console.log(books, '<---- BOOKS AFTER SET STATE ---<<<')

    } catch (error){
      console.log(error, '<---- FETCHBOOKS ERROR LOG ---<<<');
    }
  }

  handleTitleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.searchQuery;
    console.log(title, '<---- HANDLE TITLE SUBMIT LOG ---<<<');
    this.fetchBooks(title);
  }

  changeHandler = (event) => {
    this.setState({searchQuery: event.target.value});
   }

  render() {
    return (
      <>
        <input onChange={this.changeHandler} placeholder="search for a book"></input>
        <Button onClick={this.handleTitleSubmit} variant="warning">Fetch Book!</Button>
        {this.state.books &&
          <Books bookArray={this.state.books}/>
        }
      {this.state.error && <h3>This Book Collection is Empty</h3>}
      </>
    )
  }
}

export default BestBooks;