import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import planeImg from '../assets/plane.png';
import boatImg from '../assets/boat.jpg';
import favesImg from '../assets/faves.png';



function HomePage() {
  return (
    <div>
      <Container className="mt-5">
        <h1>Want to book flights or not sure where to go? Explore some options below!</h1>
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={planeImg} className="card-img" />
              <Card.Body>
                <Card.Title>Book your flight today</Card.Title>
                <Card.Text>
                  This is a sample text for the card. You can put any text here to describe your content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={boatImg} className="card-img" />
              <Card.Body>
                <Card.Title>Travel Inspiration</Card.Title>
                <Card.Text>
                  This is a sample text for the card. You can put any text here to describe your content.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <Card style={{ width: '50rem' }}>
              <Card.Img variant="top" src={favesImg} className="card-img" />
              <Card.Body>
                <Card.Title>Your Card Title</Card.Title>
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




