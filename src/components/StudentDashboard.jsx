import React from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header-section">
        <div className="profile-section">
          <img src="/avatar.png" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2>Saad Mahmood</h2>
            <p>BS Software Engineering</p>
            <p>CGPA: 3.8</p>
            <p>CNIC: 12345-6789012-3</p>
          </div>
        </div>
        <button className="logout-button">Logout</button>
      </div>
      <div className="banner">
        <div className="banner-content">
          <div className="banner-date">September 4, 2023</div>
          <div className="banner-text">
            <h1>Welcome back, Saad!</h1>
            <p>Always stay updated in your student portal</p>
          </div>
          <div className="banner-images">
            <img src="/bag.png" alt="Bag" className="banner-image" />
            <img src="/avatar.png" alt="Avatar" className="avatar-large" />
            <img src="/hat.png" alt="Hat" className="banner-image" />
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="main-content">
          <div className="best-of-luck">
            <h3>Best of luck!</h3>
            <div className="cards">
              <div className="card">
                <img src="/test.png" alt="Test" />
                <button className="start-button">Start</button>
              </div>
              <div className="card">
                <img src="/result.png" alt="Result" />
                <button className="view-button">View</button>
              </div>
            </div>
          </div>
          <div className="daily-notice">
            <div className="notice-card">
              <h4>Daily Notice</h4>
              <p className="notice-title">Result Announcement</p>
              <p className="notice-description">Result will be announced on 20th September</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
