import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap/Carousel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  async fetchBooks(title = null) {
    const API = `${SERVER}/books`;

    if(title) {
      API += `?title=${title}`;
    }
    try {
      const bookResponse = await axios.get(API);
      this.setState({
        books: bookResponse.data
      });
    } catch (error){
      console.log(error, '<---- FETCHBOOKS ERROR LOG ---<<<');
    }
  }

  handleTitleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    console.log({title}, '<---- HANDLE TITLE SUBMIT LOG ---<<<');
    this.fetchBooks(title);
  }

  render() {
    return (
      <Container>
        <Router>
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
  
        {this.state.error && <h3>This Book Collection is Empty</h3>}
        </Router>
      </Container>
    )
  }
}

export default BestBooks;