import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import "../style/home.css";

function Home() {
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>Movie Ticket Booking</h1>
          <p>Book your favorite movies instantly</p>
          <button onClick={() => history.push("/movies")}>
            View Movies
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
