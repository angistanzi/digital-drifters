import { React, useState } from "react";
import "../components/travel-inspo.css";
import historical from "../assets/ruins.jpg";
import outdoors from "../assets/outdoors.jpg";
import familyfun from "../assets/familyfun.jpg";
import random from "../assets/random.jpg";
import SwipeCard from "../utils/swipe-card";
import { CardGroup, Card, Button } from "react-bootstrap";

function TravelInspo() {
  const [currentCategory, setCurrentCategory] = useState();

  return (
    <div className="container travel-inspo my-5">
      <div className="container travel-inspo my-5">
        <h1 id="travelHeader" className="text-center display-4 fw-bold mb-5">
          ✨DESTINATION INSPIRATION✨
        </h1>
        <CardGroup className="mb-5">
          <Card key="1" className="categoryCard text-white mx-1">
            <Card.Img src={historical} alt="historical image" />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Historical</Card.Title>
                <Button
                  href="#historical"
                  className="btn btn-custom btn-sm"
                  onClick={() => {
                    setCurrentCategory("historical");
                  }}
                >
                  Give me inspo
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>

          <Card key="2" className="categoryCard text-white mx-1">
            <Card.Img src={familyfun} alt="historical image" />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Family fun</Card.Title>
                <Button
                  href="#family"
                  className="btn btn-custom btn-sm"
                  onClick={() => {
                    setCurrentCategory("family");
                  }}
                >
                  Give me inspo
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>

          <Card key="3" className="categoryCard text-white mx-1">
            <Card.Img src={outdoors} alt="historical image" />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Outdoors</Card.Title>
                <Button
                  href="#outdoors"
                  className="btn btn-custom btn-sm"
                  onClick={() => {
                    setCurrentCategory("outdoor");
                  }}
                >
                  Give me inspo
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>

          <Card key="4" className="categoryCard text-white mx-1">
            <Card.Img src={random} alt="historical image" />
            <div className="gradientDiv"></div>

            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="d-inline-flex justify-content-between">
                <Card.Title>Random</Card.Title>
                <Button
                  href="#random"
                  className="btn btn-custom btn-sm"
                  onClick={() => {
                    setCurrentCategory("random");
                  }}
                >
                  Give me inspo
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </CardGroup>
        <div className="row my-5">
          {currentCategory === undefined ? null : (
            <SwipeCard category={currentCategory} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelInspo;