import React from "react";
import { Form } from "react-bootstrap";

export default function FlightFilter() {
    return (
        <Form>
            <Form.Row>
                <Form.Group className="col-md-4" controlId="formDeparture">
                    <Form.Label>Departure</Form.Label>
                    <Form.Control type="text" placeholder="Enter departure city" />
                </Form.Group>
                <Form.Group className="col-md-4" controlId="formDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Enter destination city" />
                </Form.Group>
                <Form.Group className="col-md-2" controlId="formDepartureDate">
                    <Form.Label>Departure date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="col-md-2" controlId="formReturnDate">
                    <Form.Label>Return date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group className="col-md-3" controlId="formPassengers">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control as="select" defaultValue="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    )
};