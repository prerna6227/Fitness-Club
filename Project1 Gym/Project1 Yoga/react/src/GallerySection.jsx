
import React from 'react';
import GalleryImage from './GalleryImage';
import './Style.css';

const GallerySection = () => {
  const images = [
    'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://plus.unsplash.com/premium_photo-1661776042506-9154882ba689?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://media.istockphoto.com/id/1400779943/photo/asian-indian-woman-performing-yoga-asana-or-meditation-in-tree-position.webp?a=1&b=1&s=612x612&w=0&k=20&c=9OWOitxwUhiFYaeRo9Lc8b3Vn1tE4WAeTyC5nDwJC3Y=',
    'https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://plus.unsplash.com/premium_photo-1679596990747-d32c550a8fc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://plus.unsplash.com/premium_photo-1679596990747-d32c550a8fc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    'https://plus.unsplash.com/premium_photo-1682088303560-7ca6d57af561?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYSUyMGdyb3VwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
    'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYSUyMGdyb3VwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
    'https://plus.unsplash.com/premium_photo-1679596990169-b6381b972db8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYSUyMGdyb3VwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
    'https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvZ2ElMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'
  ];

  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <GalleryImage key={index} image={img} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
