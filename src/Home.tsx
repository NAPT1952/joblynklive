$workingHome = @'
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ marginLeft: '180px' }}>
      {/* HERO BANNER */}
      <div style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 0',
        color: 'white'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,193,7,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        {/* TOP TEXT */}
        <div style={{ textAlign: 'center', zIndex: 2 }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Welcome to <span style={{ color: '#ffc107' }}>JobLynk</span>
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#cbd5e1'
          }}>
            Connect with India's Top Employers
          </p>
        </div>

        {/* BRAIN SECTION */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '40px',
          zIndex: 2
        }}>
          {/* Brain emoji (temporary until brain.jpg works) */}
          <div style={{
            width: '120px',
            height: '120px',
            backgroundColor: '#ffc107',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            border: '4px solid white',
            boxShadow: '0 0 30px rgba(255,193,7,0.5)',
            transform: 'scale(1)',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🧠
          </div>
          <p style={{ color: '#ffc107', fontSize: '14px' }}>Powered by AI</p>
        </div>

        {/* BUTTONS */}
        <div style={{
          display: 'flex',
          gap: '20px',
          zIndex: 2
        }}>
          <Link to="/pay" style={{
            backgroundColor: '#ffc107',
            color: '#0f172a',
            padding: '15px 40px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
            border: '2px solid #ffc107',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.borderColor = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffc107';
            e.currentTarget.style.borderColor = '#ffc107';
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
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#ffc107';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }}>
            Build Resume
          </Link>
        </div>

        {/* AI/BM Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          gap: '15px',
          color: '#ffc107',
          fontWeight: 'bold',
          fontSize: '16px',
          zIndex: 2
        }}>
          <span>AI</span>
          <span>BM</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
'@

# Save the file
$workingHome | Set-Content "src\pages\Home.tsx" -Force

Write-Host "✅ Home.tsx completely replaced with WORKING banner!" -ForegroundColor Green
Write-Host "🚀 Refresh your browser - you should NOW see a beautiful banner!" -ForegroundColor Yellow
