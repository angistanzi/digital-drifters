import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FlightFilter from './flight-filter.js';

function FlightResults() {
  const [flightFormData, setFlightFormData] = useState([])
    // if (!FlightFilter) {
    //     return null;
    //   }
  return (
    <div>
      <FlightFilter setFlightFormData={setFlightFormData}/>
      <Container className="my-4">
        <Row xs={1} sm={2} lg={3} className="g-4">
          {flightFormData.map((flight, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{flight.airline}</Card.Title>
                  <Card.Text>
                    <strong>{flight.departure}</strong> to{' '}
                    <strong>{flight.destination}</strong>
                  </Card.Text>
                  <Card.Text>
                    Departure: {flight.departureDate}, Return: {flight.returnDate}
                  </Card.Text>
                  <Card.Text>
                    Price: ${flight.price}{' '}
                    <Button variant="primary" size="sm">
                      Book Now
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FlightResults;
