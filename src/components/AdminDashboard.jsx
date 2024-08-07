import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header-section">
        <div className="banner">
          <div className="banner-text">
            <h1>Welcome, Admin!</h1>
            <p>Manage and conduct interviews efficiently</p>
          </div>
          <div className="banner-images">
            <img src="/bag.png" alt="Bag" className="banner-image" />
            <img src="/avatar.png" alt="Avatar" className="avatar" />
            <img src="/hat.png" alt="Hat" className="banner-image" />
          </div>
        </div>
        <div className="date-logout">
          <p>September 4, 2023</p>
          <button className="logout-button">Logout</button>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="profile-section">
          <img src="/avatar.png" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2>Admin Name</h2>
            <p>Admin</p>
          </div>
        </div>
        <div className="main-content">
          <div className="manage-interviews">
            <h3>Manage Interviews</h3>
            <div className="cards">
              <div className="card">
                <img src="/interview.png" alt="Conduct Interview" />
                <button className="start-button">Conduct Interview</button>
              </div>
            </div>
          </div>
          <div className="daily-notice">
            <div className="notice-card">
              <h4>Daily Notice</h4>
              <p className="notice-title">Interview Schedule</p>
              <p className="notice-description">Review the interview schedule for the day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
