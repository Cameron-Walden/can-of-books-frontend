import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      books: null,
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  async fetchBooks(title) {
    let API = `${SERVER}/books`;
    console.log(title, '<---- FETCH BOOKS TITLE LOG ---<<<')


    if(title) {
      API += `?title=${title}`;
    }
    try {
      const bookResponse = await axios.get(API);

      // console.log(bookResponse, '<---- FETCH BOOKS API LOG TWO ---<<<')

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
    const title = event.target.value;
    // console.log(title, '<---- HANDLE TITLE SUBMIT LOG ---<<<');
    this.fetchBooks(title);
  }

  // changeHandler = (event) => {
  //   this.setState({searchQuery: event.target.value});
  //  }

  render() {
    return (
      <>
      <Container>
        <input onChange={this.handleTitleSubmit} placeholder="search for a book"></input>
        <Button onClick={this.handleTitleSubmit} variant="warning">Fetch Book!</Button>
        {this.state.books &&
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        }
      </Container>

        {this.state.error && <h3>This Book Collection is Empty</h3>}
      </>
    )
  }
}

export default BestBooks;