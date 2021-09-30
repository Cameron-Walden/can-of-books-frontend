import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header() {
 
    return (
      <>
      <Button variant="dark" type="submit">Logout</Button>
      <h3>Profile Information:</h3>
      <Form>
      <Row>
      <Col>
        <Form.Control placeholder="Username" rounded="true" fluid="true" />
      </Col>
      <Col>
        <Form.Control placeholder="Email" rounded="true" fluid="true" />
      </Col>
      </Row>
      </Form>
      </>
      )
  }

export default Header;