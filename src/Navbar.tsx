import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav style={{ backgroundColor: '#0f172a', color: 'white', padding: '16px', borderBottom: '1px solid rgba(45,212,191,0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.02em', textDecoration: 'none', color: 'white' }}>
          JOB <span style={{ color: '#2dd4bf' }}>LINK</span>
        </Link>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#e2e8f0' }}>Home</Link>
          <Link to="/jobs" style={{ textDecoration: 'none', color: '#e2e8f0' }}>Jobs</Link>
          <Link to="/map" style={{ textDecoration: 'none', color: '#e2e8f0' }}>Map View</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#e2e8f0' }}>Contact Us</Link>
          
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} style={{ fontSize: '1.25rem', background: 'none', border: 'none', cursor: 'pointer' }}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* LOGIN button */}
          <button style={{
            backgroundColor: '#f0f4f9',
            color: '#1e2a36',
            border: '1px solid #d3dce6',
            borderRadius: '9999px',
            padding: '8px 24px',
            fontWeight: '600',
            fontSize: '0.95rem',
            boxShadow: '0 0 15px rgba(0,255,255,0.3)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.boxShadow = '0 0 25px cyan';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f4f9';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,255,0.3)';
          }}>
            LOGIN
          </button>

          {/* REGISTER button */}
          <button style={{
            backgroundColor: '#1e2a36',
            color: 'white',
            border: '1px solid #00ccbb',
            borderRadius: '9999px',
            padding: '8px 24px',
            fontWeight: '600',
            fontSize: '0.95rem',
            boxShadow: '0 0 20px #00ccbb',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2c4050';
            e.currentTarget.style.boxShadow = '0 0 35px #6ffff0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1e2a36';
            e.currentTarget.style.boxShadow = '0 0 20px #00ccbb';
          }}>
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
