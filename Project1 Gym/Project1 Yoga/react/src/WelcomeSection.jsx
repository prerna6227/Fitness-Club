import React from 'react';



const WelcomeSection = ({ 
  imageUrl, 
  title, 
  subtitle, 
  description, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section className="welcome-section">
      <div className="image-container  ">
        <img src={imageUrl} alt="Yoga" />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        
        <p>{description}</p>
        <a href={buttonLink} className="cta-button">{buttonText}</a>
      </div>
    </section>
  );
};

export default WelcomeSection;
