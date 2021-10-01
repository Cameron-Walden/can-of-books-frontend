import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Login from './login/Login.js';
import LoginForm from './login/LoginForm.js';
import BestBooks from './components/BestBooks.js';

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

  handleCreateUserButton = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    return (
      <>
      {this.state.user &&
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