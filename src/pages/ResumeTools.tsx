import React, { useState } from 'react';

const ResumeTools = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', skills: '', education: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Resume Builder</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>Fill in your details and we'll create your professional resume within 24 hours.</p>
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <div style={{ marginBottom: '20px' }}>
            {['Personal Info', 'Experience', 'Submit'].map((s, i) => (
              <span key={i} style={{ marginRight: '20px', fontWeight: step === i + 1 ? '700' : '400', color: step === i + 1 ? '#2563eb' : '#94a3b8', borderBottom: step === i + 1 ? '2px solid #2563eb' : 'none', paddingBottom: '4px' }}>{i + 1}. {s}</span>
            ))}
          </div>
          {step === 1 && (
            <div>
              <input name="name" placeholder="Full Name" value={form.name} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <input name="email" placeholder="Email" value={form.email} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <input name="position" placeholder="Position Applying For" value={form.position} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <button onClick={() => setStep(2)} style={{ width: '100%', padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Next →</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <textarea name="experience" placeholder="Work Experience (company, role, years)" value={form.experience} onChange={handle} rows={4} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <textarea name="skills" placeholder="Key Skills" value={form.skills} onChange={handle} rows={3} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <textarea name="education" placeholder="Education" value={form.education} onChange={handle} rows={2} style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>← Back</button>
                <button onClick={() => setStep(3)} style={{ flex: 2, padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Next →</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
              <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>Details Submitted!</h2>
              <p style={{ color: '#64748b', marginBottom: '30px' }}>Your resume and cover letter will be emailed to <strong>{form.email}</strong> within 24 hours.</p>
              <p style={{ color: '#64748b' }}>Questions? Email us at <strong>joblynklive@gmail.com</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ResumeTools;
