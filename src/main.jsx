import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Form from './components/Form';
import StudentDashboard from './components/StudentDashboard';
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/screen-two" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main />);
