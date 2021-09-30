import React from 'react';
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import BurnBook from './BurnBook';



class Books extends React.Component {
    handleBurn = async (book) => {
        console.log(book, '<---- BOOK TO BE BURNED ---<<<')
        await axios.delete(process.env.REACT_APP_SERVER, book)
      }

    render(){
        const books = this.props.bookArray
        return(
            <>
            {books.map((book, index) => (
                <Container key = {index} rounded="true" fluid = "true">
                <h1>{book.title}</h1>
            <p>{book.description}</p>
            <BurnBook onDelete={this.handleBurn} book={book._id} />
            </Container>
            ))}
            </>
        )
    }
}
export default Books;