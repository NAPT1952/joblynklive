import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Category = 'tech' | 'nontech' | 'all';

interface BlogPost {
  id: number;
  cat: 'tech' | 'nontech';
  emoji: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

const posts: BlogPost[] = [
  { id: 1,  cat: 'tech',    emoji: '🏗️', title: 'How to Crack System Design Interviews in 2025',       excerpt: 'Scalability, databases and architecture patterns that top companies actually ask about.',              author: 'Rohan Mehta',   date: 'Mar 28, 2025', readTime: '8 min' },
  { id: 2,  cat: 'tech',    emoji: '⚡',  title: 'Python vs JavaScript: Which Pays More in India?',     excerpt: 'A data-backed comparison of job demand, salaries and career paths for both languages.',              author: 'Priya Sharma',  date: 'Mar 20, 2025', readTime: '6 min' },
  { id: 3,  cat: 'tech',    emoji: '📊', title: 'Top 10 Data Science Skills Employers Want Right Now', excerpt: 'From Pandas to MLOps — skills hiring managers are actively screening for in 2025.',                  author: 'Arjun Nair',    date: 'Mar 14, 2025', readTime: '5 min' },
  { id: 4,  cat: 'tech',    emoji: '🚀', title: 'How to Get Your First DevOps Job in 2025',            excerpt: 'The tools, certifications and portfolio projects that open DevOps doors fast.',                       author: 'Karan Singh',   date: 'Mar 10, 2025', readTime: '7 min' },
  { id: 5,  cat: 'tech',    emoji: '🤖', title: 'AI & ML Jobs in India — What Companies Are Hiring For', excerpt: 'The roles, skills and salary ranges across India\'s growing AI job market.',                       author: 'Neha Verma',    date: 'Mar 5, 2025',  readTime: '9 min' },
  { id: 6,  cat: 'tech',    emoji: '🎨', title: 'Building a UX Portfolio That Gets You Hired',         excerpt: 'What to include, what to cut and how to present case studies that impress.',                         author: 'Pooja Iyer',    date: 'Feb 28, 2025', readTime: '6 min' },
  { id: 7,  cat: 'nontech', emoji: '✉️', title: 'How to Write a Cover Letter That Gets You Shortlisted', excerpt: 'Simple structure, real examples and the biggest mistakes to avoid.',                              author: 'Sneha Kapoor',  date: 'Mar 26, 2025', readTime: '5 min' },
  { id: 8,  cat: 'nontech', emoji: '💰', title: 'Salary Negotiation Tips That Actually Work in India', excerpt: 'How to handle counter-offers and walk away with a better package.',                                  author: 'Vikram Rao',    date: 'Mar 18, 2025', readTime: '7 min' },
  { id: 9,  cat: 'nontech', emoji: '🎯', title: '25 HR Interview Questions and How to Answer Them',    excerpt: 'The behavioural questions every interviewer asks — and the frameworks that work.',                    author: 'Ananya Desai',  date: 'Mar 10, 2025', readTime: '9 min' },
  { id: 10, cat: 'nontech', emoji: '📣', title: 'How to Break Into Digital Marketing With No Experience', excerpt: 'Free courses, portfolio projects and the job titles to target first.',                            author: 'Rahul Gupta',   date: 'Mar 6, 2025',  readTime: '6 min' },
  { id: 11, cat: 'nontech', emoji: '🤝', title: 'Top Sales Skills Every Employer Looks for in 2025',  excerpt: 'From consultative selling to CRM tools — what separates top performers.',                           author: 'Divya Menon',   date: 'Feb 26, 2025', readTime: '5 min' },
  { id: 12, cat: 'nontech', emoji: '📋', title: 'How to Move From Operations Into a Management Role',  excerpt: 'The skills and visibility strategies that accelerate your promotion.',
     { id: 13, cat: 'tech', emoji: '🐍', title: 'Advanced Python: Generators, Decorators & Async', excerpt: 'Master Python features that separate juniors from seniors in real-world projects.', author: 'Rohan Mehta', date: 'Apr 2, 2025', readTime: '10 min' },
  { id: 14, cat: 'tech', emoji: '☁️', title: 'Cloud Computing Roadmap 2025: AWS vs Azure vs GCP', excerpt: 'Which cloud provider has the most jobs in India? Certification guide included.', author: 'Karan Singh', date: 'Apr 1, 2025', readTime: '12 min' },
  { id: 15, cat: 'tech', emoji: '🔐', title: 'Cybersecurity Jobs: How to Get Your First SOC Analyst Role', excerpt: 'Certifications, home lab projects, and interview questions that actually get asked.', author: 'Priya Sharma', date: 'Mar 30, 2025', readTime: '9 min' },
   author: 'Suresh Pillai', date: 'Feb 20, 2025', readTime: '8 min' },
];

const Blog: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [search, setSearch] = useState('');

