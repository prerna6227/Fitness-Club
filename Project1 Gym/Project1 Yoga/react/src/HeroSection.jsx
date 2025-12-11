
import React from 'react';


const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="hero-container"
      
    >
      <div className="hero-text">
        <h5>{subtitle}</h5>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
