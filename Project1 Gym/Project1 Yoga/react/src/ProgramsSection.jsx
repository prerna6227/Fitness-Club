
import React from 'react';
import ProgramCard from './ProgramCard';
import './Style.css';

const ProgramsSection = () => {
  const programs = [
    {
      image: "https://media.istockphoto.com/id/1147024617/photo/girl-doing-yoga-with-folded-palms-in-prayer-namaste-sitting-on-a-mat-in-the-yoga-studio-soft.webp?a=1&b=1&s=612x612&w=0&k=20&c=DF4N-sYPuhgzm4f8gzacIubZwF3SnIGssH0kXOm5nzw=",
      title: 'Embrace Your Edge',
      description: 'Healthy Mind With Yoga',
      duration: '20 min',
      level: 'Beginner',
    },
    {
      image: "https://media.istockphoto.com/id/1315856341/photo/young-woman-meditating-outdoors-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=AOSCus5JOM3azhJpIQAwllBsoyDbna9CS_3RFlckmzQ=",
      title: 'Yoga to Build Resilience',
      description: 'Stronger With Each Stretch',
      duration: '30 min',
      level: 'Advanced',
    },
    {
      image: "https://images.unsplash.com/photo-1556816723-1ce827b9cfbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHlvZ2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      title: 'Rest & Shine',
      description: 'Relax and Rejuvenate',
      duration: '25 min',
      level: 'Intermediate',
    },
    {
      image: "https://media.istockphoto.com/id/485387392/photo/warrior-pose-from-yoga.webp?a=1&b=1&s=612x612&w=0&k=20&c=PqZ6j4aiilka8qEq7UUng89WA4koAsAbi6UGvnL8b1k=",
      title: 'Bend & Stretch',
      description: 'Mental Health + Body Mobility',
      duration: '40 min',
      level: 'All levels',
    },
   
  ];

  return (
    <section className="programs-section">
      <h2>Our Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
