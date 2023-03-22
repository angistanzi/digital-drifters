import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FlightResults from "./flight-results.js";
import airports from "../data/airport-data.json";
import { getFlightsData } from "./API.js";
import "./flight.css"; 
import flighthero from '../assets/flighthero.png';


function FlightFilter() {
  const [departure, setDeparture] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [flightResults, setFlightResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const departureCode = airports[departure.toLowerCase()];
    const destinationCode = airports[destination.toLowerCase()];

    getFlightsData(
      passengers,
      departureCode,
      destinationCode,
      departureDate,
      returnDate
    ).then((flights) => {
      setFlightResults(flights);
    });
  };

  return (
<div>
       <div className="card mx-auto" style={{ width: "90%" }}>
          <img src={flighthero} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
    <Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Departure location input */}
          <Form.Group className="col-md-3, flight-form-group" controlId="formDeparture">
            <Form.Label>Departure</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter departure city"
              onChange={(event) => {
                setDeparture(event.target.value);
              }}
            />
          </Form.Group>
          {/* Arrival location input */}
          <Form.Group className="col-md-3, flight-form-group" controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination city"
              onChange={(event) => {
                setDestination(event.target.value);
              }}
            />
          </Form.Group>
          {/* Flight dates input */}
          <Form.Group className="col-md-2, flight-form-group" controlId="formDepartureDate">
            <Form.Label>Departure date</Form.Label>
            <Form.Control
              type="date"
              onChange={(event) => {
                setDepartureDate(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="col-md-2" controlId="formReturnDate">
            <Form.Label>Return date</Form.Label>
            <Form.Control
              type="date"
              onChange={(event) => {
                setReturnDate(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="col-md-1, flight-form-group" controlId="formPassengers">
            <Form.Label>Passengers</Form.Label>
            <Form.Control
              as="select"
              defaultValue="1"
              onChange={(event) => {
                setPassengers(event.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Form.Group>
        </Row>
        
        {/* Submit button */}
        <Button className="flight-form-group" variant="primary" type="submit">
          Flight Search
        </Button>
      </Form>
      <FlightResults flightResults={flightResults}></FlightResults>
    </Row>
</div>
  );
}

export default FlightFilter;
