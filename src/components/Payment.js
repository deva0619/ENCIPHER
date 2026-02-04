import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/payment.css";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const location = useLocation();
  const seats = location.state?.seats || [];

  const seatPrice = 190;
  const totalAmount = seats.length * seatPrice;

  const handlePayment = () => {
    if (cardNumber === "" || expiry === "" || cvv === "") {
      alert("Please enter all card details");
      return;
    }

    alert(`Payment successfully completed!.. Rs.${totalAmount}`);
  };

  return (
    <div className="payment-container">
      <h2>Proceed Your Payment here..</h2>

      <h3>Total Seats: {seats.length}</h3>
      <h3>Amount/Seat: Rs.190</h3>
      <h3>Total Amount: Rs.{totalAmount}</h3>

      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}
      />

      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        value={expiry}
        onChange={e => setExpiry(e.target.value)}
      />

      <input
        type="password"
        placeholder="CVV"
        value={cvv}
        onChange={e => setCvv(e.target.value)}
      />

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
