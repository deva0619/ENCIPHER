import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "../style/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const seats = location.state?.seats || [];

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("Enter username and password");
      return;
    }

    dispatch({
      type: "LOGIN",
      payload: { username }
    });

    history.push("/payment", { seats });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Proceed</button>
      </div>
    </div>
  );
}

export default Login;
