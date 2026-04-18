import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign up form submitted! Thank you for registering.');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#0f172a' }}>Sign Up</h1>
      <p style={{ textAlign: 'center', color: '#64748b' }}>Create your JobLynk account</p>
      
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name</label>
          <input type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input type="email" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone Number</label>
          <input type="tel" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
          <input type="password" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
        </div>
        
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Already have an account? <Link to="/contact" style={{ color: '#2563eb' }}>Contact us</Link>
      </p>
    </div>
  );
};

export default SignUp;