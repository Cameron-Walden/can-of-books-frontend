import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Books from './Books.js';
import CreateBook from './CreateBook';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      books: null,
      email: '',
    }
  }

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks(title, email) {
    let API = process.env.REACT_APP_SERVER;
    // console.log(this.state.searchQuery, '<---- FETCH BOOKS TITLE LOG ---<<<')
    console.log(API, '<---- API LOG ---<<<');
    try {
      const bookResponse = await axios.get(API, {params: {title: title, email: email}});
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
    const email = this.state.email;
    console.log(title, '<---- HANDLE TITLE SUBMIT LOG ---<<<');
    this.fetchBooks(title, email);
  }

  changeHandler = (event) => {
    this.setState({searchQuery: event.target.value});
   }

  emailHandler = (event) => {
    this.setState({email: event.target.value})
  }

   handleCreate = async (bookInfo) => {
    const newBookResponse = await axios.post(process.env.REACT_APP_SERVER, bookInfo);
    console.log(newBookResponse, '<---- NEW BOOK RESPONSE ---<<<')
    this.fetchBooks();
  };

  render() {
    return (
      <>
        <input onChange={this.changeHandler} placeholder="search books by title" rounded="true" fluid="true" ></input>
        <input onChange={this.emailHandler} placeholder="search books by email" rounded="true" fluid="true" ></input>
        <h6>leave <em>both</em> fields blank to see all books!</h6>
        <Button onClick={this.handleTitleSubmit} variant="warning">Fetch Book!</Button>
        <CreateBook onCreate={this.handleCreate}/>
        {this.state.books &&
          <Books bookArray={this.state.books}/>
        }
      {this.state.error && <h3>This Book Collection is Empty</h3>}
      </>
    )
  }
}

export default BestBooks;