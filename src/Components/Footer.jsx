import React from 'react';
import { Link } from 'react-router-dom'; // Crucial update for multi-page handling
import './index.css'; 

export default function Footer() {

  // Smooth scroll directly to the very top of the page canvas on route shifts
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        
        {/* BRAND COLUMN */}
        <div className="footer-column brand-col">
          <h2 className="footer-logo">Robinson<span>.</span></h2>
          <p className="footer-tagline">Building digital solutions through process design and clean aesthetics.</p>
          <a href="mailto:robinkipkorir@gmail.com" className="footer-email-link">
            robinkipkorir@gmail.com
          </a>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div className="footer-column links-col">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link to="/" className="footer-nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-nav-item">
                Services
              </Link>
            </li>
            <li>
              <Link to="/works" className="footer-nav-item">
                Works
              </Link>
            </li>
            <li>
              <Link to="/experience" className="footer-nav-item">
                Experience
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT COLUMN WITH SOCIAL ICONS */}
        <div className="footer-column links-col">
          <h3 className="footer-heading">Connect</h3>
          <div className="footer-social-icons">
            
            {/* LINKEDIN ICON */}
            <a href="https://www.linkedin.com/in/robin-kipkorir-551633272/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* GITHUB ICON */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* X (TWITTER) */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* WHATSAPP */}
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.482 5.341 1.483 5.434 0 9.854-4.417 9.857-9.854.001-2.63-1.023-5.101-2.885-6.964C17.038 1.956 14.561 .932 11.999.931 6.566.931 2.145 5.351 2.142 10.787c-.001 2.077.549 4.11 1.595 5.922l-.999 3.648 3.734-.979zm11.187-5.182c-.303-.152-1.797-.887-2.077-.988-.28-.102-.483-.152-.686.152-.204.304-.787 1.013-.965 1.216-.178.203-.355.228-.658.076-.304-.152-1.282-.473-2.442-1.508-.903-.805-1.512-1.8-1.689-2.105-.178-.304-.019-.469.133-.62.137-.136.304-.354.457-.532.152-.177.203-.304.304-.506.102-.203.051-.38-.025-.532-.076-.152-.686-1.653-.94-2.259-.247-.595-.5-.515-.686-.525-.177-.01-.38-.01-.583-.01-.203 0-.533.076-.812.38-.28.304-1.066 1.039-1.066 2.532s1.092 2.938 1.244 3.141c.152.203 2.15 3.284 5.208 4.602.727.314 1.293.501 1.734.641.73.232 1.393.2 1.917.123.585-.087 1.797-.735 2.051-1.444.253-.709.253-1.317.178-1.444-.076-.127-.28-.203-.584-.355z"/>
              </svg>
            </a>

            {/* FACEBOOK */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM UTILITY BAR */}
      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} Robinson. All rights reserved.</p>
        <a href="#" onClick={scrollToTop} className="back-to-top-btn">
          Back to top 
          <span className="arrow-up">↑</span>
        </a>
      </div>
    </footer>
  );
}
