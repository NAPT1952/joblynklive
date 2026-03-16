import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ marginLeft: '180px' }}>
      {/* HERO BANNER */}
      <div style={{
        height: '100vh',
        backgroundImage: 'url(/public/images/aibm.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '100%'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}></div>

        {/* CONTENT */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 0'
        }}>
          
          {/* TOP - Welcome Text */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1 style={{
              fontSize: '64px',
              fontWeight: '800',
              color: 'white',
              marginBottom: '10px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Welcome to <span style={{ color: '#ffc107' }}>JobLynk</span>
            </h1>
            <p style={{
              fontSize: '24px',
              color: 'white',
              opacity: 0.9
            }}>
              Connect with India's Top Employers
            </p>
          </div>

          {/* BOTTOM - Brain Image and Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            marginBottom: '80px'
          }}>
            
            {/* BRAIN IMAGE */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              border: '4px solid #ffc107',
              boxShadow: '0 0 30px rgba(255, 193, 7, 0.7)',
              overflow: 'hidden',
              backgroundColor: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/public/images/brain.jpg"
                alt="Brain"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '🧠';
                    parent.style.fontSize = '60px';
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                  }
                }}
              />
            </div>

            {/* BUTTONS */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/pay" style={{
                backgroundColor: '#ffc107',
                color: '#0f172a',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                border: '2px solid #ffc107',
                cursor: 'pointer'
              }}>
                Get Started
              </Link>
              <Link to="/builder" style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                border: '2px solid #ffc107',
                cursor: 'pointer'
              }}>
                Build Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
