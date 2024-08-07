import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Form from './components/Form';
import UserDash from './components/UserDash';
import StudentList from './components/AdminInterviewScreen';
import FinalResult from './components/Result';
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/screen-two" element={<Form />} />
        <Route path="/screen-three" element={<UserDash />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Main />);
