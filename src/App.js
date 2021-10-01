import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Login from './login/Login.js';
import LoginForm from './login/LoginForm.js';
import BestBooks from './components/BestBooks.js';
import Header from './components/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
    }
  }

  handleLogInButton = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogOutButton = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  handleCreateUserButton = (userInfo) => {
    this.setState({
      user: userInfo,
    })
  }

  render() {
    console.log(this.state.isLoggedIn, '<---- AM I LOGGED IN? ---<<<')
    return (
      <>
      <Header logout={this.handleLogOutButton} user={this.state.user} />
      {this.state.isLoggedIn && this.state.user &&
      <BestBooks />
      }
      {!this.state.user && this.state.isLoggedIn &&
      <LoginForm createUser={this.handleCreateUserButton} />
      }
      {!this.state.isLoggedIn &&
      <>
      <h3>Welcome to BestBooks</h3>
      <Login login={this.handleLogInButton} />
      </>
      }
      </>
    );
  }
}

export default App;