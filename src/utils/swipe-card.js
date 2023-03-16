import React from "react";
import { useAccordionButton } from "react-bootstrap";
import TinderCard from "react-tinder-card";

const attractions = [
    {
        attraction: "Ruins",
        url: "../assets/ruins.jpg"
    },
    {
        attraction: "Ruins",
        url: "../assets/ruins.jpg"
    },
    {
        attraction: "Ruins",
        url: "../assets/ruins.jpg"
    },
    {
        attraction: "Ruins",
        url: "../assets/ruins.jpg"
    },
    {
        attraction: "Ruins",
        url: "../assets/ruins.jpg"
    }
];

function SwipeCard(){

    const [currentIndex, setCurrentIndex] = useState(attraction.length - 1)
    const [lastDirection, setLastDirection] =  useState()
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
          Array(db.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
      }

    const canGoBack = currentIndex < db.length - 1
    const canSwipe = currentIndex >= 0

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
      }
    

};