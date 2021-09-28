import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Header extends React.Component () {

  changeHandler = (event) => {
    this.setState({searchQuery: event.target.value});
   }

  render() {
    return (
      <>
      <h3>placeholder</h3>
      </>
    );
  }
}

export default Header;