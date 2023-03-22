import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import planeImg from '../assets/plane.png';
import boatImg from '../assets/boat.jpg';
import favesImg from '../assets/faves.png';
import '../index.css';

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
                  Book your flight today - refine by dates and price to fit your needs.
                </Card.Text>
                <Button onClick={() => window.location.href='/flight-filter'}>Take me there</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={boatImg} className="card-img" />
              <Card.Body>
                <Card.Title>Travel Inspiration</Card.Title>
                <Card.Text>
                  Need some travel inspo? Click below.
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href='/travel-inspo'}>Take me there</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <Card style={{ width: '50rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.4)'}}>
              <Card.Img variant="top" src={favesImg} className="card-img" />
              <Card.Body>
                <Card.Title>Your Favourites Page</Card.Title>
                <Card.Text>
                  Compile a list of all your favourite places and all the places you wish to visit.
                </Card.Text>
                <Button variant="primary" onClick={() => window.location.href='/favorite-list'}>Take me there</Button>
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



