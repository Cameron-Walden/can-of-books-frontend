import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';



class Books extends React.Component {
    render(){
        const books = this.props.bookArray
        console.log(books[0].title, '<----------checking those books')
        // console.log(this.props,'<------THIS DOT PROPS')
        return(
            <>
            {books.map((book, index) => (
                <Container key = {index} rounded="true" fluid = "true">
                <h1>{book.title}</h1>
            <p>{book.description}</p>
            </Container>
            ))}
            </>
        )
    }
}
export default Books;