import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Eventscon.css";

function Eventscon() {
  const [festData, setFestData] = useState([]);
  const [selectedFest, setSelectedFest] = useState(null);

  useEffect(() => {
    // Fetch fest data from the backend API
    axios
      .get("http://localhost:8000/fests")
      .then((response) => {
        setFestData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fest data:", error);
      });
  }, []);

  const handleFestClick = (fest) => {
    setSelectedFest(fest);
  };

  return (
    <div className="fest-container">
      <h2 className="fest-heading">College Festivals</h2>
      <div className="fest-grid">
        {festData.map((fest) => (
          <div
            key={fest.id}
            className="fest-item"
            onClick={() => handleFestClick(fest)}
          >
            <div className="fest-card">
              <div className="fest-card-front">
                <img
                  src="https://soe.cusat.ac.in/images/demo/about-us.png"
                  alt="vi"
                  className="fest-image"
                />
              </div>
              <div className="fest-card-back">
                <h3 className="fest-name">{selectedFest.name}</h3>
                <p className="fest-description">{fest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventscon;
