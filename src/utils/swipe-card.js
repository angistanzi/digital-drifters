
import React, { useState, useRef, useMemo } from 'react'
import TinderCard from 'react-tinder-card' 
import './swipe-card.css' 
import swipecards from '../assets/swipe-cards.json'


const db = [{
  "location": "Rome",
  "country": "Italy",
  "id": 187791,
  "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c9/6c/08/caption.jpg"
},
{
  "location": "Athens",
  "country": "Greece",
  "id": 189400,
  "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c0/98/c5/caption.jpg"
},
{
  "location": "Macchu Picchu",
  "country": "Peru",
  "id": 20274142,
  "url": "https://media-cdn.tripadvisor.com/media/photo-o/1b/15/16/91/caption.jpg"
},
{
  "location": "Luxor",
  "country": "Egypt",
  "id": 294205,
  "url": "https://media-cdn.tripadvisor.com/media/photo-b/2560x500/15/33/fb/a0/luxor.jpg"
},
{
  "location": "Siem Reap",
  "country": "Cambodia",
  "id": 297390,
  "url": "https://media-cdn.tripadvisor.com/media/photo-b/2560x500/15/33/fc/e0/siem-reap.jpg"
}];


function SwipeCard () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (location, idx) => {
    console.log(
      `${location} (${idx}) left the screen!`,
      currentIndexRef.current
    );
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div id="attractions">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1 class="display-4 fw-bold mb-5">CHECK THESE OUT...</h1>
      <div className='cardContainer' id="attractions">
        {db.map((suggestion, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={suggestion.location}
            onSwipe={(dir) => swiped(dir, suggestion.location, index)}
            onCardLeftScreen={() => outOfFrame(suggestion.location, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + suggestion.url + ')' }}
              className='card-swipe'
            >
              <h3>{suggestion.location}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Skip</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Add to favorites</button>
      </div>
     
    </div>
  );
}

export default SwipeCard;
