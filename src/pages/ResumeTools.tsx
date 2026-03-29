import React, { useState } from 'react';

const ResumeTools = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{resume: string, cover: string} | null>(null);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '',
    position: '', experience: '', skills: '', education: '', summary: ''
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateResume = async () => {
    setLoading(true);
    try {
      const prompt = `Create a professional resume and cover letter for:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Location: ${form.location}
Position Applying For: ${form.position}
Work Experience: ${form.experience}
Skills: ${form.skills}
Education: ${form.education}
Summary: ${form.summary}

Please provide:
1. A professional resume in plain text format
2. A professional cover letter

Format your response exactly as:
RESUME:
[resume content here]

COVER LETTER:
[cover letter content here]`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCHxm8iW6CXluvE6TOzfamNCvopElcEKQU`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );
      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      const resumePart = text.split('COVER LETTER:')[0].replace('RESUME:', '').trim();
      const coverPart = text.split('COVER LETTER:')[1]?.trim() || '';
      setResult({ resume: resumePart, cover: coverPart });
      setStep(4);
    } catch (err) {
      alert('Error generating resume. Please try again.');
    }
    setLoading(false);
  };

  const inputStyle = {
    width: '100%', padding: '12px', marginBottom: '16px',
    borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' as const,
    fontSize: '1rem'
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>
          AI Resume Builder
        </h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>
          Powered by Google Gemini AI — Get a professional resume in seconds!
        </p>

        {/* Progress Steps */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {['Personal Info', 'Experience', 'Generate', 'Result'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: step > i + 1 ? '#16a34a' : step === i + 1 ? '#2563eb' : '#e2e8f0',
                color: step >= i + 1 ? 'white' : '#94a3b8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '700', fontSize: '0.9rem'
              }}>{step > i + 1 ? '✓' : i + 1}</div>
              <span style={{ color: step === i + 1 ? '#2563eb' : '#94a3b8', fontSize: '0.85rem', display: window.innerWidth > 500 ? 'block' : 'none' }}>{s}</span>
              {i < 3 && <div style={{ width: '30px', height: '2px', background: step > i + 1 ? '#16a34a' : '#e2e8f0' }} />}
            </div>
          ))}
        </div>

        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Personal Information</h2>
              <input name="name" placeholder="Full Name *" value={form.name} onChange={handle} style={inputStyle} />
              <input name="email" placeholder="Email Address *" value={form.email} onChange={handle} style={inputStyle} />
              <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handle} style={inputStyle} />
              <input name="location" placeholder="City, State *" value={form.location} onChange={handle} style={inputStyle} />
              <input name="position" placeholder="Position Applying For *" value={form.position} onChange={handle} style={inputStyle} />
              <button onClick={() => setStep(2)} disabled={!form.name || !form.email || !form.position}
                style={{ width: '100%', padding: '14px', background: !form.name || !form.email || !form.position ? '#e2e8f0' : '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>
                Next →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>Experience & Skills</h2>
              <textarea name="experience" placeholder="Work Experience (e.g. Restaurant Manager at Hotel Sunrise, 3 years - managed 20 staff, improved guest satisfaction by 15%)" value={form.experience} onChange={handle} rows={4} style={inputStyle} />
              <textarea name="skills" placeholder="Key Skills (e.g. Team Leadership, Cost Control, HACCP, Guest Service, Excel)" value={form.skills} onChange={handle} rows={3} style={inputStyle} />
              <textarea name="education" placeholder="Education (e.g. Bachelor in Hospitality Management, Mumbai University, 2010)" value={form.education} onChange={handle} rows={2} style={inputStyle} />
              <textarea name="summary" placeholder="Brief summary about yourself (optional)" value={form.summary} onChange={handle} rows={2} style={inputStyle} />
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '14px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>← Back</button>
                <button onClick={() => setStep(3)} disabled={!form.experience || !form.skills}
                  style={{ flex: 2, padding: '14px', background: !form.experience || !form.skills ? '#e2e8f0' : '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🤖</div>
              <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>Ready to Generate!</h2>
              <p style={{ color: '#64748b', marginBottom: '12px' }}>Our AI will create:</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#334155' }}>
                <li style={{ padding: '8px 0' }}>✅ Professional Resume</li>
                <li style={{ padding: '8px 0' }}>✅ Tailored Cover Letter</li>
                <li style={{ padding: '8px 0' }}>✅ Optimized for {form.position}</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, padding: '14px', background: '#f1f5f9', color: '#0f172a', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>← Back</button>
                <button onClick={generateResume} disabled={loading}
                  style={{ flex: 2, padding: '14px', background: loading ? '#94a3b8' : 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>
                  {loading ? '⏳ Generating...' : '✨ Generate with AI'}
                </button>
              </div>
            </div>
          )}

          {/* Step 4 - Results */}
          {step === 4 && result && (
            <div>
              <h2 style={{ color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>✅ Your Documents Are Ready!</h2>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ color: '#0f172a', marginBottom: '12px', borderBottom: '2px solid #fbbf24', paddingBottom: '8px' }}>📄 Resume</h3>
                <pre style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.9rem', color: '#334155', lineHeight: '1.7' }}>
                  {result.resume}
                </pre>
              </div>