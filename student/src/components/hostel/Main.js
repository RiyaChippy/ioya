import React from 'react';
import "./Main.css";
import img7 from "./hosel2.jpg";


const Main = () => {
  return (
    <div className="app2">
      <div className="head">
        <h2>Hostels</h2>
        <div className="para">
          <p>Higher education is what takes a nation to the next level. The COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY is one of the leading universities in India with a notable position in the list of world universities. A large number of qualified students from all over India and even from abroad seek admission to this esteemed institution every year. Of these students, the lion’s share is not day scholars and hence seek admission to our hostels also. Providing safe and clean lodgings with quality facilities and providing them with healthy and nutritious food is a real challenge.</p>
          <p>The COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY has 14 hostels to satisfy this need. Each hostel has at least one Assistant warden, who is a faculty member, at least one Manager (for boys’ hostel) or Matron (for Girls’ hostel) and two to four sweeper-cum-cleaners. To facilitate the overall administration of all these hostels and to cater to the time-to-time needs of the students as well as the management of the above staff, the CENTRAL OFFICE FOR UNIVERSITY HOSTELS was set up with the CHIEF WARDEN as the Head of the office.</p>
          <p>Hostels as residential units foster community living and provide security for students, who cannot live alone or even in small groups in unfamiliar circumstances. There are 14 hostels under the control of the CENTRAL OFFICE FOR UNIVERSITY HOSTELS. Out of the 14, 8 are Boys Hostels and 6 are Girls Hostels. All these 13 hostels are under the direct control of this office. All hostels are surrounded by greenery and have good ventilation. In all hostels mess hall, TV, Playgrounds, etc. are provided.</p>
        </div>
        <div className="container1">
          <div className="image7-container1">
            <img src={img7} alt="img7" className="image7" />
          </div>
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
