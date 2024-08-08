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
import ExcelTest from './components/ExcelTest';
import StudentDashboard from './components/StudentDashboard';
const Main = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/screen-two" element={<Form />} />

=======
        <Route path="/" element={<FinalResult/>} />
        <Route path="/screen-two" element={<StudentDashboard />} />
>>>>>>> 367ed555251ad5f8b44bbc759b0af90f4a956f90
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main />);
