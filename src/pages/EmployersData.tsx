import React from 'react';

const EmployersData = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#2563eb' }}>Employer Portal</h1>
      <p>Welcome to the Employer Portal. This page is now live!</p>
      <p>To post job openings, contact: <strong>joblynklive@gmail.com</strong></p>
      <button 
        onClick={() => alert('Contact us at joblynklive@gmail.com')}
        style={{
          background: '#2563eb',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Post a Job
      </button>
    </div>
  );
};

export default EmployersData;
