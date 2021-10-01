import React from 'react';
import Button from 'react-bootstrap/Button';

class LogoutButton extends React.Component {
  render() {
    console.log(this.props.logout, '<---- LOG OUT BUTTON DOT PROPS INFO ---<<<')
    return (
      <Button onClick={this.props.logout}>Log Out</Button>
    )
  }
}

export default LogoutButton;