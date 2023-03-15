import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function FlightResults() {

    return (
        <Container>
            {/* Main container for flight results page */}
            <h1 className="display-4 text-primary">Search Results</h1>  {/* Header for the search results page */}
            <div className="card">
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
            </div>

        </Container>
    );
}

export default FlightResults;