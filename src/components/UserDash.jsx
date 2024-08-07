import React from 'react';
import './userdash.css';
const UserDash = () => {
    return (
        <div className="dashboard">
            <header className="header">
                <h1>User Dashboard</h1>
            </header>
            <div className="profile">
                <img src="https://via.placeholder.com/150" alt="User" className="profile-image" />
                <div className="profile-details">
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>CNIC:</strong> **********</p>
                    <p><strong>Status:</strong> to be announced</p>
                </div>
            </div>
            <div className="button-container">
                <button className="dashboard-button">Test</button>
                <button className="dashboard-button">Result</button>
                <button className="dashboard-button">Any</button>
            </div>
        </div>
    );
};

export default UserDash;
