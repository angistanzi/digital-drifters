import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import FlightFilter from './flight-filter';


function FlightResults() {

    return (
        <Container>


            <FlightFilter />

            {/* Main container for flight results page */}
            <h1 className="display-4 text-primary">Search Results</h1>  {/* Header for the search results page */}
            {/* Top result card */}
            <Card className="mt-4">
                {/* Image of a flight */}
                <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                    alt="Flight"
                />
                <Card.Body>
                    {/* Flight number */}
                    <Card.Title>Flight 123</Card.Title>

                    {/* Departure time */}
                    <Card.Text className="text-muted">Departure: 10:00 AM</Card.Text>

                    {/* Price of the flight */}
                    <p className="lead">$200</p>

                    {/* Book now button */}
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
            {/* Suggested flights */}
            <Row className="mt-4">
                <Col md={4}>
                    {/* Card for a suggested flight */}
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1530545124313-ce5e8eae55af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyY3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Flight"
                        />
                        <Card.Body>
                            <Card.Title>Flight 456</Card.Title>
                            <Card.Text className="text-muted">Departure: 2:00 PM</Card.Text>
                            <p className="lead">$150</p>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1520437358207-323b43b50729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlyY3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Flight"
                        />
                        <Card.Body>
                            <Card.Title>Flight 789</Card.Title>
                            <Card.Text className="text-muted">Departure: 6:00 PM</Card.Text>
                            <p className="lead">$180</p>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1530545124313-ce5e8eae55af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyY3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Flight"
                        />
                        <Card.Body>
                            <Card.Title>Flight 789</Card.Title>
                            <Card.Text className="text-muted">Departure: 6:00 PM</Card.Text>
                            <p className="lead">$180</p>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1520437358207-323b43b50729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlyY3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Flight"
                        />
                        <Card.Body>
                            <Card.Title>Flight 789</Card.Title>
                            <Card.Text className="text-muted">Departure: 6:00 PM</Card.Text>
                            <p className="lead">$180</p>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1530545124313-ce5e8eae55af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyY3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Flight"
                        />
                        <Card.Body>
                            <Card.Title>Flight 789</Card.Title>
                            <Card.Text className="text-muted">Departure: 6:00 PM</Card.Text>
                            <p className="lead">$180</p>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1520437358207-323b43b50729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlyY3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                            alt="Flight"
                        />
                        <Card.Body>
                            <Card.Title>Flight 789</Card.Title>
                            <Card.Text className="text-muted">Departure: 6:00 PM</Card.Text>
                            <p className="lead">$180</p>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default FlightResults;