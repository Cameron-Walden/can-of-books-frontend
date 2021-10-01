import React from 'react';
import Button from 'react-bootstrap/Button';

class LogoutButton extends React.Component {
  render() {
    return (
      <Button onClick={this.logout}>Log Out</Button>
    )
  }
}

export default LogoutButton;