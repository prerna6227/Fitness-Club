
import React from 'react';
import './Style.css';

const ProgramCard = ({ image, title, description, duration, level }) => {
  return (
    <div className="program-card">
      <img src={image} alt={title} className="program-image" />
      <div className="program-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="program-meta">
          <span>{duration}</span>
          <span>•</span>
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
