import React from 'react';

const SamplesVault = () => {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Samples Vault</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '50px' }}>Preview our resume, cover letter and employer data formats.</p>

        <div style={{ background: '#ffffff', borderRadius: '16px', padding: '32px', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h2 style={{ color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Sample Resume</h2>
          <p><strong>Candidate Name</strong></p>
          <p style={{ color: '#64748b', margin: '8px 0' }}>📧 candidate@email.com | 📞 +91 98765 43210 | 📍 Mumbai</p>
          <p style={{ marginTop: '16px' }}><strong>Professional Summary:</strong> Experienced hospitality manager with expertise in restaurant service, buffet setups, and event operations.</p>
          <p style={{ marginTop: '12px' }}><strong>Key Skills:</strong> Team leadership, cost control, guest service, Excel dashboards.</p>
          <p style={{ marginTop: '12px' }}><strong>Experience:</strong> Restaurant Manager at Hotel Sunrise (3 years), Catering Supervisor at EventWorks (2 years).</p>
          <p style={{ marginTop: '12px' }}><strong>Education:</strong> Bachelor's in Hospitality Management.</p>
          <p style={{ marginTop: '16px', color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>* Actual resume is delivered in professionally formatted Word/PDF document.</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '16px', padding: '32px', marginBottom: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h2 style={{ color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Sample Cover Letter</h2>
          <p>Dear Hiring Manager,</p>
          <p style={{ marginTop: '12px', lineHeight: '1.7', color: '#334155' }}>I am writing to express my interest in the position advertised. With extensive experience in hospitality and event operations, I bring strong leadership, cost control expertise, and guest-focused service. I am confident my skills align with your requirements.</p>
          <p style={{ marginTop: '12px', color: '#334155' }}>Thank you for considering my application.</p>
          <p style={{ marginTop: '12px' }}>Sincerely,<br /><strong>Candidate Name</strong></p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <h2 style={{ color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid #fbbf24', paddingBottom: '10px' }}>Employer Data Sample</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#0f172a', color: 'white' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Company</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Industry</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>City</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>HR Email</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hotel Sunrise', 'Hospitality', 'Mumbai', 'hr@hotelsunrise.com'],
                  ['EventWorks', 'Events', 'Delhi', 'careers@eventworks.in'],
                  ['Oceanic Cruises', 'Travel', 'Kochi', 'hr@oceaniccruises.com'],
                  ['Grand Plaza', 'Hospitality', 'Bangalore', 'jobs@grandplaza.in'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                    {row.map((cell, j) => <td key={j} style={{ padding: '12px', borderBottom: '1px solid #e2e8f0' }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '16px', color: '#94a3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>* Full employer data list with 100+ contacts is shared in Excel format after payment.</p>
        </div>
      </div>
    </div>
  );
};
export default SamplesVault;