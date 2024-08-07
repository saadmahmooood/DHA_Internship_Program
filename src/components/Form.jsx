import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className="container">
      <div className="form-left">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <div className="phone-group">
            <select id="country-code">
              <option value="+92">+92</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="text" id="phone-number" placeholder="X XXXXXXXXX" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="district">District</label>
          <select id="district">
            <option value="">Select District</option>
            <option value="District 1">District 1</option>
            <option value="District 2">District 2</option>
            <option value="District 3">District 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" rows="1" placeholder="Enter address"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="father-name">Father's Name</label>
          <input type="text" id="father-name" placeholder="Enter father's name" />
        </div>
        <div className="form-group">
          <label htmlFor="father-cnic">Father's CNIC</label>
          <input type="text" id="father-cnic" placeholder="XXXXX XXXXXXX X" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" />
        </div>
      </div>
      <div className="form-right">
        <h2>Academic Information</h2>
        <div className="form-group">
          <label htmlFor="cgpa">CGPA</label>
          <input type="text" id="cgpa" placeholder="e.g. 3.52" />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <select id="degree">
            <option value="">Select Degree</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="university">University</label>
          <select id="university">
            <option value="">Select University</option>
            <option value="University 1">University 1</option>
            <option value="University 2">University 2</option>
            <option value="University 3">University 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="intermediate-marks">Intermediate Marks</label>
          <input type="text" id="intermediate-marks" placeholder="e.g. 1000" />
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <select id="college">
            <option value="">Select College</option>
            <option value="College 1">College 1</option>
            <option value="College 2">College 2</option>
            <option value="College 3">College 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group file-group">
          <label htmlFor="passport-pic">Passport Size Picture</label>
          <input type="file" id="passport-pic" accept="image/*" />
        </div>
        <div className="form-group file-group">
          <label htmlFor="transcript-pdf">Transcript PDF</label>
          <input type="file" id="transcript-pdf" accept="application/pdf" />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="terms-label">
            I do accept the <a href="#">Terms and Conditions</a> of your site.
          </label>
        </div>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
