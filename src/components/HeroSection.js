import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/health.mp4' autoPlay loop muted />  
      <h1>Virtual Healthcare</h1>
      <br></br>
      <div className='hero-container1'>
      <p>When you need it the most</p>
      <p>For Anyone, Anywhere at Anytime</p>
      
      </div>
    </div>
    
  );
}

export default HeroSection;
