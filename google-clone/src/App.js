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

      {/* <Router>
        <Switch>
          <Route path='/search'>
            <h1>Hello World</h1>
            <Home/>
          </Route>

        </Switch>
        

      </Router> */}
      

    </div>

    

    // Home page
    // search page - results page
  );
}

export default App;
