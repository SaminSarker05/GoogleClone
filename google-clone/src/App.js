import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<div>Search Page</div>}/>
      </Routes>     

    </div>

    // Home page
    // search page - results page
  );
}

export default App;
