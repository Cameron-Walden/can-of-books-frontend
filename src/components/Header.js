import React from 'react';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends React.Component {
  render() {
    if (this.props.user) {
    const email = this.props.user.email;
    const username = this.props.user.username;
    const logout = this.props.logout;

    return (
      <>
      <Router>
      <Navbar>
        <Container>
          <Link to="/">Home</Link>
          <Link to="/Profile">Profile</Link>
        </Container>
      </Navbar>
      <LogoutButton logout={logout} />
        <Route path="/Profile">
          <Profile email={email} username={username} />
        </Route>
      </Router>
      </>
    )} else {
      return (
        <Router>
        <Route path="/">
        </Route>
      </Router>
      )
    }
  }
}

export default Header;