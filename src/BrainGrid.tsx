import React from 'react';
import { Link } from 'react-router-dom';
import './BrainGrid.css';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Pay Portal', path: '/payportal' },
  { name: 'Resume Tools', path: '/resumetools' },
  { name: 'Employers Data', path: '/employersdata' },
  { name: 'Sign Up', path: '/signup' },
  { name: 'Support', path: '/support' },
  { name: 'Disclaimer', path: '/disclaimer' },
];

const BrainGrid: React.FC = () => {
  return (
    <div className="brain-grid-container">
      <div className="brain-grid">
        {pages.map((page) => (
          <Link to={page.path} key={page.name} className="brain-card">
            <div className="brain-icon">
              {/* REPLACED SVG with actual brain.jpg image */}
              <img 
                src="/public/images/brain.jpg" 
                alt={page.name}
                width="80" 
                height="80"
                style={{
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '2px solid #ffc107'
                }}
              />
            </div>
            <span className="page-name">{page.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrainGrid;
