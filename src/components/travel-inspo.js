import React, {useState} from "react";
// import css from '../assets/travel-inspo.css'
import historical from '../assets/ruins.jpg'
import outdoors from '../assets/outdoors.jpg'
import familyfun from '../assets/familyfun.jpg'
import random from '../assets/random.jpg'
import SwipeCard from "../utils/swipe-card";

// Fetch request for each card to pull cities with respective attractions when button is clicked
// Need to append those results to display into swipe cards
function TravelInspo (){
const [currentCategory, setCurrentCategory] = useState()

    return(
        <div className="container travel-inspo" style={{paddingTop: 30}}>

        <header><h1 id="travelHeader" className="display-4 fw-bold mb-5">DESTINATION INSPIRATION✨</h1></header>
        <div class ="card-group">
        
             <div className="card" >
             <div className="gradientDiv"></div>
                <img src={historical} className="card-img" id="inspo-image" alt="..."></img>
                <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 className="card-title">HISTORICAL</h5>
                    <a href="#historical" className="btn btn-warning btn-sm" onClick={() => {setCurrentCategory("historical")}}>Give me inspo</a>
                    </div>
                </div>
            </div>
            <div className="card" >
            <div className="gradientDiv"></div>
                <img src={familyfun} className="card-img" id="inspo-image" alt="..."></img>
                <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 className="card-title">FAMILY FUN</h5>
                    <a href="#family" className="btn btn-warning btn-sm" onClick={() => {setCurrentCategory("family")}}>Give me inspo</a>
                    </div>
                </div>
            </div>
            <div className="card" >
            <div className="gradientDiv"></div>
                <img src={outdoors} className="card-img"  id="inspo-image" alt="..."></img>
                <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 className="card-title">OUTDOORS</h5>
                    <a href="#outdoors" className="btn btn-warning btn-sm" onClick={() => {setCurrentCategory("outdoor")}}>Give me inspo</a>
                    </div>
                </div>
            </div>
            <div className="card" >
            <div className="gradientDiv"></div>
                <img src={random} className="card-img" id="inspo-image" alt="..."></img>
                <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 className="card-title">RANDOM</h5>
                    <a href="#random" className="btn btn-warning btn-sm" onClick={() => {setCurrentCategory("random")}}>Give me inspo</a>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="row" style={{paddingTop: 40}}>
        {currentCategory === undefined ? null : (
          <SwipeCard category={currentCategory} />
        )}
      
        </div>


        </div>



    );
}

export default TravelInspo;