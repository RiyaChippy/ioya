import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      console.log(res);
      navigate("/Home");
    } catch (err) {
      console.log(err);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="background-container">
      <div className="blur-effect"></div>
      <div className="con">
        <div className="box">
          <h2 className="ba">Login</h2>

          <form>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label>Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
            <button className="but" onClick={handleLogin}>
              Login
            </button>
            <br />
            <br />
            <p className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
