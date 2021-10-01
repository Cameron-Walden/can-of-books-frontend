import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LogoutButton from './LogoutButton.js';

class Header extends React.Component {
  render() {
    const logout = this.props.logout;
    return (
      <>
      <LogoutButton logout={logout} />
      </>
    )
  }
}

export default Header;