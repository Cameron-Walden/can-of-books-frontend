import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import BurnBook from './BurnBook';

class Books extends React.Component {
    handleBurn = async (book) => {
        console.log(process.env.REACT_APP_SERVER + '/' + book.id, '<---- WHAT CLIENTS SENDS TO SERVER ---<<<')
        await axios.delete(process.env.REACT_APP_SERVER + '/' + book.id)
    }

    render() {
        const books = this.props.bookArray
        return (
            <>
                <Carousel>
                    {books.map((book, index) => (
                        <Carousel.Item key={index} >
                            <img
                                rounded="true"
                                fluid="true"
                                className="d-block w-100"
                                src="https://image.shutterstock.com/image-photo/blurred-bookshelf-many-old-books-600w-1577682832.jpg"
                                alt="A slide" width="50%" 
                            />
                            <Carousel.Caption>
                                <h1>{book.title}</h1>
                                <p>{book.description}</p>
                                <BurnBook onDelete={this.handleBurn} book={book._id} />
                            </Carousel.Caption>
                        </Carousel.Item>))}
                </Carousel>
            </>
        )
    }
}
export default Books;