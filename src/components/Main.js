import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BestBooks from "./BestBooks";

class Main extends React.Component () {
  render() {
    return (
      <>
      <input onChange={this.changeHandler} placeholder="search for a book"></input>
      <Button onClick={this.fetchBooks} variant="warning">Explore!</Button>
      <BestBooks />
      </>
    );
  }
}

export default Main;