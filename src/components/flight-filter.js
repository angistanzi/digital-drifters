import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FlightResults from "./flight-results.js";
import airports from "../data/airport-data.json";
import { getFlightsData } from "./API.js";
import "./flight-filter.css";
import flighthero from "../assets/flighthero.png";

function FlightFilter() {
  const [departure, setDeparture] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [flightResults, setFlightResults] = useState(
    JSON.parse(localStorage.getItem("savedFlights")) || []
  );

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

      localStorage.setItem("savedFlights", JSON.stringify(flights));
    });
  };

  return (
    <div>
          
        <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-5" style={{
          fontFamily: '"Pacifico", cursive',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#283149',
          textAlign: 'center',
          paddingTop:50,
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
        }}>Where <span style={{ color: '#66CDAA' }}>to? 🛫</span></h1>
        </div>
          <div className="form-custom">
          <Form className="row justify-content-around" style={{paddingBottom:50}} onSubmit={handleSubmit}>
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
              <Form.Group className="col-md-2" controlId="formPassengers">
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
            
            
            {/* Submit button */}
            <div id="submit-btn">
            <Button style={{width:200}} variant="custom" type="submit">
              Search
            </Button>
          </div>
        </Form>
      </div>
      <div
        className={`col-4 ${flightResults.length ? "d-none" : ""}`}
        style={{ width: "100%" }}
      >
        <img
          src={flighthero}
          className="card-img-top"
          alt="cute travel-themed illustration"
        />
      </div>
      <FlightResults flightResults={flightResults}></FlightResults>
    </div>
  );
}

export default FlightFilter;
