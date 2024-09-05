// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import NextPage from './NextPage'; // Replace with your protected route component
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginSignup} />
      <ProtectedRoute path="/next-page" component={NextPage} />
      {/* Add more protected routes as needed */}
    </Switch>
  </Router>
);

export default App;
