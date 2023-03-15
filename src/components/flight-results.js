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
                    </Card>
                    <div className="card-header bg-primary text-white">
                        <h2 className="h5">Flight 123</h2> {/* Flight number */}
                        <p className="text-muted">Departure: 10:00 AM</p>   {/* Departure time */}
                    </div>
                    <div className="card-body">
                        <p className="lead">$200</p>{/* Price of the flight */}
                        <button className="btn btn-primary">Book Now</button> {/* Book now button */}
                    </div>
            </div>
            
        </Container>
    );
}

export default FlightResults;