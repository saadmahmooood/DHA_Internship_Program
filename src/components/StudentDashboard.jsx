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
                  
            <div className="header">
            <img className="im" src="src/assets/images/logo.png" alt="DHA Logo" />
            <h1>DHA Internship Portal</h1>
                    <img src={avatar} alt="Profile Avatar" className="profile-avatar" />
                    <div className="profile-info">
                        <h4>Saad Mahmood</h4>
                        <p>BS Software Engineering</p>
                        <p>CGPA: 3.5</p>
                        <p>CNIC: 35202-1936584-7</p>
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
}

export default StudentDashboard;
