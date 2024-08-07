import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Form from './components/Form';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import StudentList from './components/AdminInterviewScreen';
import ExcelTest from './components/ExcelTest';
import FinalResult from './components/Result';
import MCQTest from './components/MCQTest';
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/screen-two" element={<Form />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main />);
