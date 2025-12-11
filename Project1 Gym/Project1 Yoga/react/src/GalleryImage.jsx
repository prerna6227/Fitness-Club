
import React from 'react';
import './Style.css';

const GalleryImage = ({ image }) => {
  return (
    <div className="gallery-image">
      <img src={image} alt="Yoga Gallery" />
    </div>
  );
};

export default GalleryImage;
