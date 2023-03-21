import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FlightFilter from './flight-filter.js';

function FlightResults({ FlightFilter }) {
    // if (!FlightFilter) {
    //     return null;
    //   }
  return (
    <div>
      <FlightFilter />
      <Container className="my-4">
        <Row xs={1} sm={2} lg={3} className="g-4">
          {FlightFilter.map((flight, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{flight.airline}</Card.Title>
                  <Card.Text>
                    <strong>{flight.departureAirport}</strong> to{' '}
                    <strong>{flight.arrivalAirport}</strong>
                  </Card.Text>
                  <Card.Text>
                    Departure: {flight.departureTime}, Arrival: {flight.arrivalTime}
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
