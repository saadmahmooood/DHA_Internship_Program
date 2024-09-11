import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentDashboard.css';
import avatar from '/avatar.png';
import hat from '/hat.png';
import bag from '/bag.png';
import test from '/test.png';
import result from '/result.png';

const StudentDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/me', {
          withCredentials: true // Include cookies with the request
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard-container">
      <div className="header">
        <img className="im" src="src/assets/images/logo.png" alt="DHA Logo" />
        <h1>DHA Internship Portal</h1>
        <img src={avatar} alt="Profile Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h4>{userData.username}</h4>
          <p>{userData.program}</p>
          <p>CGPA: {userData.cgpa}</p>
          <p>CNIC: {userData.CNIC}</p>
        </div>
      </div>

      <div className="banner">
        <div className="banner-content">
          <div className="welcome-message">
            <p className="date">September 4, 2023</p>
            <br />
            <br />
            <h1>Welcome back, {userData.username}!</h1>
            <p>Always stay updated in your student portal</p>
          </div>
        </div>
        <div className="banner-images">
          <img src={hat} alt="Hat" />
          <img src={avatar} alt="Avatar" />
          <img src={bag} alt="Bag" />
        </div>
      </div>
      <div className="main-content">
        <div className="best-of-luck">
          <h1>Best of luck!</h1>
          <div className="card-container">
            <div className="card test-card">
              <p>Test</p>
              <img src={test} alt="Test" />
              <button className="start-button">Start</button>
            </div>
            <div className="card result-card">
              <p>Result</p>
              <img src={result} alt="Result" />
              <button className="view-button">View</button>
            </div>
          </div>
        </div>
        <div className="daily-notice">
          <h1>Daily notice</h1>
          <div className="notice-card">
            <h4>Result Announcement</h4>
            <p>Result will be announced on 20th September</p>
          </div>
          <div className="notice-card">
            <h4>New Internship Opportunities</h4>
            <p>Check out the latest internship openings!</p>
          </div>
          <div className="notice-card">
            <h4>Workshop on AI</h4>
            <p>Join our workshop on AI and Machine Learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
