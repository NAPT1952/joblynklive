import React, { useState } from 'react';

const jobs = [
  { title: 'Restaurant Manager', company: 'Hotel Sunrise', location: 'Mumbai', type: 'Full Time', salary: '₹35,000 - ₹50,000/month', desc: 'Manage daily restaurant operations, lead a team of 20+ staff, ensure guest satisfaction and cost control.', requirements: 'Min 3 years experience in F&B management, strong leadership skills.' },
  { title: 'Catering Supervisor', company: 'EventWorks India', location: 'Delhi', type: 'Full Time', salary: '₹25,000 - ₹35,000/month', desc: 'Supervise catering operations for corporate and social events across Delhi NCR.', requirements: 'Min 2 years catering experience, event management knowledge.' },
  { title: 'Front Office Executive', company: 'Grand Plaza Hotel', location: 'Bangalore', type: 'Full Time', salary: '₹20,000 - ₹30,000/month', desc: 'Handle guest check-in/check-out, reservations, and front desk operations.', requirements: 'Hotel management degree, good communication skills.' },
  { title: 'Cruise Hospitality Staff', company: 'Oceanic Cruises', location: 'Kochi', type: 'Contract', salary: '₹40,000 - ₹60,000/month', desc: 'Provide exceptional hospitality service aboard luxury cruise ships.', requirements: 'Valid passport, min 1 year hospitality experience, English fluency.' },
  { title: 'F&B Manager', company: 'Spice Route Resort', location: 'Goa', type: 'Full Time', salary: '₹40,000 - ₹55,000/month', desc: 'Oversee all food and beverage operations at a premium beach resort.', requirements: 'Min 4 years F&B management, resort experience preferred.' },
  { title: 'Housekeeping Supervisor', company: 'Taj Properties', location: 'Chennai', type: 'Full Time', salary: '₹22,000 - ₹32,000/month', desc: 'Supervise housekeeping team, maintain cleanliness standards across all floors.', requirements: 'Min 2 years housekeeping supervisory experience.' },
];

const Jobs = () => {
  const [selected, setSelected] = useState<typeof jobs[0] | null>(null);
  const [applied, setApplied] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApply = async () => {
    setSending(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3999d2fe-b27f-400a-b1aa-4e33cb921caf',
          subject: `New Job Application - ${selected?.title}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          job_title: selected?.title,
          company: selected?.company,
          message: `New application for ${selected?.title} at ${selected?.company}`
        })
      });
      if (response.ok) setApplied(true);
    } catch (err) {
      alert('Error sending. Please try again.');
    }
    setSending(false);
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px', textAlign: 'center' }}>Job Opportunities</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px', textAlign: 'center' }}>Click any job to view details and apply.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {jobs.map((job, i) => (
            <div key={i} onClick={() => { setSelected(job); setApplied(false); setForm({ name: '', email: '', phone: '' }); }}
              style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <h3 style={{ color: '#0f172a', fontSize: '1.2rem', marginBottom: '8px' }}>{job.title}</h3>
              <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '4px' }}>{job.company}</p>
              <p style={{ color: '#64748b', marginBottom: '8px' }}>📍 {job.location}</p>
              <p style={{ color: '#16a34a', fontWeight: '600', marginBottom: '12px' }}>{job.salary}</p>
              <span style={{ background: '#e6f0ff', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{job.type}</span>
              <div style={{ marginTop: '16px', color: '#2563eb', fontWeight: '600', fontSize: '0.9rem' }}>View Details →</div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          onClick={() => setSelected(null)}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', maxWidth: '550px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}>
            {applied ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                <h2 style={{ color: '#0f172a', marginBottom: '12px' }}>Application Sent!</h2>
                <p style={{ color: '#64748b', marginBottom: '24px' }}>We'll contact you at <strong>{form.email}</strong> within 24 hours.</p>
                <button onClick={() => setSelected(null)} style={{ padding: '12px 32px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>Close</button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                  <h2 style={{ color: '#0f172a', fontSize: '1.5rem' }}>{selected.title}</h2>
                  <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b' }}>✕</button>
                </div>
                <p style={{ color: '#2563eb', fontWeight: '600', marginBottom: '4px' }}>{selected.company}</p>
                <p style={{ color: '#64748b', marginBottom: '4px' }}>📍 {selected.location}</p>
                <p style={{ color: '#16a34a', fontWeight: '700', fontSize: '1.1rem', marginBottom: '16px' }}>{selected.salary}</p>
                <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '16px' }}>{selected.desc}</p>
                <p style={{ color: '#475569', marginBottom: '24px' }}><strong>Requirements:</strong> {selected.requirements}</p>
                <h3 style={{ color: '#0f172a', marginBottom: '16px' }}>Quick Apply</h3>
                <input name="name" placeholder="Full Name" value={form.name} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                <input name="email" placeholder="Email" value={form.email} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handle} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
                <button onClick={handleApply} disabled={sending} style={{ width: '100%', padding: '14px', background: sending ? '#94a3b8' : 'linear-gradient(135deg, #b45309, #92400e)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: sending ? 'not-allowed' : 'pointer', fontSize: '1rem' }}>
                  {sending ? 'Sending...' : 'Apply Now'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Jobs;