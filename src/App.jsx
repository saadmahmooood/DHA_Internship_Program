import React from 'react';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import MCQTest from './components/MCQTest';
import ExcelTest from './components/ExcelTest';

const App = () => {
  return (
    <div className="App">
      <AdminDashboard />
    </div>
  );
};

export default App;
