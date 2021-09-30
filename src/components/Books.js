import React from 'react';
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import BurnBook from './BurnBook';



class Books extends React.Component {
    handleBurn = async (id, email) => {
        console.log('ID EQUALS --->', id, 'EMAIL EQUALS --->', email)
        // id = this.state.books._id;
        // email = this.state.books.email
        // await axios.delete(process.env.REACT_APP_SERVER, id, email)
      }

    render(){
        const books = this.props.bookArray
        console.log(books[0]._id);
        return(
            <>
            {books.map((book, index) => (
                <Container key = {index} rounded="true" fluid = "true">
                <h1>{book.title}</h1>
            <p>{book.description}</p>
            <BurnBook onDelete={this.handleBurn} bookID={book._id} />
            </Container>
            ))}
            </>
        )
    }
}
export default Books;