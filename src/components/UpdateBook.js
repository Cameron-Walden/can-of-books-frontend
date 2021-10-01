import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class UpdateBook extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUpdate({
      id: this.props.book,
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
          <Form.Control type="name" placeholder="Update Book Title"  rounded="true" fluid="true" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="Update Book Description" rounded="true" fluid="true" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control type="name" placeholder="Update Book Status" rounded="true" fluid="true" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="name" placeholder="Update Your Email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Book
        </Button>
      </Form>
    )
  }
}