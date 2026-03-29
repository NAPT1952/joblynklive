import React, { useState } from 'react';

const ResumeTools = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: '',
    email: '',
    skills: '',
    experience: ''
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '900px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Resume Builder</h1>

        {/* STEP INDICATOR */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          Step {step} of 2
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handle}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handle}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />

            <button
              onClick={() => setStep(2)}
              style={{
                padding: '10px 20px',
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Next →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
              <textarea
                name="skills"
                placeholder="Skills (comma separated)"
                value={form.skills}
                onChange={handle}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
              />

              <textarea
                name="experience"
                placeholder="Experience"
                value={form.experience}
                onChange={handle}
                style={{ width: '100%', padding: '10px' }}
              />

              <div style={{ marginTop: '10px' }}>
                <button onClick={() => setStep(1)} style={{ marginRight: '10px' }}>
                  ← Back
                </button>

                <button
                  onClick={() => window.print()}
                  style={{
                    padding: '10px 20px',
                    background: '#16a34a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                  }}
                >
                  🖨️ Download Resume
                </button>
              </div>
            </div>

            {/* PREVIEW */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
              <h2>{form.name || "Your Name"}</h2>
              <p>{form.email}</p>

              <h3>Skills</h3>
              <ul>
                {form.skills.split(',').map((s, i) => (
                  <li key={i}>{s.trim()}</li>
                ))}
              </ul>

              <h3>Experience</h3>
              <p>{form.experience}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeTools;