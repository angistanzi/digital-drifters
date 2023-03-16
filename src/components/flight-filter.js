import React, { useState } from "react";
import { Form, Row, Dropdown } from "react-bootstrap";
import { Button } from 'react-bootstrap';

function FlightFilter() {
    const [isOpen, setIsOpen] = useState(false);

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
                            <Form.Control as="select" onClick={(e) => e.stopPropagation()}>                                <option>Economy</option>
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
                            <Form.Check type="checkbox" label="" />
                        </Form.Group>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        {/* Flexible Dates checkbox */}
                        <Form.Group className="col-md-2" controlId="formFlexibleDates">
                            <Form.Label>Flexible Dates</Form.Label>
                            <Form.Check type="checkbox" label="" />
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
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default FlightFilter;