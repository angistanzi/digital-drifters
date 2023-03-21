
import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./components/home-page.js";
import TravelInspo from "./components/travel-inspo.js";
import FlightResults from "./components/flight-results.js";
=======
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";npm 
import Navbar from "./components/navbar.jsx";
import Home from "./components/home-page.jsx";
//import TravelInspo from "./components/travel-inspo.js";
//import FlightResults from "./components/flight-results.js";

>>>>>>> f4a385dad5aea136101907ae204ff204aeae5e87


<<<<<<< HEAD
import FlightFilter from './components/flight-filter.js';
import Favorites from "./components/favorite-list.js";
=======
//import Favorites from "./components/favorite-list.js";
>>>>>>> f4a385dad5aea136101907ae204ff204aeae5e87

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
