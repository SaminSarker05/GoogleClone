import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header-left'>
          <Link to="about">about</Link>

        </div>
        <div className='home-header-right'>
          hello world

        </div>

      </div>
      <div className='home-body'></div>
      

    </div>
  )
}

export default Home;