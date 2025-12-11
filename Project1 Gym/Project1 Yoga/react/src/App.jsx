
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import './Style.css'
import WelcomeSection from './WelcomeSection';
import YogaFeaturesSection from './YogaFeaturesSection';
import ProgramsSection from './ProgramsSection';
import GallerySection from './GallerySection';
import Footer from './Footer';








function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection 
        title="Welcome To Yogalife" 
        subtitle="Yoga for Everybody" 
        
      />

      <WelcomeSection 
        imageUrl="Images\img_1.jpg"  
        title="Welcome To Yogalife"
        subtitle="HELLO THERE"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delenti odio laboriosam in recusandae expedita ducimus, deserunt, ad maxime voluptas voluptatem ex qui quam saepe debitis dolorum!"
        buttonText="See The Yoga Pricing"
        buttonLink="#pricing"
      />
     
      <YogaFeaturesSection />
      <ProgramsSection />
      <GallerySection />

       <Footer year={2025} author="Colorlib" />

         

      

      
     


    </div>
  
);
}



export default App;

