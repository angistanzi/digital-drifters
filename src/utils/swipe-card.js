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

}