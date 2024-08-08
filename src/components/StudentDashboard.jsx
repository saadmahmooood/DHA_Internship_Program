import React from 'react';
import './StudentDashboard.css';
import avatar from '/avatar.png';
import hat from '/hat.png';
import bag from '/bag.png';
import test from '/test.png';
import result from '/result.png';

const StudentDashboard = () => {
    return (
        <div className="dashboard-container">
                   <img className="im" src="src/assets/images/logo.png" alt="DHA Logo" />
            <div className="header">
 
                <div className="profile-section">
                    <img src={avatar} alt="Profile Avatar" className="profile-avatar" />
                    <div className="profile-info">
                        <h4>Saad Mahmood</h4>
                        <p>BS Software Engineering</p>
                    </div>
                </div>
            </div>
   
            <div className="banner">
                <div className="banner-content">
                    
                    <div className="welcome-message">
                    <p className="date">September 4, 2023</p>
                    <br></br>
                    <br></br>
                        <h1>Welcome back, Saad!</h1>
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
                    <h3>Best of luck!</h3>
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
                    <h3>Daily notice</h3>
                    <div className="notice-card">
                        <h4>Result Announcement</h4>
                        <p>Result will be announced on 20th September</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
