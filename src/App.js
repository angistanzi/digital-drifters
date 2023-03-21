
import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";npm 
import Navbar from "./components/navbar.jsx";
import Home from "./components/home-page.jsx";
//import TravelInspo from "./components/travel-inspo.js";
//import FlightResults from "./components/flight-results.js";


// import FlightFilter from './components/flight-filter.js';
// import Favorites from './components/favorite-list.js';

//import Favorites from "./components/favorite-list.js";

import "bootstrap/dist/css/bootstrap.min.css";

/* function App() {
  return (
    <Router>
      <div>
        <Navbar />
      
        <Routes basename="/Digital-Drifters/">
   
          <Route path="/" element={<Home />} />

          <Route path="/flight-results" element={<FlightResults />} />
          <Route path="/travel-inspo" element={<TravelInspo />} />


          <Route path="/favorite-list" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
} */

function App() {
  return (
    
      <div>
        <Navbar />
      
   
   
      <Home />

      </div>

  );
}
export default App;
