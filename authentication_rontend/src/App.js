import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigate from './Router';
import BaseLayout from './Layout/BaseLayout';
import dotenv from 'dotenv'



function App() {
  dotenv.config()
  return (
    <Router>
      
      <BaseLayout/>
      <Navigate />
    </Router>

  );
}

export default App;
