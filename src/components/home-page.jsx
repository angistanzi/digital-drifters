import React from 'react';
import { Row, Container, Card, Button, NavLink, Col } from 'react-bootstrap';

import planeImg from '../assets/plane.png';
import tropical from '../assets/tropical.jpg';
import favesImg from '../assets/fave.jpg';
import '../index.css'


function HomePage() {

  return (

    
      <Container className="py-5 my-5">
        <div className="text-center mb-5">
         <h1 className="display-4 fw-bold mb-5">DISCOVER THE WORLD 🌎</h1>

        </div>
        <Row className="justify-content-evenly">
          <Col lg="8">
          <Card className="cityCard text-white">
                <Card.Img
                  src={planeImg}
                  alt="Book flights"
                />
                <div className="gradientDiv"></div>

                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <div className="d-inline-flex justify-content-between">
                    <Card.Title>Book flights today</Card.Title>
                    <Button variant="custom" size="sm">
                      <NavLink
                        onClick={() => window.location.href='/flight-filter'}
                      >
                        Book flights
                      </NavLink>
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </Card>

              <Card className="cityCard text-white">
                <Card.Img
                  src={tropical}
                  alt="Book flights"
                />
                <div className="gradientDiv"></div>

                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <div className="d-inline-flex justify-content-between">
                    <Card.Title>Need some inspiration?</Card.Title>
                    <Button variant="custom" size="sm">
                      <NavLink
                        onClick={() => window.location.href='/travel-inspo'}
                      >
                        Take me there
                      </NavLink>
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </Card>

              <Card className="cityCard text-white">
                <Card.Img
                  src={favesImg}
                  alt="Book flights"
                />
                <div className="gradientDiv"></div>

                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <div className="d-inline-flex justify-content-between">
                    <Card.Title>Your favorites</Card.Title>
                    <Button variant="custom" size="sm">
                      <NavLink
                        onClick={() => window.location.href='/favorite-list'}
                      >
                        Let's go
                      </NavLink>
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </Card>
          
          

          </Col>
        
        </Row>
      </Container>
   
  );
}

export default HomePage;

