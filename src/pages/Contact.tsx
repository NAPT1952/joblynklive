import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Contact Us</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>We respond within 24 hours.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#0f172a', borderRadius: '16px', padding: '24px', color: 'white' }}>
            <h3 style={{ color: '#fbbf24', marginBottom: '12px' }}>🌐 Web Master</h3>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Nigel Thomas</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>📧 joblynklive@gmail.com</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>📞 +91 97693 51231</p>
          </div>
          <div style={{ background: '#0f172a', borderRadius: '16px', padding: '24px', color: 'white' }}>
            <h3 style={{ color: '#fbbf24', marginBottom: '12px' }}>💾 Data Engineer</h3>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Das</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>📧 Das8369372112@gmail.com</p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>📞 +91 83693 72112</p>
          </div>
        </div>
        {submitted ? (
          <div style={{ background: '#dcfce7', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h2 style={{ color: '#166534' }}>Message Sent!</h2>
            <p style={{ color: '#166534' }}>We'll respond within 24 hours.</p>
          </div>
        ) : (
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="email" placeholder="Email" value={form.email} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handle} rows={5} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <button onClick={() => setSubmitted(true)} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>Send Message</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Contact;