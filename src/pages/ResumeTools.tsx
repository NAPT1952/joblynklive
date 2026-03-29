import React, { useState } from 'react';

const ResumeTools = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
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

  const ResumePreview = () => (
    <div id="resume-content" style={{ background: 'white', padding: '40px', fontFamily: 'Georgia, serif', maxWidth: '700px', margin: '0 auto', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <div style={{ borderBottom: '3px solid #0f172a', paddingBottom: '20px', marginBottom: '20px' }}>
        <h1 style={{ color: '#0f172a', fontSize: '2rem', margin: '0 0 8px 0' }}>{form.name}</h1>
        <p style={{ color: '#b45309', fontWeight: '600', fontSize: '1.1rem', margin: '0 0 8px 0' }}>{form.position}</p>
        <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0 }}>
          📧 {form.email} | 📞 {form.phone} | 📍 {form.location}
        </p>
      </div>

      {form.summary && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#0f172a', fontSize: '1.1rem', borderBottom: '1px solid #fbbf24', paddingBottom: '4px', marginBottom: '10px' }}>PROFESSIONAL SUMMARY</h2>
          <p style={{ color: '#334155', lineHeight: '1.7' }}>{form.summary}</p>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0f172a', fontSize: '1.1rem', borderBottom: '1px solid #fbbf24', paddingBottom: '4px', marginBottom: '10px' }}>PROFESSIONAL EXPERIENCE</h2>
        <p style={{ color: '#334155', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{form.experience}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#0f172a', fontSize: '1.1rem', borderBottom: '1px solid #fbbf24', paddingBottom: '4px', marginBottom: '10px' }}>CORE SKILLS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {form.skills.split(',').map((skill, i) => (
            <span key={i} style={{ background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', color: '#0f172a' }}>{skill.trim()}</span>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ color: '#0f172a', fontSize: '1.1rem', borderBottom: '1px solid #fbbf24', paddingBottom: '4px', marginBottom: '10px' }}>EDUCATION</h2>
        <p style={{ color: '#334155', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{form.education}</p>
      </div>
    </div>
  );

  const CoverLetterPreview = () => (
    <div style={{ background: 'white', padding: '40px', fontFamily: 'Georgia, serif', maxWidth: '700px', margin: '0 auto', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <p style={{ color: '#475569', marginBottom: '20px' }}>{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <p style={{ marginBottom: '20px' }}>Dear Hiring Manager,</p>
      <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#334155' }}>
        I am writing to express my strong interest in the <strong>{form.position}</strong> position. With my background in {form.skills.split(',').slice(0, 3).join(', ')}, I am confident in my ability to make a significant contribution to your organization.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#334155' }}>
        Throughout my career, I have developed expertise in {form.experience.substring(0, 150)}... This experience has equipped me with the skills necessary to excel in this role and deliver exceptional results.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '16px', color: '#334155' }}>
        I am particularly drawn to this opportunity as it aligns perfectly with my professional goals and expertise. I am excited about the possibility of bringing my unique skills and experience to your team.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '24px', color: '#334155' }}>
        Thank you for considering my application. I look forward to the opportunity to discuss how my background and skills would be an asset to your organization.
      </p>
      <p style={{ marginBottom: '8px' }}>Sincerely,</p>
      <p style={{ fontWeight: '700', color: '#0f172a' }}>{form.name}</p>
      <p style={{ color: '#475569', fontSize: '0.9rem' }}>{form.phone} | {form.email}</p>
    </div>
  );

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Resume Builder</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>Professional resume and cover letter in minutes!</p>

        {/* Steps indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {['Personal', 'Experience', 'Preview'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: step > i + 1 ? '#16a34a' : step === i + 1 ? '#2563eb' : '#e2e8f0', color: step >= i + 1 ? 'white' : '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span style={{ color: step === i + 1 ? '#2563eb' : '#94a3b8', fontSize: '0.85rem' }}>{s}</span>
              {i < 2 && <div style={{ width: '40px', height: '2px', background: step > i + 1 ? '#16a34a' : '#e2e8f0' }} />}
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
                style={{ width: '100%', padding: '14px', background: !form.name ? '#e2e8f0' : '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Experience & Skills</h2>
              <textarea name="experience" placeholder="Work Experience *&#10;e.g. Restaurant Manager, Hotel Sunrise Mumbai (2020-2024)&#10;- Managed team of 20 staff&#10;- Improved guest satisfaction by 15%" value={form.experience} onChange={handle} rows={5} style={inputStyle} />
              <textarea name="skills" placeholder="Skills * (comma separated)&#10;e.g. Team Leadership, Cost Control, HACCP, Guest Service" value={form.skills} onChange={handle} rows={3} style={inputStyle} />
              <textarea name="education" placeholder="Education *&#10;e.g. Bachelor in Hospitality Management, Mumbai University, 2015" value={form.education} onChange={handle} rows={2} style={inputStyle} />
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>← Back</button>
                <button onClick={() => setStep(3)} disabled={!form.experience || !form.skills}
                  style={{ flex: 2, padding: '14px', background: !form.experience ? '#e2e8f0' : 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>
                  Preview Resume →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>✅ Your Resume is Ready!</h2>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>📄 Resume Preview</h3>
                <ResumePreview />
              </div>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>✉️ Cover Letter Preview</h3>
                <CoverLetterPreview />
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={() => window.print()}
                  style={{ flex: 1, padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>
                  🖨️ Print / Save as PDF
                </button>
                <button onClick={() => setStep(1)}
                  style={{ flex: 1, padding: '14px', background: 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>
                  🔄 Start New
                </button>
              </div>
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginTop: '16px' }}>
                Use your browser's Print function to save as PDF
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTools;