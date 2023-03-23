import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function FlightResults(props) {
  // if (!FlightFilter) {
  //     return null;
  //   }
  return (
    <Container className="my-4 flightCards">
      <Row xs={1} sm={2} lg={3} className="g-4">
        {props.flightResults.map((flight, index) => (
          <Col key={index}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>{flight.airline}</Card.Title>
                <Card.Text>
                  <strong>{flight.departureAirport}</strong> to{" "}
                  <strong>{flight.arrivalAirport}</strong>
                </Card.Text>
                <Card.Text>
                  Departure: {flight.departureTime}, Arrival:{" "}
                  {flight.arrivalTime}
                </Card.Text>
                <Card.Text>
                  Price: ${flight.price}{" "}
                  <Button
                    variant="custom"
                    size="sm"
                    href={flight.link}
                    target="blank"
                  >
                    Book Now
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FlightResults;
