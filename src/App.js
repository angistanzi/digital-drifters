import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import HomePage from "./components/home-page.jsx";
import TravelInspo from "./components/travel-inspo.js";
import FlightFilter from "./components/flight-filter";
import Favorites from "./components/favorite-list.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-pacifico";

function App() {
  return (
    <div>
    <div className="content-container">
    <Router>
      
        <Navbar />

        <Routes basename="/Digital-Drifters/">
          <Route path="/" element={<HomePage />} />

          <Route path="/flight-filter" element={<FlightFilter />} />
          <Route path="/travel-inspo" element={<TravelInspo />} />

          <Route path="/favorite-list" element={<Favorites />} />
        </Routes>
     
    </Router>
    </div>
    <footer className="footer--pin py-3 text-center "
     style={{
      backgroundColor: '#f2ed6fff',
      fontFamily: '"Pacifico", cursive',
      fontSize: '1rem',
      color: '#587792ff',
      textAlign: 'center',
      paddingTop:50,
      textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
    }}
    >
        Digital Drifters &copy; 2023
      </footer>
    </div>
  );
}

export default App;
