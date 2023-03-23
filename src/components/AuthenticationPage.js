import React, { useState } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function AuthenticationPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      navigate('/home-page')
    }
  };



  return (
    <Container className="py-5 my-5">
      <div className="text-center mb-5">
        <h1  style={{
          fontFamily: '"Pacifico", cursive',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#283149',
          textAlign: 'center',
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
        }}className="display-4 fw-bold mb-5">Welcome! <span style={{ color: '#66CDAA' }}>Please login 💻</span> </h1>
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
  )};


export default AuthenticationPage;
