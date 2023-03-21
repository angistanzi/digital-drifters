import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from '../assets/logo.png';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ height: "80px" }}>
      <a className="navbar-brand" href="home-page.jsx">
        <img src={logoImg} alt="logo" height="50" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/travel-inspo">Travel Inspiration</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/flight-results">Flight Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/favorite-list">Favorites</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;




