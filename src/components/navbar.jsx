import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImg from "../assets/logo.png";
import "bootstrap/dist/js/bootstrap.js";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ height: "80px" }}
    >

      <a className="navbar-brand display-5 fw-bold" href="/"> 
        <img src={logoImg} alt="logo" height="100" />
      </a>
      <h1 className="display-4 fw-bold mb-5" style={{
          fontFamily: '"Pacifico", cursive',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#f4e04dff',
          textAlign: 'center',
          paddingTop:50,
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
        }}>Digital <span style={{ color: '#f4e04dff' }}>Drifters</span></h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse ml-auto justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/travel-inspo">
              Travel Inspiration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/flight-filter">
              Flight Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/favorite-list">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
