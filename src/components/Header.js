import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
    <h3>Profile Information:</h3>
    <Form>
      <Row>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
      </Row>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </>
  );
}

export default Header;