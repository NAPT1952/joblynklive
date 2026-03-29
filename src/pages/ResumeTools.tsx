import React, { useState } from 'react';

const ResumeTools = () => {
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
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Resume Builder</h1>

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
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />

      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h2>{form.name || "Your Name"}</h2>
        <p>{form.email}</p>

        <h3>Skills</h3>
        <p>{form.skills}</p>

        <h3>Experience</h3>
        <p>{form.experience}</p>
      </div>
    </div>
  );
};

export default ResumeTools;