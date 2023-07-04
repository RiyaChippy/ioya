import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import Menu from "../components/Home/Menu";
import Footers from "../components/Home/Footers";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Perform your authentication check here
    const isAuthenticated = checkAuthentication(); // Replace with your actual authentication logic
    setLoggedIn(isAuthenticated);
  }, []);

  const checkAuthentication = () => {
    // Replace this with your actual authentication logic
    // For example, you could check if the user has a valid token or session
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
    return !!token; // Return true if token exists, false otherwise
  };

  if (!loggedIn) {
    // Redirect to login or show an error message if user is not logged in
    return <div>You are not logged in.</div>;
  }

  return (
    <div className="App1">
      <Header />
      <Menu />
      <Footers />
    </div>
  );
};

export default Home;
