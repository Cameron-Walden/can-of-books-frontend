import React from 'react';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Profile extends React.Component {
  render() {
    console.log(this.props.email, '<--- PROFILE DOT PROPS LOG ---<<<')
    return (
      <>
      <h1>Welcome back {this.props.username}!</h1>
      <h2>Logged in with: {this.props.email}</h2>
      </>
    )
  }
}

export default Profile;