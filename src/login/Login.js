import React from 'react';
import LoginButton from './LoginButton.js';

class Login extends React.Component {

  render() {
    const login = this.props.login;
    return (
      <>
      <LoginButton login={login}  />
      </>
    )
  }
}

export default Login;