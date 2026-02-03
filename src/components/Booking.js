import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../style/Booking.css";

function Booking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showDate, setShowDate] = useState("");
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const history = useHistory();

  const seatRows = {
    A: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
    B: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"],
    C: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"],
    D: ["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
    E: ["E1", "E2", "E3", "E4", "E5", "E6", "E7"],
    F: ["F1", "F2", "F3", "F4", "F5", "F6", "F7"],
    G: ["G1", "G2", "G3", "G4", "G5", "G6", "G7"]
  };

  const toggleSeat = seat => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleProceed = () => {
    if (!showDate) {
      alert("Please select a show date");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    isLoggedIn
      ? history.push("/payment", { seats: selectedSeats })
      : history.push("/login", { seats: selectedSeats });
  };

  return (
    <div className="booking-container">
      <h2>Select Your Seats</h2>

      <input
        type="date"
        value={showDate}
        onChange={e => setShowDate(e.target.value)}
      />

      <div className="seat-layout">
        {Object.keys(seatRows).map(row => (
          <div key={row} className="seat-row">
            <span className="row-label">{row}</span>

            {seatRows[row].map(seat => (
              <button
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button className="proceed-btn" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
}

export default Booking;
