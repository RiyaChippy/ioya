import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

const Main = () => {
  const [sahara, setSahara] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    axios
      .get("http://localhost:8000/sahara")
      .then((response) => {
        setSahara(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section>
      <div className="product-list">
        {sahara.map((product) => (
          <div className="product-item" key={product.id}>
            <div className="product-card">
              <div
                className={`product-cover item-${product.id}`}
                style={{
                  backgroundImage: `url("https://hostels.cusat.ac.in/media/Sahara.png")`,
                }}
              >
                <h1>{product.name}</h1>
                <span className="product-price">${product.price}</span>
                <div className="product-card-back">
                  {/* Additional content for the back of the card */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
