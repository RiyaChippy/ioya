import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Register.css'


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/register", {
        name: name,
        email: email,
        password: password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='con'>
      <div className='box'>
        <h2 className="ba">Register</h2>
        <form>
          <label>user</label>
          <input required type='text' name='username' placeholder='enter the username' onChange={handleNameChange} />
          <label>email</label>
          <input required type='email' name='email' placeholder='enter the email' onChange={handleEmailChange} />
          <label>password</label>
          <input required type='password' name='password' placeholder='enter the password' onChange={handlePasswordChange} />
          <button className='but' onClick={handleClick}>Register</button>
          
          <br />
          <br />
          
          <p className="register-link">you have an accound<Link to="/">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;