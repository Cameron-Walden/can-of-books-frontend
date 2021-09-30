import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class BurnBook extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onDelete({
      id: this.props.book,
      email: event.target.formEmail.value,
    })

  }

  render() {
    return (
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Email" rounded="true" fluid="true" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Burn Book
        </Button>
      </Form>
      </>
    )
  }
}