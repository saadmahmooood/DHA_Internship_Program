import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Form from './components/Form';
import StudentList from './components/AdminInterviewScreen';
import FinalResult from './components/Result';
import StudentDashboard from './components/StudentDashboard';
import ExcelTest from './components/ExcelTest';
import MCQTest from './components/MCQTest';
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MCQTest />} />
        <Route path="/screen-two" elNPMement={<Form />} />
  
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main />);
