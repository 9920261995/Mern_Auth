import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigate from './Router';
import BaseLayout from './Layout/BaseLayout';

function App() {
  return (
    <Router>
      
      <BaseLayout/>
      <Navigate />
    </Router>

  );
}

export default App;
