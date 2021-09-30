import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateBook extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate({
      title: event.target.formTitle.value,
      description: event.target.formDescription.value,
      status: event.target.formStatus.value,
      email: event.target.formEmail.value,
    })

  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Title"  rounded="true" fluid="true" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Description" rounded="true" fluid="true" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control type="name" placeholder="Enter Book Status" rounded="true" fluid="true" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Email" rounded="true" fluid="true" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Book
        </Button>
      </Form>
    )
  }
}