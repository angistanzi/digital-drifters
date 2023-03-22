import React, { useState } from "react";
import { Form, Row, Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FlightResults from "./flight-results.js";
import airports from "../data/airport-data.json";
import { getFlightsData } from "./API.js";

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
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Departure location input */}
          <Form.Group className="col-md-3" controlId="formDeparture">
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
          <Form.Group className="col-md-3" controlId="formDestination">
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
          <Form.Group className="col-md-2" controlId="formDepartureDate">
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
          {/* <Form.Group className="col-md-2" controlId="formReturnDate">
          <Form.Label>Return date</Form.Label>
          <Form.Control type="date" />
        </Form.Group> */}
          {/* Number of passengers input */}
          <Form.Group className="col-md-1" controlId="formPassengers">
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
              <option>5+</option>
            </Form.Control>
          </Form.Group>
        </Row>
        {/* <Dropdown>
        <Dropdown.Toggle
          className="col-md-4"
          variant="secondary"
          id="filter-dropdown"
        >
          Additional Filters
        </Dropdown.Toggle>
        <Dropdown.Menu show={isOpen}>
          <Dropdown.Header>Filter by</Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Form.Group className="col-md-12" controlId="formCabinClass">
              <Form.Label>Cabin Class</Form.Label>
              <Form.Control as="select" onChange={(e) => e.stopPropagation()}>
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </Form.Control>
            </Form.Group>
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Group className="col-md-2" controlId="formDirectFlightsOnly">
              <Form.Label>Direct Flights Only</Form.Label>
              <Form.Check
                type="checkbox"
                label=""
                onChange={(e) => e.stopPropagation()}
              />
            </Form.Group>
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Group className="col-md-2" controlId="formFlexibleDates">
              <Form.Label>Flexible Dates</Form.Label>
              <Form.Check
                type="checkbox"
                label=""
                onChange={(e) => e.stopPropagation()}
              />
            </Form.Group>
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Group className="col-md-12" controlId="formDepartureTime">
              <Form.Label>Departure Time</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Any"
                onClick={(e) => e.stopPropagation()}
              >
                <option>Any</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </Form.Control>
            </Form.Group>
          </Dropdown.Item>
          <Dropdown.Item>
            <Form.Group className="col-md-12" controlId="formPriceRange">
              <Form.Label>Price Range</Form.Label>
              <Form.Control
                type="number"
                placeholder="Min"
                onClick={(e) => e.stopPropagation()}
              />
              <Form.Control
                type="number"
                placeholder="Max"
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
        {/* Submit button */}
        <Button variant="primary" type="submit">
          Flight Search
        </Button>
      </Form>
      <FlightResults flightResults={flightResults}></FlightResults>
    </div>
  );
}

export default FlightFilter;
