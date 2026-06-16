import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Works from './Components/Works';
import Footer from './Components/Footer'; // Fixed path: Added dot (.) and Components subfolder
import Experience from './Components/Experience';

export default function App() {
  return (
    <Router>
      {/* Navbar stays outside so it's always at the top of every page */}
      <Navbar />
      
      <Routes>
        {/* Home Route: Displays ONLY the Hero component */}
        <Route path="/" element={<Hero />} />
        
        {/* Services Route: Displays ONLY the Services component */}
        <Route path="/services" element={<Services />} />

        {/*Adds the layout path for the Works page */}
        <Route path="/works" element={<Works />} />

        {/* Experience Route: Displays ONLY the Experience component */}
        <Route path="/experience" element={<Experience />} />
      </Routes>

      {/* Global Footer: Placed down here outside Routes so it renders globally at the bottom */}
      <Footer />
    </Router>
  );
}