import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './loginsignup.css';

const LoginSignup = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    CNIC: '',
    password: '',
    cpswd: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', userData);
      console.log("Signup successful:", response.data);
      navigate('/screen-two'); // Change to your desired screen after signup
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        CNIC: userData.CNIC,
        password: userData.password,
      });
      console.log("Login successful:", response.data);
      navigate('/screen-two'); // Change to your desired screen after login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="App">
      <img className="im" src="src/assets/images/logo.png" alt="Logo" />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">Signup</label>
            <input type="text" name="username" placeholder="User name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="CNIC" placeholder="CNIC" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="cpswd" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="text" name="CNIC" placeholder="CNIC" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
