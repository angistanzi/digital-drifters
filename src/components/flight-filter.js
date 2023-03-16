import React, { useState } from "react";

function FlightFilter({ onFilter }) {
    const [departureTime, setDepartureTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [price, setPrice] = useState("");
  return (
    <div>
      <h3>Filter Flights</h3>
      <div>
        <label>Departure Time:</label>
        <input type="text" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
      </div>
    
    </div>
  );
}

export default FlightFilter;
