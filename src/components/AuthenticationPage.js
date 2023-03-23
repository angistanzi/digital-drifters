import React, { useState } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import '../index.css';

function AuthenticationPage({ handleLogin }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      handleLogin(email);
    }
  };

  return (
    <Container className="py-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-5">Welcome! Please Login</h1>
      </div>
      <Row className="justify-content-center">
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="custom" size="sm" type="submit" disabled={!email.trim()}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthenticationPage;
