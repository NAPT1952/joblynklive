import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const blogPosts = [
    { id: 1, cat: 'tech',    emoji: '🏗️', title: 'How to Crack System Design Interviews in 2025',       excerpt: 'Scalability, databases and architecture patterns top companies ask about.',   author: 'Rohan Mehta',  date: 'Mar 28', readTime: '8 min' },
    { id: 2, cat: 'nontech', emoji: '✉️', title: 'How to Write a Cover Letter That Gets You Shortlisted', excerpt: 'Simple structure, real examples and the biggest mistakes to avoid.',         author: 'Sneha Kapoor', date: 'Mar 26', readTime: '5 min' },
    { id: 3, cat: 'tech',    emoji: '⚡',  title: 'Python vs JavaScript: Which Pays More in India?',     excerpt: 'A data-backed comparison of job demand, salaries and career paths.',         author: 'Priya Sharma', date: 'Mar 20', readTime: '6 min' },
    { id: 4, cat: 'nontech', emoji: '💰', title: 'Salary Negotiation Tips That Actually Work in India', excerpt: 'How to handle counter-offers and walk away with a better package.',          author: 'Vikram Rao',   date: 'Mar 18', readTime: '7 min' },
    { id: 5, cat: 'tech',    emoji: '🤖', title: 'AI & ML Jobs in India — What Companies Are Hiring For', excerpt: 'Roles, skills and salary ranges across India\'s growing AI job market.',  author: 'Neha Verma',   date: 'Mar 5',  readTime: '9 min' },
    { id: 6, cat: 'nontech', emoji: '🎯', title: '25 HR Interview Questions and How to Answer Them',    excerpt: 'Behavioural questions every interviewer asks — and frameworks that work.',   author: 'Ananya Desai', date: 'Mar 10', readTime: '9 min' },
  ];

  return (
    <>
      {/* ===== HERO BANNER SECTION ===== */}
      <div style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/images/ai.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.3, zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)',
          zIndex: 2
        }}></div>
        <div style={{
          position: 'relative', zIndex: 3, height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center', color: 'white', padding: '0 20px', textAlign: 'center'
        }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1rem', fontWeight: '700' }}>
            JobLynk.live
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', maxWidth: '700px', marginBottom: '3rem', color: '#e2e8f0' }}>
            Bridging Jobs & Talent
          </p>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            {/* White Tier */}
            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '30px 40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.2)', minWidth: '280px', textAlign: 'left' }}>
              <h2 style={{ color: '#fff', margin: '0 0 15px 0', fontSize: '1.8rem' }}>White · ₹49</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>✅ Professional Resume</li>
                <li style={{ marginBottom: '12px' }}>✅ Cover Letter</li>
                <li>✅ 1 Updated Employee Data List</li>
              </ul>
            </div>
            {/* Gold Tier */}
            <div style={{ background: 'linear-gradient(135deg, rgba(180,83,9,0.2), rgba(180,83,9,0.3))', backdropFilter: 'blur(10px)', padding: '30px 40px', borderRadius: '24px', border: '2px solid #b45309', minWidth: '280px', textAlign: 'left' }}>
              <h2 style={{ color: '#fbbf24', margin: '0 0 15px 0', fontSize: '1.8rem' }}>Gold · ₹99</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>✨ AI-Optimized Resume</li>
                <li style={{ marginBottom: '12px' }}>✨ AI-Optimized Cover Letter</li>
                <li>✨ Premium Data List</li>
              </ul>
            </div>
          </div>
          <button
            style={{ padding: '16px 48px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '50px', fontSize: '1.2rem', fontWeight: '600', cursor: 'pointer', marginBottom: '1.5rem' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#2563eb'}
          >
            Get Started
          </button>
          <p style={{ color: '#94a3b8' }}>📧 joblynklive@gmail.com</p>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ background: '#2563eb', color: 'white', padding: '4px 16px', borderRadius: '40px', fontSize: '0.9rem', display: 'inline-block', marginBottom: '20px' }}>
              About Us
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#0f172a', maxWidth: '700px', margin: '0 auto' }}>
              Bridging the Gap Between Jobs & Talent
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', marginBottom: '20px' }}>
                JobLynk.live was born from a simple observation: millions of skilled Indian workers—
                from factory floors to home offices—struggle to present themselves professionally to
                employers. Either resumes are too expensive, or job platforms are too complicated.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7' }}>
                We started in 2024 with a clear mission:{' '}
                <strong>make job application tools affordable (₹49/₹99) and brutally simple.</strong>{' '}
                No confusing dashboards. No hidden fees. Just your resume, cover letter, and a direct
                line to employers who are actually hiring.
              </p>
              <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
                <div>
                  <h3 style={{ color: '#2563eb', fontSize: '2.2rem', margin: 0 }}>500+</h3>
                  <p style={{ color: '#475569' }}>Job Seekers Placed</p>
                </div>
                <div>
                  <h3 style={{ color: '#2563eb', fontSize: '2.2rem', margin: 0 }}>200+</h3>
                  <p style={{ color: '#475569' }}>Verified Employers</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#e6f0ff', borderRadius: '32px', padding: '40px' }}>
              <h3 style={{ color: '#1e40af', marginBottom: '30px', fontSize: '1.8rem' }}>🎯 Our Promise</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  { text: <><strong>No monthly fees</strong> – Pay once, get your documents forever</> },
                  { text: <><strong>Real human support</strong> – Email us, get reply within hours</> },
                  { text: <><strong>Privacy first</strong> – Your Aadhaar and data are encrypted</> },
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: i < 2 ? '25px' : 0, display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <span style={{ background: '#2563eb', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '1.1rem' }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BLOG SECTION ===== */}
      <div style={{ padding: '80px 20px', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ background: '#0B1A2E', color: '#00C896', padding: '4px 16px', borderRadius: '40px', fontSize: '0.9rem', display: 'inline-block', marginBottom: '16px', border: '1px solid rgba(0,200,150,0.3)' }}>
              Career Insights
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#0f172a', marginBottom: '8px' }}>
              Explore Our Blogs
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Expert guides for every career path — technical and non-technical
            </p>
          </div>

          {/* ── OPTION 3 CATEGORY CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '40px' }}>

            {/* Technical Card */}
            <div
              onClick={() => navigate('/blog', { state: { filter: 'tech' } })}
              style={{
                borderRadius: '18px', padding: '28px 24px',
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                cursor: 'pointer', background: '#0B1A2E',
                border: '2px solid #1E3350', transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.2)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#00C896'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = '#1E3350'; }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(0,200,150,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>💻</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 600, marginBottom: '6px', marginTop: 0 }}>Technical Job Blogs</h3>
                <p style={{ color: '#6B90B0', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px', marginTop: 0 }}>
                  In-depth guides for developers, data scientists, DevOps, AI/ML and designers.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                  {['Software Dev', 'Data Science', 'UI/UX', 'DevOps', 'AI / ML'].map(t => (
                    <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '20px', background: 'rgba(0,200,150,0.15)', color: '#00C896' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#00C896' }}>6 articles</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#00C896' }}>Read Technical →</span>
                </div>
              </div>
            </div>

            {/* Non-Technical Card */}
            <div
              onClick={() => navigate('/blog', { state: { filter: 'nontech' } })}
              style={{
                borderRadius: '18px', padding: '28px 24px',
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                cursor: 'pointer', background: '#fff',
                border: '2px solid #E3EAF2', transition: 'transform 0.2s, box-shadow 0.2s',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#1A6EF5'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = '#E3EAF2'; }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#EBF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>💼</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#0B1A2E', fontSize: '17px', fontWeight: 600, marginBottom: '6px', marginTop: 0 }}>Non-Technical Job Blogs</h3>
                <p style={{ color: '#6B7A8D', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px', marginTop: 0 }}>
                  Career tips for sales, HR, marketing, finance and operations professionals.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                  {['Sales & BD', 'HR', 'Marketing', 'Finance', 'Operations'].map(t => (
                    <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '20px', background: '#EBF2FF', color: '#1A6EF5' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #E3EAF2' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A6EF5' }}>6 articles</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A6EF5' }}>Read Non-Technical →</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── BLOG PREVIEW GRID ── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {blogPosts.map(post => (
              <div
                key={post.id}
                onClick={() => navigate('/blog', { state: { filter: post.cat } })}
                style={{ background: '#fff', border: '1px solid #E3EAF2', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
              >
                {/* Thumb */}
                <div style={{
                  height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px',
                  background: post.cat === 'tech' ? 'linear-gradient(135deg, #0B1A2E, #1E3350)' : 'linear-gradient(135deg, #EBF2FF, #D0E4FF)'
                }}>
                  {post.emoji}
                </div>
                {/* Body */}
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px',
                      background: post.cat === 'tech' ? '#E0FBF4' : '#EBF2FF',
                      color: post.cat === 'tech' ? '#00855F' : '#1A6EF5',
                    }}>
                      {post.cat === 'tech' ? 'Technical' : 'Non-Technical'}
                    </span>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{post.date}</span>
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', lineHeight: 1.4, marginBottom: '6px', marginTop: 0, flex: 1 }}>{post.title}</h4>
                  <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5, marginTop: 0 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #E3EAF2' }}>
                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>{post.author}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#2563eb' }}>{post.readTime} read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/blog')}
              style={{ padding: '12px 36px', background: '#0B1A2E', color: '#fff', border: '2px solid #1E3350', borderRadius: '50px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#00C896'; e.currentTarget.style.color = '#0B1A2E'; e.currentTarget.style.borderColor = '#00C896'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0B1A2E'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1E3350'; }}
            >
              View All Blogs →
            </button>
          </div>

        </div>
      </div>

      {/* ===== TEAM SECTION ===== */}
      <div style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', textAlign: 'center', marginBottom: '50px' }}>
            Meet the Team
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#2563eb', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 20px' }}></div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#2563eb', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 20px' }}>NAT</div>
              <h3 style={{ margin: '0 0 5px 0' }}>Nigel A Thomas</h3>
              <p style={{ color: '#64748b' }}>Head of Operations</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#2563eb', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 20px' }}>DS</div>
              <h3 style={{ margin: '0 0 5px 0' }}>Das Sbbaraj</h3>
              <p style={{ color: '#64748b' }}>Tech Lead</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTACT BANNER ===== */}
      <div style={{ background: '#1e293b', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ color: '#facc15', fontSize: '2rem', marginBottom: '20px' }}>📞 We're Here to Help</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Have questions? Our team responds within hours, not days.</p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px' }}>
            <strong style={{ color: '#facc15', fontSize: '1.3rem' }}>tech-support@joblynk.live</strong>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div style={{ background: '#0f172a', color: '#94a3b8', padding: '30px 20px', textAlign: 'center', borderTop: '1px solid #334155' }}>
        <p>© 2024 JobLynk.live — Bridging Jobs & Talent</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>No Refund Policy applies. All digital sales are final.</p>
      </div>
    </>
  );
};

export default Home;
