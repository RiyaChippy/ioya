import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='heading'>
        <h1 className='h1'>Student Portal</h1>
      </div>
      <div className='header-links'>
        <Link to="/CourseDetails" className="header-link">Course Details</Link>
        <Link to="/hostel" className="header-link">Hostel</Link>
        <Link to="/events" className="header-link">Events</Link>
        <Link to="/Post" className="header-link">Posts</Link>
        <Link to="/others" className="header-link">Others</Link>
      </div>
    </div>
  );
};

export default Header;
