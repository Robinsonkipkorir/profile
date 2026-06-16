import React from 'react';
import './index.css';
import profilePic from '../assets/pic1.jpeg';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* BRANDING & NAVIGATION HEADER */}
     

      {/* THREE-COLUMN HERO GRID */}
      <div className="hero-grid">
        
        {/* LEFT COLUMN */}
        <div className="hero-left">
          <h1 className="hero-title">
            Hey There,<br />I'm Robinson
          </h1>
          <p className="hero-email">robinkipkorir@gmail.com</p>
          
          <div className="experience-stat">
            <span className="stat-number">10</span>
            <span className="stat-label">Years<br />Experience</span>
          </div>
        </div>

        {/* CENTER COLUMN (THE LAYERING) */}
        <div className="brush-container">
          <div className="teal-brush"></div>
          <img 
            src={profilePic} 
            alt="Robinson Profile" 
            className="Profile-img"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right">
          <div>
            <h3 className="section-subtitle">What do I help?</h3>
            <p className="hero-description">
              I will help you with finding a solution and solve your problems. 
              We use process design to create digital products. Besides that, 
              also help their business.
            </p>
          </div>
          
          {/* Circular Certification Badge */}
          <div className="certification-badge">
            <span className="badge-icon">🏅</span>
            <span className="badge-title">IDF CERTIFIED</span>
            <span className="badge-subtitle">UI/UX Designer</span>
          </div>
        </div>

      </div>
    </section>
  );
}