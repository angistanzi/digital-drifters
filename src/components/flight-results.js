import React from "react";

function FlightResults() {

    return (
            // Return a JSX element that represents the search results page for a flight search
            <div>
            <h1 class="display-4 text-primary">Search Results</h1>  {/* Header for the search results page */}
            <div class="card">
              <img
                url="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                class="card-img-top"
                alt="Flight"/>  {/* Image of a flight */}
              <div class="card-header bg-primary text-white">
                <h2 class="h5">Flight 123</h2> {/* Flight number */}
                <p class="text-muted">Departure: 10:00 AM</p>   {/* Departure time */}
              </div>
              <div class="card-body">
                <p class="lead">$200</p>{/* Price of the flight */}               
              </div>
            </div>
          </div>
        );
      }

export default FlightResults;