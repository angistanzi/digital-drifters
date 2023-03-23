import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getCityData } from "../utils/API";
import "./favorite-list.css";

// book flight button linked to flight component.
// Add a counter on visited cities.

function Favorites() {
  // Defining state variables using the useState hook.
  const [cityName, setCityName] = useState("");
  const [visitedCardsToRender, setVisitedCardsToRender] = useState(5);
  const [favCardsToRender, setFavCardsToRender] = useState(5);
  const [visitedCities, setVisitedCities] = useState(
    // Getting the array of visited cities from local storage,
    // or start it with an empty array if it doesn't exist yet.
    JSON.parse(localStorage.getItem("visitedCities")) || []
  );

  // Using the useEffect hook to save
  // the updated array of visited cities to local storage.
  useEffect(() => {
    localStorage.setItem("visitedCities", JSON.stringify(visitedCities));
  }, [visitedCities]);

  const [savedCities] = useState(
    // Getting the array of saved cities from local storage,
    // or start it with an empty array if it doesn't exist yet.
    JSON.parse(localStorage.getItem("savedCities")) || []
  );

  // Defining a function to handle a form submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Calling the getCityData function
    // from the API.js to get some data for the entered city.
    getCityData(cityName)
      .then((cityData) => {
        // Adding the city data to the array of
        // visited cities using the spread operator.
        setVisitedCities([...visitedCities, cityData]);
      })
      .catch(() => alert("Please try again"));
    // Clearing the input field after the city has been added.
    setCityName("");
  };

  // Rendering the component.
  return (
    <Container className="py-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-5" style={{
          fontFamily: '"Pacifico", cursive',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#283149',
          textAlign: 'center',
          paddingTop: 50,
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
        }}>Your <span style={{ color: '#66CDAA' }}>favourites❤️</span></h1>
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
            <h1 className="display-4 fw-bold mb-5" style={{
              fontFamily: '"Pacifico", cursive',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#283149',
              textAlign: 'center',
              paddingTop: 50,
              textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
            }}>Places I've been</h1>
            {visitedCities.length === 0 ? (
              <h5 style={{
                fontFamily: '"Pacifico"',
                fontSize: '2rem',
                color: '#587792ff',
                textAlign: 'center',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
              }}>You haven't visited any cities yet!</h5>
            ) : visitedCities.length === 1 ? (
              <h5>{`So far you've visited ${visitedCities.length} city!`}</h5>
            ) : (
              <h5>{`So far you've visited ${visitedCities.length} cities!`}</h5>
            )}
          </div>

          {visitedCities.slice(0, visitedCardsToRender).map((city) => {
            return (
              <Card key={city.id} className="cityCard text-white">
                <Card.Img
                  src={city.image}
                  alt={`${city.name}, ${city.country}`}
                />
                <div className="gradientDiv"></div>

                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <div className="d-inline-flex justify-content-between">
                    <Card.Title>{`${city.name}, ${city.country}`}</Card.Title>
                  </div>
                </Card.ImgOverlay>
              </Card>
            );
          })}

          {visitedCardsToRender >= visitedCities.length ? null : (
            <div className="text-center my-3">
              <Button
                onClick={() => {
                  setVisitedCardsToRender(visitedCardsToRender + 5);
                }}
                variant="light"
              >
                Show me more
              </Button>
            </div>
          )}
        </Col>

        <Col lg="5">
          <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-5" style={{
              fontFamily: '"Pacifico", cursive',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#283149',
              textAlign: 'center',
              paddingTop: 50,
              textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
            }}>Places I want to go</h1>
            {savedCities.length === 0 ? (
              <h5 style={{
                fontFamily: '"Pacifico"',
                fontSize: '2rem',
                color: '#587792ff',
                textAlign: 'center',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
              }}>You haven't any saved cities yet.</h5>
            ) : savedCities.length === 1 ? (
              <h5 style={{
                fontFamily: '"Pacifico"',
                fontSize: '2rem',
                color: '#587792ff',
                textAlign: 'center',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
              }}>{`So far you want to visit ${savedCities.length} city!`}</h5>
            ) : (
              <h5 style={{
                fontFamily: '"Pacifico"',
                fontSize: '2rem',
                color: '#587792ff',
                textAlign: 'center',
                textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
              }}>{`So far you want to visit ${savedCities.length} cities!`}</h5>
            )}
          </div>

          {savedCities.slice(0, favCardsToRender).map((city) => {
            return (
              <Card key={city.id} className="cityCard text-white">
                <Card.Img
                  src={city.url}
                  alt={`${city.location}, ${city.country}`}
                />
                <div className="gradientDiv"></div>

                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <div className="d-inline-flex justify-content-between">
                    <Card.Title>{`${city.location}, ${city.country}`}</Card.Title>
                    <Button variant="custom" size="sm">
                      <NavLink
                        to="/flight-filter"
                        // When the NavLink is active, the "active" class is added.
                        className={({ isActive }) =>
                          isActive ? "nav-link active" : "nav-link"
                        }
                      >
                        Book flights
                      </NavLink>
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            );
          })}
          {favCardsToRender >= savedCities.length ? null : (
            <div className="text-center my-3">
              <Button
                onClick={() => {
                  setFavCardsToRender(favCardsToRender + 5);
                }}
                variant="light"
              >
                Show me more
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Favorites;
