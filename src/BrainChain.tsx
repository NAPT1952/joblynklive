import React from 'react';
import { Link } from 'react-router-dom';

// Define the pages array - make sure you have 9 pages here
const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
  { name: 'Team', path: '/team' },
  { name: 'FAQ', path: '/faq' }
];

const BrainChain: React.FC = () => {
  return (
    <div className="brain-chain">
      {pages.map((page) => (
        <Link to={page.path} key={page.name} className="brain-link">
          <div className="brain-icon">
            {/* PROFESSIONAL: Actual brain.jpg image instead of SVG */}
            <img 
              src="/public/images/brain.jpg" 
              alt={page.name}
              width="50" 
              height="50" 
              style={{ 
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s ease-in-out'
              }} 
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <span className="page-name" style={{ 
            display: 'block', 
            textAlign: 'center', 
            marginTop: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {page.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BrainChain;
