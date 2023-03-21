import React, { useState } from "react";
import { Form, Row, Dropdown } from "react-bootstrap";

import { Button } from 'react-bootstrap';
import FlightResults from "./flight-results.js";

function FlightFilter({setFlightFormData}) {
    const [isOpen, setIsOpen] = useState(false);
    // const [flightFilter, setFlightResults] = useState([]);


  // make the flight search button call the information requested
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission from reloading the page

    // gather form input values
    const form = event.currentTarget;
    const departure = form["formDeparture"].value;
    console.log(form["formDeparture"].value)
    const destination = form["formDestination"].value;
    console.log(form["formDepartureDate"].value);
    const departureDate = form["formDepartureDate"].value;
    const returnDate = form["formReturnDate"].value;
    // const passengers = form["formPassengers"].value;
    // const cabinClass = form["formCabinClass"].value;
    // const directFlightsOnly = form["formDirectFlightsOnly"].checked;
    // const flexibleDates = form["formFlexibleDates"].checked;
    // const departureTime = form["formDepartureTime"].value;
    // const minPrice = form["formPriceRange"][0].value;
    // const maxPrice = form["formPriceRange"][1].value;

        // TODO: Send the form data to the server to fetch flight search results
        // construct API request URL with form input values as parameters
        const apiKey = "c0b475d5b9mshe4e202547ee2d89p180241jsn4882db8fe45c";
        const apiUrl = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${departure}-sky/${destination}-sky/${departureDate}?inboundpartialdate=${returnDate}`;

        fetch(apiUrl, {
            method: "GET",
            headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // TODO: Update state with the retrieved flight search results
                setFlightFormData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Form onSubmit={(handleSubmit)}>
            <Row>
                {/* Departure location input */}
                <Form.Group className="col-md-3" controlId="formDeparture">
                    <Form.Label>Departure</Form.Label>
                    <Form.Control type="text" placeholder="Enter departure city" />
                </Form.Group>
                {/* Arrival location input */}
                <Form.Group className="col-md-3" controlId="formDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Enter destination city" />
                </Form.Group>
                {/* Flight dates input */}
                <Form.Group className="col-md-2" controlId="formDepartureDate">
                    <Form.Label>Departure date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="col-md-2" controlId="formReturnDate">
                    <Form.Label>Return date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                {/* Number of passengers input */}
                <Form.Group className="col-md-1" controlId="formPassengers">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control as="select" defaultValue="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                    </Form.Control>
                </Form.Group>
            </Row>
        
            
            {/* Submit button */}
            <Button variant="primary" type="submit">
                Flight Search
            </Button>
        </Form>
    )

};

export default FlightFilter;

