import React, { useState, useEffect } from 'react';
import './ExcelTest.css';

const ExcelTest = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes timer
  const [file, setFile] = useState(null);

  useEffect(() => {
    let timer = null;
    if (timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div className="excel-test-container">
      <div className="test-header">
        <h1>Excel Test</h1>
        <div className="timer">
          <span>Time Left:</span>
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>
      <div className="image-section">
        <img src="/uploaded-image.png" alt="Excel Problem" className="test-image" />
        <a href="/uploaded-image.png" download="ExcelProblem.png" className="download-link">
          Download Excel Problem
        </a>
      </div>
      <div className="upload-section">
        <h2>Upload Your Screenshot</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
        {file && (
          <div className="uploaded-file">
            <p><strong>Selected File:</strong> {file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExcelTest;
