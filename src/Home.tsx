$correctHome = @'
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ marginLeft: '180px' }}>
      {/* BANNER with aibm background */}
      <div style={{
        height: '100vh',
        backgroundImage: 'url(/images/aibm.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        {/* Dark overlay for text visibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}></div>

        {/* TOP - Welcome Text */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center', 
          marginTop: '60px' 
        }}>
          <h1 style={{ 
            fontSize: '64px', 
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Welcome to <span style={{ color: '#ffc107' }}>JobLynk</span>
          </h1>
          <p style={{ 
            fontSize: '24px', 
            marginTop: '10px',
            opacity: 0.9
          }}>
            Connect with India's Top Employers
          </p>
        </div>

        {/* BOTTOM - Brain Image and Buttons */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '30px',
          marginBottom: '80px'
        }}>
          
          {/* BRAIN.JPG */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '20px',
            border: '4px solid #ffc107',
            overflow: 'hidden',
            boxShadow: '0 0 30px rgba(255,193,7,0.5)',
            backgroundColor: '#fff'
          }}>
            <img 
              src="/images/brain.jpg"
              alt="Brain"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:60px;background:#ffc107;">🧠</div>';
              }}
            />
          </div>

          {/* BUTTONS */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/pay" style={{
              backgroundColor: '#ffc107',
              color: '#000',
              padding: '12px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              border: '2px solid #ffc107'
            }}>
              Get Started
            </Link>
            <Link to="/builder" style={{
              backgroundColor: 'transparent',
              color: '#fff',
              padding: '12px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              border: '2px solid #ffc107'
            }}>
              Build Resume
            </Link>
          </div>
        </div>

        {/* AI/BM at bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 2,
          display: 'flex',
          gap: '15px',
          color: '#ffc107',
          fontWeight: 'bold'
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
$correctHome | Set-Content "src\pages\Home.tsx" -Force
Write-Host "✅ Home.tsx updated with CORRECT banner structure!" -ForegroundColor Green
