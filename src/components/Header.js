import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LogoutButton from './login/LoginButton.js';

class Header extends React.Component () {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLogOutButton = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    return (
      <>
      {this.state.isLoggedIn &&
      <LogoutButton logout={this.handleLogOutButton} variant="dark" type="submit" />
      }
      </>
    )
  }
}

export default Header;