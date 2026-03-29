import React, { useState } from 'react';

const ResumeTools = () => {
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '',
    position: '', experience: '', skills: '', education: '', summary: ''
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%', padding: '12px', marginBottom: '16px',
    borderRadius: '8px', border: '1px solid #e2e8f0',
    boxSizing: 'border-box' as const, fontSize: '1rem'
  };

  const Resume = () => (
    <div id="resume-content" style={{ fontFamily: 'Georgia, serif', maxWidth: '750px', margin: '0 auto', padding: '40px', background: 'white', color: '#1a1a1a' }}>
      <div style={{ borderBottom: '3px solid #b45309', paddingBottom: '20px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 8px', color: '#0f172a' }}>{form.name}</h1>
        <p style={{ color: '#b45309', fontWeight: '600', fontSize: '1.1rem', margin: '0 0 8px' }}>{form.position}</p>
        <p style={{ color: '#475569', margin: 0, fontSize: '0.9rem' }}>
          📧 {form.email} &nbsp;|&nbsp; 📞 {form.phone} &nbsp;|&nbsp; 📍 {form.location}
        </p>
      </div>

      {form.summary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.1rem', color: '#b45309', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px' }}>PROFESSIONAL SUMMARY</h2>
          <p style={{ lineHeight: '1.7', color: '#334155' }}>{form.summary}</p>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.1rem', color: '#b45309', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px' }}>PROFESSIONAL EXPERIENCE</h2>
        <p style={{ lineHeight: '1.7', color: '#334155', whiteSpace: 'pre-wrap' }}>{form.experience}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.1rem', color: '#b45309', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px' }}>CORE SKILLS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {form.skills.split(',').map((s, i) => (
            <span key={i} style={{ background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', color: '#0f172a' }}>{s.trim()}</span>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.1rem', color: '#b45309', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px' }}>EDUCATION</h2>
        <p style={{ lineHeight: '1.7', color: '#334155' }}>{form.education}</p>
      </div>
    </div>
  );

  const CoverLetter = () => (
    <div style={{ fontFamily: 'Georgia, serif', maxWidth: '750px', margin: '0 auto', padding: '40px', background: 'white', color: '#1a1a1a' }}>
      <p style={{ marginBottom: '20px' }}>{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <p style={{ marginBottom: '20px' }}>Dear Hiring Manager,</p>
      <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
        I am writing to express my strong interest in the <strong>{form.position}</strong> position. With my background in {form.skills.split(',')[0]?.trim()} and {form.skills.split(',')[1]?.trim()}, I am confident I would be a valuable addition to your team.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
        {form.summary || `Throughout my career, I have developed strong expertise in ${form.skills.split(',').slice(0, 3).join(', ')}. My experience includes ${form.experience.substring(0, 150)}...`}
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
        I am particularly drawn to this opportunity as it aligns perfectly with my professional goals and expertise. I am confident that my skills and dedication would make a meaningful contribution to your organization.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
        Thank you for considering my application. I look forward to the opportunity to discuss how my experience can benefit your team.
      </p>
      <p>Sincerely,</p>
      <p style={{ fontWeight: '700', marginTop: '8px' }}>{form.name}</p>
      <p style={{ color: '#475569', fontSize: '0.9rem' }}>{form.phone} | {form.email}</p>
    </div>
  );

  if (showPreview) {
    return (
      <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <button onClick={() => setShowPreview(false)} style={{ padding: '10px 24px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>← Edit</button>
            <button onClick={() => window.print()} style={{ padding: '10px 24px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>🖨️ Print / Save PDF</button>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '24px' }}>
            <h2 style={{ color: '#0f172a', marginBottom: '20px', textAlign: 'center' }}>📄 Resume</h2>
            <Resume />
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#0f172a', marginBottom: '20px', textAlign: 'center' }}>✉️ Cover Letter</h2>
            <CoverLetter />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Resume Builder</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>Fill in your details and get a professional resume instantly!</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {['Personal', 'Experience', 'Preview'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: step > i + 1 ? '#16a34a' : step === i + 1 ? '#2563eb' : '#e2e8f0', color: step >= i + 1 ? 'white' : '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span style={{ color: step === i + 1 ? '#2563eb' : '#94a3b8', fontSize: '0.85rem' }}>{s}</span>
              {i < 2 && <div style={{ width: '30px', height: '2px', background: step > i + 1 ? '#16a34a' : '#e2e8f0' }} />}
            </div>
          ))}
        </div>

        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          {step === 1 && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Personal Information</h2>
              <input name="name" placeholder="Full Name *" value={form.name} onChange={handle} style={inputStyle} />
              <input name="email" placeholder="Email Address *" value={form.email} onChange={handle} style={inputStyle} />
              <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handle} style={inputStyle} />
              <input name="location" placeholder="City, State *" value={form.location} onChange={handle} style={inputStyle} />
              <input name="position" placeholder="Position Applying For *" value={form.position} onChange={handle} style={inputStyle} />
              <textarea name="summary" placeholder="Professional Summary (optional)" value={form.summary} onChange={handle} rows={3} style={inputStyle} />
              <button onClick={() => setStep(2)} disabled={!form.name || !form.email || !form.position}
                style={{ width: '100%', padding: '14px', background: !form.name || !form.email || !form.position ? '#e2e8f0' : '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Experience & Skills</h2>
              <textarea name="experience" placeholder="Work Experience (e.g. Restaurant Manager at Hotel Sunrise, Mumbai - 3 years. Managed 20 staff, improved guest satisfaction by 15%)" value={form.experience} onChange={handle} rows={5} style={inputStyle} />
              <textarea name="skills" placeholder="Skills separated by commas (e.g. Team Leadership, Cost Control, HACCP, Guest Service)" value={form.skills} onChange={handle} rows={3} style={inputStyle} />
              <textarea name="education" placeholder="Education (e.g. Bachelor in Hospitality Management, Mumbai University, 2010)" value={form.education} onChange={handle} rows={2} style={inputStyle} />
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>← Back</button>
                <button onClick={() => setShowPreview(true)} disabled={!form.experience || !form.skills}
                  style={{ flex: 2, padding: '14px', background: !form.experience || !form.skills ? '#e2e8f0' : 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>
                  ✨ Generate Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTools;