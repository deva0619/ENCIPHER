import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="nav-logo">MovieBooking</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
