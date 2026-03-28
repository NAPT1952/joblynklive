import React, { useState } from 'react';

const EmployerPortal = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: '', recruiter: '', email: '', roles: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Employer Portal</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '50px' }}>Access ready-to-apply candidates for your open positions.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {[
            { icon: '👤', title: 'Candidate Name', desc: 'Full verified name' },
            { icon: '📍', title: 'Location', desc: 'City and region' },
            { icon: '📞', title: 'Contact Details', desc: 'Phone and email' },
            { icon: '📄', title: 'Resume Ready', desc: 'Professional format' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#ffffff', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
              <h3 style={{ color: '#0f172a', marginBottom: '4px' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          <div style={{ background: '#dcfce7', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h2 style={{ color: '#166534' }}>Request Submitted!</h2>
            <p style={{ color: '#166534' }}>We'll email the candidate list to {form.email} within 24 hours.</p>
          </div>
        ) : (
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Request Candidate List</h2>
            <input name="company" placeholder="Company Name" value={form.company} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="recruiter" placeholder="Recruiter Name" value={form.recruiter} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="email" placeholder="Work Email" value={form.email} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <input name="roles" placeholder="Roles Hiring For" value={form.roles} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
            <button onClick={() => setSubmitted(true)} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>Request Candidate List</button>
            <p style={{ marginTop: '16px', color: '#94a3b8', fontSize: '0.85rem', textAlign: 'center' }}>Data shared for recruitment purposes only. Ethical use required.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default EmployerPortal;