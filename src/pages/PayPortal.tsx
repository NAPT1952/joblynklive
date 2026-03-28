import React, { useState } from 'react';

const PayPortal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', mobile: '', location: '', position: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Pay Portal</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '50px' }}>Choose your plan and submit your details. We'll deliver your documents within 24 hours.</p>

        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', minWidth: '280px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#0f172a', fontSize: '1.5rem', marginBottom: '8px' }}>White Plan</h2>
            <p style={{ fontSize: '3rem', fontWeight: '700', color: '#2563eb', margin: '20px 0' }}>₹49</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>✅ Professional Resume</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>✅ Cover Letter</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>✅ 20 Employer Contacts</li>
              <li style={{ padding: '8px 0' }}>✅ One-time service</li>
            </ul>
            <a href="https://pages.razorpay.com/joblynk49" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '14px', background: '#2563eb', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', textAlign: 'center' }}>Pay ₹49</a>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '24px', padding: '40px', minWidth: '280px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', border: '2px solid #b45309', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-12px', right: '20px', background: '#fbbf24', color: '#0f172a', padding: '4px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' }}>Most Popular</span>
            <h2 style={{ color: '#fbbf24', fontSize: '1.5rem', marginBottom: '8px' }}>Gold Plan</h2>
            <p style={{ fontSize: '3rem', fontWeight: '700', color: '#fbbf24', margin: '20px 0' }}>₹99</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#e2e8f0' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>✨ AI-Optimized Resume</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>✨ AI-Optimized Cover Letter</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #334155' }}>✨ 50 Premium Employer Contacts</li>
              <li style={{ padding: '8px 0' }}>✨ Priority Support</li>
            </ul>
            <a href="https://pages.razorpay.com/joblynk99" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', textAlign: 'center' }}>Pay ₹99</a>
          </div>
        </div>

        {submitted ? (
          <div style={{ background: '#dcfce7', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h2 style={{ color: '#166534' }}>Details Submitted!</h2>
            <p style={{ color: '#166534' }}>We'll email your documents to {form.email} within 24 hours.</p>
          </div>
        ) : (
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Your Details</h2>
            <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="email" placeholder="Email Address" value={form.email} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="location" placeholder="Location (City & State)" value={form.location} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="position" placeholder="Position Applied For" value={form.position} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <button onClick={() => setSubmitted(true)} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>Submit Details</button>
            <p style={{ marginTop: '16px', color: '#94a3b8', fontSize: '0.85rem', textAlign: 'center' }}>No Refund Policy applies. All digital sales are final.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayPortal;