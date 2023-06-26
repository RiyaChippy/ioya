import React from "react";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Hostel from "./pages/Hostel";
import "./App.css";
import Events from "./pages/Events";
import Post from "./pages/Post";
import Landingpage from "./pages/Landingpage";
import Adminlogin from "./components/Admin/Adminlogin";
import AdminDashboard from "./components/Admin/AdminDasbboard";
import Other from "./pages/Other";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/Admin/dashboard" element={<AdminDashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Others" element={<Other />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
