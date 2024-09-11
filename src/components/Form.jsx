import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const Form = () => {
  const [formValues, setFormValues] = useState({
    phoneNumber: '',
    district: '',
    address: '',
    fatherName: '',
    fatherCnic: '',
    dob: '',
    cgpa: '',
    degree: '',
    university: '',
    intermediateMarks: '',
    college: '',
    passportPic: null,
    transcriptPdf: null,
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  const handleCheckboxChange = (e) => {
    setFormValues({ ...formValues, termsAccepted: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/application/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <img className="im" src="src/assets/images/logo.png" alt="DHA Logo" />
      <div className="form-left">
        <h1>Personal Information</h1>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <div className="phone-group">
            <select id="country-code" name="countryCode" onChange={handleInputChange}>
              <option value="+92">+92</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              placeholder="X XXXXXXXXX"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="district">District</label>
          <select id="district" name="district" value={formValues.district} onChange={handleInputChange}>
            <option value="">Select District</option>
            <option value="District 1">District 1</option>
            <option value="District 2">District 2</option>
            <option value="District 3">District 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="1"
            placeholder="Enter address"
            value={formValues.address}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="father-name">Father's Name</label>
          <input
            type="text"
            id="father-name"
            name="fatherName"
            placeholder="Enter father's name"
            value={formValues.fatherName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="father-cnic">Father's CNIC</label>
          <input
            type="text"
            id="father-cnic"
            name="fatherCnic"
            placeholder="XXXXX XXXXXXX X"
            value={formValues.fatherCnic}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formValues.dob}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-right">
        <h1 className='right'>Academic Information</h1>
        <div className="form-group">
          <label htmlFor="cgpa">CGPA</label>
          <input
            type="text"
            id="cgpa"
            name="cgpa"
            placeholder="e.g. 3.52"
            value={formValues.cgpa}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <select id="degree" name="degree" value={formValues.degree} onChange={handleInputChange}>
            <option value="">Select Degree</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="university">University</label>
          <select id="university" name="university" value={formValues.university} onChange={handleInputChange}>
            <option value="">Select University</option>
            <option value="University 1">University 1</option>
            <option value="University 2">University 2</option>
            <option value="University 3">University 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="intermediate-marks">Intermediate Marks</label>
          <input
            type="text"
            id="intermediate-marks"
            name="intermediateMarks"
            placeholder="e.g. 1000"
            value={formValues.intermediateMarks}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <select id="college" name="college" value={formValues.college} onChange={handleInputChange}>
            <option value="">Select College</option>
            <option value="College 1">College 1</option>
            <option value="College 2">College 2</option>
            <option value="College 3">College 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group file-group">
          <label htmlFor="passport-pic">Passport Size Picture</label>
          <input type="file" id="passport-pic" name="passportPic" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="form-group file-group">
          <label htmlFor="transcript-pdf">Transcript PDF</label>
          <input type="file" id="transcript-pdf" name="transcriptPdf" accept="application/pdf" onChange={handleFileChange} />
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" name="termsAccepted" checked={formValues.termsAccepted} onChange={handleCheckboxChange} />
          <label htmlFor="terms" className="terms-label">
            I do accept the <a href="#">Terms and Conditions</a> of your site.
          </label>
        </div>
        <button className="btn" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
