
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/home-page.js';
import TravelInspo from './components/travel-inspo.js';
import FlightResults from './components/flight-results.js';
import Favorites from './components/favorite-list.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename='/Digital-Drifters/'>
          {/* Define a default route that will render the Home component */}
          <Route path='/' element={<Home />} />
          {/* Define routes using the Route component to render different page components at different paths */}
          <Route path='/flight-results' element={<FlightResults />} />
          <Route path='/travel-inspo' element={<TravelInspo />} />
          {/* Define a route that will have descendant routes */}
          <Route path='/favorite-list' element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

