import React, { useState, useRef, useMemo } from "react";
import TinderCard from "react-tinder-card";
import swipecards from "../data/swipe-cards.json";
import "./swipe-card.css";
import Button from "react-bootstrap/Button";

function SwipeCard(props) {
  const [currentIndex, setCurrentIndex] = useState(
    swipecards[props.category].length - 1
  );
  const [lastDirection, setLastDirection] = useState();

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(swipecards[props.category].length)
        .fill(0)
        .map((i) => React.createRef()),
    [props.category]
  );

  const updateCurrentIndex = (val) => {
    // console.log(val);
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < swipecards[props.category].length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, suggestion, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      const savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
      if (!savedCities.find((savedCity) => savedCity.id === suggestion.id)) {
        localStorage.setItem(
          "savedCities",
          JSON.stringify([suggestion, ...savedCities])
        );
      }
    }
  };

  const outOfFrame = (location, idx) => {
    // console.log(
    //   `${location} (${idx}) left the screen!`,
    //   currentIndexRef.current
    // );
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < swipecards[props.category].length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    // console.log(newIndex);
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div id="attractions">
      <h1 className="display-4 fw-bold mb-5" style={{
        fontFamily: '"Pacifico", cursive',
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#F4E04D',
        textAlign: 'center',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
      }}>Check these out...</h1>
      <div className="cardContainer" id="attractions">
        {swipecards[props.category].map((suggestion, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={suggestion.id}
            onSwipe={(dir) => swiped(dir, suggestion, index)}
            onCardLeftScreen={() => outOfFrame(suggestion.location, index)}
          >
            <div
              style={{ backgroundImage: "url(" + suggestion.url + ")" }}
              className="card-swipe "
            >
              <div className="gradientDiv"></div>
              <h5>{`${suggestion.location}, ${suggestion.country}`}</h5>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <Button className="btn-custom btn-sm" onClick={() => swipe("left")}>
          Skip
        </Button>
        <Button className="btn-custom btn-sm" onClick={() => goBack()}>
          Undo swipe
        </Button>
        <Button className="btn-custom btn-sm" onClick={() => swipe("right")}>
          Add to favorites
        </Button>
      </div>
      {lastDirection === "right" && (
        <h4 key={lastDirection} className="infoText">
          Added to favorites
        </h4>
      )}
      {lastDirection === "left" && (
        <h4 key={lastDirection} className="infoText">
          Skipped city
        </h4>
      )}
      {lastDirection === undefined && (
        <h4 className="infoText text-center">
          Swipe right to add to favorites, or swipe left to see more!
        </h4>
      )}
    </div>
  );
}

export default SwipeCard;
