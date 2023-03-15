import 'bootstrap/dist/css/bootstrap.min.css';
//import React, { useState } from 'react';
//import { BrowserRouter as Routes, Router, Switch, Route } from 'react-router-dom';
//import { Router } from 'react-router-dom';
import Navbar from './components/navbar.js';
import HomePage from './components/home-page.js';
//import TravelInspo from './components/travel-inspo.js';
//import FlightResults from './components/flight-results.js';
//import Favorites from './components/favorite-list.js';


function App() {
  return (

    <>
      <Navbar />
      <HomePage />
      </>

);
};
export default App;