import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "./favorite-list.css";
import { getCityData } from "../utils/API";

function Favorites() {
  const [cityName, setCityName] = useState("");
  const [visitedCities, setVisitedCities] = useState(
    JSON.parse(localStorage.getItem("visitedCities")) || []
  );

  useEffect(() => {
    localStorage.setItem("visitedCities", JSON.stringify(visitedCities));
  }, [visitedCities]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getCityData(cityName).then((cityData) => {
      setVisitedCities([...visitedCities, cityData]);
    });
    setCityName("");
  };

  return (
    <Container className="py-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-5">FAVOURITES</h1>
        <Row className="justify-content-center">
          <Col lg="5">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="Write the cities you have visited"
                aria-label="Search"
                onChange={(event) => setCityName(event.target.value)}
                value={cityName}
              />
            </Form>
          </Col>
        </Row>
      </div>
      <Row className="justify-content-evenly">
        <Col lg="5">
          <div className="text-center mb-5">
            <h2>Places I've been</h2>
          </div>

          {visitedCities.map((city) => (
            <Card key={city.id} className="cityCard text-white">
              <Card.Img
                src={city.image}
                alt={`${city.name}, ${city.country}`}
              />
              <div className="gradientDiv"></div>

              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <div className="d-inline-flex justify-content-between">
                  <Card.Title>{`${city.name}, ${city.country}`}</Card.Title>
                  <Button variant="warning" size="sm">
                    Similar places
                  </Button>
                </div>
              </Card.ImgOverlay>
            </Card>
          ))}
        </Col>
        <Col lg="5">
          <div className="text-center mb-5">
            <h2>Places I want to go</h2>
          </div>
          <Card className="cityCard text-white">
            <Card.Img
              src="https://media-cdn.tripadvisor.com/media/photo-s/27/84/4b/d7/caption.jpg"
              alt="Card image"
            />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Tokyo, Japan</Card.Title>
                <Button variant="warning" size="sm">
                  Book flights
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
          <Card className="cityCard text-white">
            <Card.Img
              src="https://media-cdn.tripadvisor.com/media/photo-s/0f/68/4f/4e/photo0jpg.jpg"
              alt="Card image"
            />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Shanghai, China</Card.Title>
                <Button variant="warning" size="sm">
                  Book flights
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
          <Card className="cityCard text-white">
            <Card.Img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/33/f3/33/caption.jpg"
              alt="Card image"
            />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Taipei, Taiwan</Card.Title>
                <Button variant="warning" size="sm">
                  Book flights
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Favorites;