  // Read filter passed from Navbar dropdown via router state
  useEffect(() => {
    const state = location.state as { filter?: string } | null;
    if (state?.filter && (state.filter === 'tech' || state.filter === 'nontech' || state.filter === 'all')) {
      setActiveFilter(state.filter as Category);
      // Scroll to blog section smoothly
      setTimeout(() => {
        document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.state]);

  const selectCategory = (cat: Category) => {
    setActiveFilter(prev => prev === cat ? 'all' : cat);
  };

  const filtered = posts.filter(p => {
    const catMatch = activeFilter === 'all' || p.cat === activeFilter;
    const searchMatch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const techCount = posts.filter(p => p.cat === 'tech').length;
  const ntCount   = posts.filter(p => p.cat === 'nontech').length;

  // ── Styles ──
  const s = {
    page:      { background: '#F4F7FB', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' } as React.CSSProperties,
    hero:      { background: '#0B1A2E', padding: '60px 24px 70px', textAlign: 'center' as const, position: 'relative' as const, overflow: 'hidden' },
    badge:     { display: 'inline-block', background: 'rgba(0,200,150,0.12)', border: '1px solid rgba(0,200,150,0.25)', color: '#00C896', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, padding: '5px 16px', borderRadius: '30px', marginBottom: '16px' },
    h1:        { fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: '#fff', lineHeight: 1.12, marginBottom: '12px' },
    heroSub:   { color: '#7A9AB8', fontSize: '16px', maxWidth: '500px', margin: '0 auto 28px' },
    searchBox: { display: 'flex', maxWidth: '480px', margin: '0 auto', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', overflow: 'hidden' },
    searchIn:  { flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '12px 18px', color: '#fff', fontSize: '14px', fontFamily: 'inherit' } as React.CSSProperties,
    searchBtn: { background: '#00C896', border: 'none', padding: '0 22px', color: '#0B1A2E', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' },
    wrap:      { maxWidth: '1160px', margin: '0 auto', padding: '0 20px' },
    adStrip:   { background: '#fff', border: '1px dashed #E3EAF2', borderRadius: '10px', minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const, margin: '28px 0' },
    adLabel:   { position: 'absolute' as const, top: '6px', right: '10px', fontSize: '10px', color: '#BCC8D8', letterSpacing: '0.05em', textTransform: 'uppercase' as const },
    sHead:     { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px', marginTop: '40px' },
    sTitle:    { fontFamily: 'Georgia, serif', fontSize: '24px', color: '#0B1A2E' },
    catGrid:   { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' },
    filterBar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap' as const, gap: '8px' },
    blogGrid:  { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' } as React.CSSProperties,
  };

  return (
    <div style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.badge}>Career Insights &amp; Job Tips</div>
        <h1 style={s.h1}>Blogs for Every <span style={{ color: '#00C896' }}>Career Path</span></h1>
        <p style={s.heroSub}>Expert guides for technical and non-technical professionals across India.</p>
        <div style={s.searchBox}>
          <input
            style={s.searchIn}
            placeholder="Search blogs, topics or skills…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button style={s.searchBtn}>Search</button>
        </div>
      </section>

      <div style={s.wrap}>

        {/* AdSense Top */}
        <div style={s.adStrip}>
          <span style={s.adLabel}>Ad</span>
          <ins className="adsbygoogle" style={{ display: 'block' }}
            data-ad-client="ca-pub-4282121192943910"
            data-ad-slot="AUTO" data-ad-format="auto" data-full-width-responsive="true" />
          <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
        </div>

        {/* ══ OPTION 3 — CATEGORY CARDS ══ */}
        <div style={s.sHead}>
          <h2 style={s.sTitle}>Browse by Category</h2>
          <span style={{ fontSize: '13px', color: '#6B7A8D' }}>Click a card to filter blogs below</span>
        </div>

        <div style={s.catGrid}>

          {/* TECHNICAL CARD */}
          <div
            onClick={() => selectCategory('tech')}
            style={{
              borderRadius: '18px', padding: '26px 24px',
              display: 'flex', alignItems: 'flex-start', gap: '16px',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              background: '#0B1A2E',
              border: activeFilter === 'tech' ? '2px solid #00C896' : '2px solid #1E3350',
              boxShadow: activeFilter === 'tech' ? '0 0 0 4px rgba(0,200,150,0.12)' : 'none',
              opacity: activeFilter === 'nontech' ? 0.4 : 1,
              transition: 'all 0.2s',
            }}
          >
            {/* Selected tick */}
            {activeFilter === 'tech' && (
              <div style={{ position: 'absolute', top: '12px', right: '14px', width: '22px', height: '22px', borderRadius: '50%', background: '#00C896', color: '#0B1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</div>
            )}
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0,200,150,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>💻</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>Technical Job Blogs</h3>
              <p style={{ color: '#6B90B0', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px' }}>In-depth guides for developers, data scientists, DevOps, AI/ML engineers and designers.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                {['Software Dev', 'Data Science', 'UI/UX', 'DevOps', 'AI / ML'].map(t => (
                  <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '20px', background: 'rgba(0,200,150,0.15)', color: '#00C896' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#00C896' }}>{techCount} articles</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#00C896' }}>
                  {activeFilter === 'tech' ? '✓ Showing Technical' : 'Show Technical →'}
                </span>
              </div>
            </div>
          </div>

          {/* NON-TECHNICAL CARD */}
          <div
            onClick={() => selectCategory('nontech')}
            style={{
              borderRadius: '18px', padding: '26px 24px',
              display: 'flex', alignItems: 'flex-start', gap: '16px',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              background: '#fff',
              border: activeFilter === 'nontech' ? '2px solid #1A6EF5' : '2px solid #E3EAF2',
              boxShadow: activeFilter === 'nontech' ? '0 0 0 4px rgba(26,110,245,0.10)' : 'none',
              opacity: activeFilter === 'tech' ? 0.4 : 1,
              transition: 'all 0.2s',
            }}
          >
            {/* Selected tick */}
            {activeFilter === 'nontech' && (
              <div style={{ position: 'absolute', top: '12px', right: '14px', width: '22px', height: '22px', borderRadius: '50%', background: '#1A6EF5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</div>
            )}
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#EBF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>💼</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#0B1A2E', fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>Non-Technical Job Blogs</h3>
              <p style={{ color: '#6B7A8D', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px' }}>Career tips for sales, HR, marketing, finance and operations professionals.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                {['Sales & BD', 'HR', 'Marketing', 'Finance', 'Operations'].map(t => (
                  <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '20px', background: '#EBF2FF', color: '#1A6EF5' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #E3EAF2' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A6EF5' }}>{ntCount} articles</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A6EF5' }}>
                  {activeFilter === 'nontech' ? '✓ Showing Non-Technical' : 'Show Non-Technical →'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Filter Status Bar */}
        <div style={s.filterBar}>
          <div style={{ fontSize: '14px', color: '#6B7A8D' }}>
            Showing <strong style={{ color: '#0B1A2E' }}>{filtered.length} {activeFilter === 'tech' ? 'Technical' : activeFilter === 'nontech' ? 'Non-Technical' : 'total'} article{filtered.length !== 1 ? 's' : ''}</strong>
          </div>
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              style={{ fontSize: '13px', color: '#1A6EF5', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              ✕ Show all
            </button>
          )}
        </div>

        {/* ══ BLOG GRID ══ */}
        <div id="blog-grid" style={s.blogGrid}>
          {filtered.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '48px 0', color: '#6B7A8D', fontSize: '15px' }}>
              No blogs found.{' '}
              <button onClick={() => { setActiveFilter('all'); setSearch(''); }} style={{ color: '#1A6EF5', background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px', fontFamily: 'inherit' }}>
                Clear filter →
              </button>
            </div>
          ) : filtered.map(post => (
            <div
              key={post.id}
              style={{ background: '#fff', border: '1px solid #E3EAF2', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
            >
              {/* Thumbnail */}
              <div style={{
                height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px',
                background: post.cat === 'tech'
                  ? 'linear-gradient(135deg, #0B1A2E, #1E3350)'
                  : 'linear-gradient(135deg, #EBF2FF, #D0E4FF)',
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
                  <span style={{ fontSize: '11px', color: '#6B7A8D' }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#0B1A2E', lineHeight: 1.45, marginBottom: '7px', flex: 1 }}>{post.title}</h3>
                <p style={{ fontSize: '12px', color: '#6B7A8D', lineHeight: 1.6 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #E3EAF2' }}>
                  <span style={{ fontSize: '11px', color: '#6B7A8D' }}>{post.author}</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#1A6EF5' }}>{post.readTime} read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AdSense Mid */}
        <div style={{ ...s.adStrip, minHeight: '280px', marginTop: '40px' }}>
          <span style={s.adLabel}>Ad</span>
          <ins className="adsbygoogle" style={{ display: 'block' }}
            data-ad-client="ca-pub-4282121192943910"
            data-ad-slot="AUTO" data-ad-format="rectangle" data-full-width-responsive="true" />
          <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
        </div>

        {/* Newsletter */}
        <div style={{ background: '#0B1A2E', borderRadius: '20px', padding: '44px 36px', textAlign: 'center', margin: '40px 0 48px', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: '#fff', fontSize: '26px', marginBottom: '10px' }}>Get Weekly Career Insights</h2>
          <p style={{ color: '#6B90B0', fontSize: '15px', marginBottom: '24px' }}>Fresh blogs, job tips and hiring trends — straight to your inbox every Monday.</p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '440px', margin: '0 auto' }}>
            <input type="email" placeholder="Enter your email address" style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }} />
            <button style={{ background: '#00C896', color: '#0B1A2E', border: 'none', borderRadius: '8px', padding: '12px 22px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Subscribe Free</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
