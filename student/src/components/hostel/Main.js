import React from "react";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="background"></div>
      <div className="background-texture"></div>

      <section className="carousel">
        <h2 className="categories__title">HOSTEL</h2>
        <div className="carousel__container">
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/sagar.png"
              alt="hos1"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">Sagar Hostel</h4>
              <h6 className="carousel-item__details--subtitle">ad</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/WhatsApp_Image_2022-09-24_at_8.34.55_AM_6.jpeg"
              alt="hos2"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">Siberia Hostel</h4>
              <h6 className="carousel-item__details--subtitle">fa</h6>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/Anaswara.png"
              alt="hos3"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">Anaswara Hostel</h4>
              <h6 className="carousel-item__details--subtitle">azd</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/Sahara.png"
              alt="hos4"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">Sahara Hostel</h4>
              <h6 className="carousel-item__details--subtitle">cfs</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/Ananya.png"
              alt="hos5"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">Ananya Hostel</h4>
              <h6 className="carousel-item__details--subtitle">dsf</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/Anagha.png"
              alt="hos6"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">Anagha Hostel</h4>
              <h6 className="carousel-item__details--subtitle">afdd</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://hostels.cusat.ac.in/media/Alakananda.png"
              alt="hos7"
            />
            <div className="carousel-item__details">
              <div className="controls">
                <span className="fas fa-play-circle"></span>
                <span className="fas fa-plus-circle"></span>
              </div>
              <h4 className="carousel-item__details--title">
                {" "}
                Alakananda Hostel
              </h4>
              <h6 className="carousel-item__details--subtitle">ds</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
