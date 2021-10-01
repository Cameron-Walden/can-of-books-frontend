import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            username: event.target.formUsername.value,
            email: event.target.formEmail.value,
          };
    
        console.log(this.props.createUser, '<---- THIS DOT PROPS CREATE USER ---<<<')
        this.props.createUser(userInfo);
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}
export default LoginForm;