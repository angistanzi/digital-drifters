import React from "react";
import css from '../assets/travel-inspo.css'
import historical from '../assets/ruins.jpg'
import outdoors from '../assets/outdoors.jpg'
import familyfun from '../assets/familyfun.jpg'
import random from '../assets/random.jpg'
import SwipeCard from "../utils/swipe-card";

// Fetch request for each card to pull cities with respective attractions when button is clicked
// Need to append those results to display into swipe cards
function TravelInspo (){


    return(
        <div class="container travel-inspo" style={{paddingTop: 30}}>

        <header><h1 id="travelHeader" class="display-4 fw-bold mb-5">DESTINATION INSPIRATION✨</h1></header>
        <div class ="card-group">
        
             <div class="card" >
             <div className="gradientDiv"></div>
                <img src={historical} class="card-img" id="inspo-image" alt="..."></img>
                <div class="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 class="card-title">HISTORICAL</h5>
                    <a href="#historical" class="btn btn-warning btn-sm">Give me inspo</a>
                    </div>
                </div>
            </div>
            <div class="card" >
            <div className="gradientDiv"></div>
                <img src={familyfun} class="card-img" id="inspo-image" alt="..."></img>
                <div class="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 class="card-title">FAMILY FUN</h5>
                    <a href="#family" class="btn btn-warning btn-sm">Give me inspo</a>
                    </div>
                </div>
            </div>
            <div class="card" >
            <div className="gradientDiv"></div>
                <img src={outdoors} class="card-img"  id="inspo-image" alt="..."></img>
                <div class="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 class="card-title">OUTDOORS</h5>
                    <a href="#outdoors" class="btn btn-warning btn-sm">Give me inspo</a>
                    </div>
                </div>
            </div>
            <div class="card" >
            <div className="gradientDiv"></div>
                <img src={random} class="card-img" id="inspo-image" alt="..."></img>
                <div class="card-img-overlay text-white d-flex flex-column justify-content-end">
                    <div className="d-inline-flex justify-content-between">
                    <h5 class="card-title">RANDOM</h5>
                    <a href="#random" class="btn btn-warning btn-sm">Give me inspo</a>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="row" style={{paddingTop: 40}}>
          
            <SwipeCard/>
      
        </div>


        </div>



    );
}

export default TravelInspo;