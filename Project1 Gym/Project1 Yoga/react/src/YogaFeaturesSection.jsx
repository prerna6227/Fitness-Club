

import React from 'react';
import FeatureCard from './FeatureCard';
import { FaPeace, FaLeaf,  FaCouch } from 'react-icons/fa'; 

import './Style.css';

const YogaFeaturesSection = () => {
  const features = [
    {
      icon: <FaPeace />,
      title: 'Peace of Mind',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Unde temporibus.'
    },
    {
      icon: <FaLeaf />,
      title: 'Mindfulness',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Unde temporibus.'
    },

    {
      icon: <FaCouch />,
      title: 'Yoga Carpet',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Unde temporibus.'
    },
  ];

  return (
    <section className="yoga-features">
      <h2>Yoga Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default YogaFeaturesSection;
