import React from "react";
import { Link } from "react-router-dom";
import "./Landingpage.css";
import img111 from "./CUSAT.png";
import img10 from "./katha.png";
import img11 from "./night.jpg";
import img12 from "./football.jpg";
import img13 from "./gallery13 (1).jpg";
import img14 from "./c-sis.jpg";

const LandingPage = () => {
  return (
    <div className="last">
      <div>
        <div className="landing-page">
          <div className="options-container">
            <Link to="/login" className="option-link">
              Login
            </Link>
          </div>
          <div className="options-container">
            <Link to="/register" className="option-link">
              Register
            </Link>
          </div>
          <div className="options-container">
            <Link to="/Adminlogin" className="option-link">
              Admin
            </Link>
          </div>
          <img src={img111} alt="img111" className="img" />
          <h1 className="landing">
            COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </h1>
        </div>

        <div className="njr">
          <div className="ney">
            <div className="msn first">
              <img src={img10} alt="img10" className="im" />
              <div className="over overleft">
                <div className="pa">
                  <h1>Cochin University of Science and Technology (CUSAT)</h1>
                </div>
              </div>
            </div>

            <div className="msn">
              <img src={img11} alt="img11" className="im" />
              <div className="over overleft">
                <div className="pa">
                  It was initially constituted as the University of Cochin
                  through an Act of Kerala Government on 10th July 1971.
                </div>
              </div>
            </div>

            <div className="msn">
              <img src={img12} alt="img12" className="im" />
              <div className="over overleft">
                <div className="pa">
                  The University of Cochin was re‐constituted as Cochin
                  University of Science and Technology (CUSAT) in February 1986.
                </div>
              </div>
            </div>

            <div className="msn">
              <img src={img13} alt="img13" className="im" />
              <div className="over overleft">
                <div className="pa">
                  its objectives as "promoting Graduate and Post‐Graduate
                  studies and Advanced Research in Applied Sciences, Technology,
                  Industry, Commerce, Management, and Social Sciences."
                </div>
              </div>
            </div>

            <div className="msn">
              <img src={img14} alt="img14" className="im" />
              <div className="over overleft">
                <div className="pa">
                  CUSAT is now a world-ranking university with the specific
                  purpose of developing higher education, emphasizing
                  post-graduate studies and research
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="as">
        <h3 className="b">News</h3>

        <ul className="marquee">
          <li className="news">
            RUSA invites Walk-in interview for the recruitment of Project
            Assistant & Post Doctoral Fellow.
          </li>
          <li className="news">
            Btech admissions first allotment is published.
          </li>
          <li className="news">
            CUSAT is ranked 37 in India as per the latest NIRF Ranking 2023
          </li>
          <li className="news">
            Cusat has been awarded 'A+' grade by the National Assessment and
            Accreditation Council (NAAC).
          </li>
          <li className="news">
            CUSAT has acquired tier-1 in NBA accreditation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
