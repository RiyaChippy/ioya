import React from 'react';
import { Link } from 'react-router-dom';
import "./Landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <div className="options-container">
        <Link to="/login" className="option-link">Login</Link>
        <Link to="/register" className="option-link">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
