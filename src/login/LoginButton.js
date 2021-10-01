import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LoginButton extends Component {
    render() {
        return (
            <>
            <Button onClick={this.props.login}>Log In</Button>
            </>
        )
    }

}

export default LoginButton;