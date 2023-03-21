import React, { useState } from "react";
import { Form, Row, Dropdown } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import FlightResults from "./flight-results.js";

function FlightFilter({setFlightFormData}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const departure = form.elements["formDeparture"].value;
        const destination = form.elements["formDestination"].value;
        const departureDate = form.elements["formDepartureDate"].value;
        const returnDate = form.elements["formReturnDate"].value;
        const passengers = form.elements["formPassengers"].value;
        const cabinClass = form.elements["formCabinClass"].value;
        const directFlightsOnly = form.elements["formDirectFlightsOnly"].checked;
        const flexibleDates = form.elements["formFlexibleDates"].checked;
        const departureTime = form.elements["formDepartureTime"].value;
        const minPrice = form.elements["formPriceRange"][0].value;
        const maxPrice = form.elements["formPriceRange"][1].value;

        try {
            const apiKey = "c0b475d5b9mshe4e202547ee2d89p180241jsn4882db8fe45c";
            const apiUrl = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${departure}-sky/${destination}-sky/${departureDate}?inboundpartialdate=${returnDate}`;

            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": apiKey,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                },
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            const data = await response.json();
            setFlightFormData(data);
        } catch (error) {
            console.error(error);
            // TODO: Handle the error appropriately (e.g. show a message to the user)
        }
    };

    return (
        <Form>
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
            {/* Extra filters dropdown */}
            <Dropdown>
                <Dropdown.Toggle className="col-md-4" variant="secondary" id="filter-dropdown">
                    Additional Filters
                </Dropdown.Toggle>
                <Dropdown.Menu show={isOpen}>
                    <Dropdown.Header>Filter by</Dropdown.Header>
                    <Dropdown.Divider /> 
                    {/* Cabin class input */}
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
                        {/* Direct Flights Only checkbox */}
                         <Form.Group className="col-md-2" controlId="formDirectFlightsOnly">
                            <Form.Label>Direct Flights Only</Form.Label>
                            <Form.Check type="checkbox" label="" onChange={(e) => e.stopPropagation()} />
                        </Form.Group>
                    </Dropdown.Item>
                    <Dropdown.Item> 
                        {/* Flexible Dates checkbox */}
                        <Form.Group className="col-md-2" controlId="formFlexibleDates">
                            <Form.Label>Flexible Dates</Form.Label>
                            <Form.Check type="checkbox" label="" onChange={(e) => e.stopPropagation()} />
                        </Form.Group>
                    </Dropdown.Item>
                    <Dropdown.Item> 
                        {/* Departure Time input */}
                        <Form.Group className="col-md-12" controlId="formDepartureTime">
                            <Form.Label>Departure Time</Form.Label>
                            <Form.Control as="select" defaultValue="Any" onClick={(e) => e.stopPropagation()}>
                                <option>Any</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Evening</option>
                            </Form.Control>
                        </Form.Group>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {/* Price Range input */}
                        <Form.Group className="col-md-12" controlId="formPriceRange">
                            <Form.Label>Price Range</Form.Label>
                            <Form.Control type="number" placeholder="Min" onClick={(e) => e.stopPropagation()} />
                            <Form.Control type="number" placeholder="Max" onClick={(e) => e.stopPropagation()} />
                        </Form.Group>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* Submit button */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Flight Search
            </Button>
        </Form>
    )

};
// FlightResults();
export default FlightFilter;

