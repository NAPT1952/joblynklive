import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px' }}>Simple, Affordable Pricing</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '50px' }}>One-time payment. No subscriptions. No hidden fees.</p>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', minWidth: '280px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#0f172a', fontSize: '1.8rem', marginBottom: '8px' }}>White</h2>
            <p style={{ fontSize: '3rem', fontWeight: '700', color: '#2563eb', margin: '20px 0' }}>₹49</p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>✅ Professional Resume</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>✅ Cover Letter</li>
              <li style={{ padding: '8px 0' }}>✅ 1 Updated Employee Data List</li>
            </ul>
            <Link to="/payportal" style={{ display: 'block', padding: '14px', background: '#2563eb', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '600' }}>Get Started</Link>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '24px', padding: '40px', minWidth: '280px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', border: '2px solid #b45309' }}>
            <h2 style={{ color: '#fbbf24', fontSize: '1.8rem', marginBottom: '8px' }}>Gold</h2>
            <p style={{ fontSize: '3rem', fontWeight: '700', color: '#fbbf24', margin: '20px 0' }}>₹99</p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px', color: '#e2e8f0' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>✨ AI-Optimized Resume</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>✨ AI-Optimized Cover Letter</li>
              <li style={{ padding: '8px 0' }}>✨ Premium Employer Data List</li>
            </ul>
            <Link to="/payportal" style={{ display: 'block', padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '600' }}>Get Started</Link>
          </div>
        </div>
        <p style={{ marginTop: '40px', color: '#94a3b8', fontSize: '0.9rem' }}>No Refund Policy applies. All digital sales are final.</p>
      </div>
    </div>
  );
};
export default Pricing;
