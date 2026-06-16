import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './index.css';

const Navbar = () => {
  const location = useLocation(); // Tracks which path is currently open to highlight the active menu choice

  return (
    <header className="portfolio-navbar">
      {/* Dynamic Link back to the main landing page dashboard */}
      <Link to="/" className="logo-text">
        Portfolio
      </Link>
      
      <ul className="nav-links">
        <li>
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/works" className={`nav-item ${location.pathname === '/works' ? 'active' : ''}`}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/experience" className={`nav-item ${location.pathname === '/experience' ? 'active' : ''}`}>
            Experience
          </Link>
        </li>
      </ul>

      {/* Direct outbound link for the phone trigger action */}
      <a href="tel:+25450476808" className="nav-phone-btn">
        <span className="phone-icon">
          <Phone size={14} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </span>
        <span className="phone-number">+254 50476808</span>
      </a>
    </header>
  );
};

export default Navbar;