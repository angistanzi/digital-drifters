import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';


function HomePage() {
  return (
    <div>
   
      <Container className="mt-5">
        <h1>My React App</h1>
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a sample text for the card. You can put any text here to describe your content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a sample text for the card. You can put any text here to describe your content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
      <footer className="mt-5 py-3 bg-light text-center">
        Digital Drifters &copy; 2023
      </footer>
    </div>
  );
}

export default HomePage;



