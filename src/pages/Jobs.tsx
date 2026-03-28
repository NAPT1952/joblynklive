import React from 'react';

const Jobs = () => {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px' }}>Job Opportunities</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' }}>Find your next career opportunity in hospitality, operations and more.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Restaurant Manager', company: 'Hotel Sunrise', location: 'Mumbai', type: 'Full Time' },
            { title: 'Catering Supervisor', company: 'EventWorks India', location: 'Delhi', type: 'Full Time' },
            { title: 'Front Office Executive', company: 'Grand Plaza Hotel', location: 'Bangalore', type: 'Full Time' },
            { title: 'Cruise Hospitality Staff', company: 'Oceanic Cruises', location: 'Kochi', type: 'Contract' },
            { title: 'F&B Manager', company: 'Spice Route Resort', location: 'Goa', type: 'Full Time' },
            { title: 'Housekeeping Supervisor', company: 'Taj Properties', location: 'Chennai', type: 'Full Time' },
          ].map((job, i) => (
            <div key={i} style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ color: '#0f172a', fontSize: '1.2rem', marginBottom: '8px' }}>{job.title}</h3>
              <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '4px' }}>{job.company}</p>
              <p style={{ color: '#64748b', marginBottom: '4px' }}>📍 {job.location}</p>
              <span style={{ background: '#e6f0ff', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{job.type}</span>
              <button style={{ display: 'block', width: '100%', marginTop: '16px', padding: '10px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
