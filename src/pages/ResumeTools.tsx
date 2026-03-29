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

  if (showPreview) {
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => setShowPreview(false)}>← Back</button>
        <button onClick={() => window.print()}>🖨️ Print</button>

        <h1>{form.name}</h1>
        <p>{form.email} | {form.phone}</p>
        <h2>{form.position}</h2>
        <p>{form.summary}</p>

        <h3>Experience</h3>
        <p>{form.experience}</p>

        <h3>Skills</h3>
        <p>{form.skills}</p>

        <h3>Education</h3>
        <p>{form.education}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Resume Builder</h1>

      {step === 1 && (
        <>
          <input name="name" placeholder="Name" onChange={handle} style={inputStyle}/>
          <input name="email" placeholder="Email" onChange={handle} style={inputStyle}/>
          <input name="phone" placeholder="Phone" onChange={handle} style={inputStyle}/>
          <input name="position" placeholder="Position" onChange={handle} style={inputStyle}/>

          <button onClick={() => setStep(2)}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <textarea name="experience" placeholder="Experience" onChange={handle} style={inputStyle}/>
          <textarea name="skills" placeholder="Skills" onChange={handle} style={inputStyle}/>
          <textarea name="education" placeholder="Education" onChange={handle} style={inputStyle}/>

          <button onClick={() => setStep(1)}>Back</button>
          <button onClick={() => setShowPreview(true)}>Preview</button>
        </>
      )}
    </div>
  );
};

export default ResumeTools;