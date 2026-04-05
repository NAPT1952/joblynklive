import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
 
type Category = 'tech' | 'nontech' | 'all';

// ─── New articles (enriched) with cat field added ──────────────────────────
interface Article {
  id: number;
  cat: 'tech' | 'nontech';
  tag: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string[];
  bullets?: string[];
  pullquote?: string;
  twoCol?: { heading: string; items: string[] }[];
  salary?: string;
  code?: string;
}

const articles: Article[] = [
  {
    id: 1,
    cat: 'nontech',
    tag: "Resume & Job Search",
    title: "Top Resume Tips to Get Hired Faster",
    date: "April 2026",
    readTime: "4 min read",
    excerpt: "Your resume is the first impression you make on a recruiter. A well-structured resume can significantly increase your chances of getting shortlisted.",
    content: [
      "Your resume is the first impression you make on a recruiter. A well-structured resume can significantly increase your chances of getting shortlisted. Start by keeping your resume clean, simple, and easy to read. Highlight your key skills, achievements, and experience clearly. Use bullet points and avoid long paragraphs.",
      "Customize your resume for each job you apply to. Use keywords from the job description to match employer expectations — this also helps your resume pass automated screening systems (ATS). Finally, proofread carefully. A polished resume shows professionalism and attention to detail.",
    ],
    bullets: [
      "Keep it clean, clear, and one page where possible",
      "Use bullet points, not long paragraphs",
      "Match keywords from the job description",
      "Proofread — every error costs you a shortlist",
    ],
  },
  {
    id: 2,
    cat: 'nontech',
    tag: "Interview Prep",
    title: "How to Prepare for Job Interviews",
    date: "April 2026",
    readTime: "4 min read",
    excerpt: "Preparing for a job interview is essential to making a strong impression. Research, practice, and follow-up are your three pillars.",
    content: [
      "Preparing for a job interview is essential to making a strong impression. Start by researching the company and understanding the role you are applying for. Practice answering common interview questions such as Tell me about yourself and What are your strengths and weaknesses?",
      "Good communication skills and a positive attitude can set you apart from other candidates. Following up with a thank-you email shows genuine interest in the position — a small gesture that many candidates overlook.",
    ],
    pullquote: "Confidence and clarity are key. Dress professionally, arrive on time, and follow up with a thank-you email after the interview.",
  },
  {
    id: 3,
    cat: 'tech',
    tag: "Skills & Upskilling",
    title: "Top Skills in Demand in 2026",
    date: "April 2026",
    readTime: "5 min read",
    excerpt: "The job market is evolving rapidly. Technical and soft skills together define who gets hired — and who gets left behind.",
    content: [
      "The job market is evolving rapidly, and staying updated with in-demand skills is crucial. Technical skills like programming, data analysis, and digital marketing are highly sought after. Soft skills such as communication, teamwork, and problem-solving are equally important.",
      "Learning new skills through online courses and certifications can boost your career opportunities. Platforms like JobLynk help you find jobs that match your skill set. Investing in your skills today will help you secure better opportunities in the future.",
    ],
    twoCol: [
      {
        heading: "Technical Skills",
        items: ["Programming (Python, JS)", "Data Analysis", "Digital Marketing", "AI & Automation"],
      },
      {
        heading: "Soft Skills",
        items: ["Communication", "Teamwork", "Problem-solving", "Adaptability"],
      },
    ],
  },
  {
    id: 4,
    cat: 'tech',
    tag: "New AI Careers",
    title: "The AI Generalist: Job Description, Responsibilities & the Future of Work",
    date: "April 2026",
    readTime: "6 min read",
    excerpt: "Imagine a professional who understands ML, integrates AI into workflows, and translates technical complexity into business strategy. That is the AI Generalist.",
    content: [
      "Imagine a professional who understands machine learning, integrates AI into workflows, and translates technical complexity into business strategy. That is the modern AI Generalist — someone with a broad understanding of the AI ecosystem who works across data, models, and business goals.",
      "AI Generalists are becoming one of the most valuable roles in modern organizations, driving innovation and efficiency. Demand is growing rapidly as companies adopt AI across their operations.",
    ],
    twoCol: [
      {
        heading: "Key Responsibilities",
        items: ["Implement AI-driven automation", "Build workflows & internal tools", "Evaluate AI outputs for accuracy", "Integrate AI into business processes"],
      },
      {
        heading: "Skills Required",
        items: ["Programming (Python, JavaScript)", "Understanding of AI models & APIs", "Strong analytical thinking", "Excellent communication"],
      },
    ],
    salary: "$95,000 – $180,000 / year",
  },
  {
    id: 5,
    cat: 'tech',
    tag: "New AI Careers",
    title: "AI Prompt Engineering: Job Description, Responsibilities & Career Outlook",
    date: "April 2026",
    readTime: "6 min read",
    excerpt: "Prompt Engineering is the art of communicating with AI systems. It blends language, logic, and business — and it pays exceptionally well.",
    content: [
      "Prompt Engineering is the art of communicating with AI systems effectively. It involves designing instructions that guide AI to produce accurate and useful outputs. Prompt Engineers bridge human language and machine intelligence.",
      "Domain-specific prompt engineers — focused on healthcare, finance, or legal AI — command the highest premiums. This skill is shaping the future of work in AI-driven environments.",
    ],
    twoCol: [
      {
        heading: "Key Responsibilities",
        items: ["Design and optimize AI prompts", "Test and evaluate AI responses", "Improve accuracy & reduce bias", "Build prompt libraries & best practices"],
      },
      {
        heading: "Skills Required",
        items: ["Experience with LLMs (GPT, Claude)", "Python and AI frameworks", "Strong NLP understanding", "Analytical & ethical thinking"],
      },
    ],
    salary: "$80,000 – $400,000 / year",
  },
  {
    id: 6,
    cat: 'tech',
    tag: "Developer Learning",
    title: "Beginner React Concept: Components",
    date: "March 2026",
    readTime: "3 min read",
    excerpt: "In React, everything is built using components — reusable building blocks for your UI. Create once, use everywhere.",
    content: [
      "In React, everything is built using components — reusable building blocks for your user interface. Instead of repeating the same code multiple times, you create a component once and reuse it throughout your application.",
      "React's component-based architecture allows developers to build complex applications using simple, reusable pieces.",
    ],
    code: `// A simple React component\nfunction Button() {\n  return <button>Click Me</button>;\n}\n\n// Use it anywhere\n<Button />`,
    bullets: ["Easier to maintain and debug", "Easier to scale your application", "More organized, readable code"],
  },
  {
    id: 7,
    cat: 'tech',
    tag: "Developer Tools",
    title: "Vite + React: The Modern Way to Build Fast Web Apps",
    date: "March 2026",
    readTime: "5 min read",
    excerpt: "One of the fastest and most efficient frontend setups in 2026. Your app starts in under 2 seconds.",
    content: [
      "If you are building modern web applications in 2026, chances are you are using Vite + React — one of the fastest and most efficient frontend setups available today.",
      "Within seconds, your app is live with instant updates as you code. Perfect for frontend development, React SPAs, startup MVPs, and high-performance dashboards.",
    ],
    twoCol: [
      {
        heading: "Why Developers Love Vite",
        items: ["Lightning-fast dev server startup", "Instant Hot Module Replacement", "Optimized production builds", "Smoother developer experience"],
      },
      {
        heading: "Why React is Powerful",
        items: ["Component-based architecture", "Reusable UI components", "Efficient state management", "Huge ecosystem & community"],
      },
    ],
    code: `npm create vite@latest my-app\nnpm install\nnpm run dev\n\n// App live on http://localhost:5173`,
  },
  {
    id: 8,
    cat: 'nontech',
    tag: "Career Mindset",
    title: "Mastering Success Through Core Values and Character",
    date: "March 2026",
    readTime: "4 min read",
    excerpt: "Success is not just about reaching the top — it is about having the foundation to stay there.",
    content: [
      "Success is not just about reaching the top — it is about having the foundation to stay there. Without a defined set of core values, even the most talented individuals risk being shaped by their surroundings.",
      "Are you building a career that only looks good on the outside, or one strong enough on the inside to handle the pressure of your ambitions?",
    ],
    pullquote: "When your inner world is in order, you can navigate challenges with integrity and clarity.",
    twoCol: [
      {
        heading: "Integrity Over Talent",
        items: ["Talent opens doors", "Character keeps you there", "Inner foundation matters most"],
      },
      {
        heading: "Consistency Wins",
        items: ["Choose values, not convenience", "Small actions compound", "Discipline creates results"],
      },
    ],
  },
];

const Blog: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Read filter passed from Navbar dropdown
  useEffect(() => {
    const state = location.state as { filter?: string } | null;
    if (state?.filter && (state.filter === 'tech' || state.filter === 'nontech' || state.filter === 'all')) {
      setActiveFilter(state.filter as Category);
      setTimeout(() => {
        document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.state]);

  const selectCategory = (cat: Category) => {
    setActiveFilter(prev => prev === cat ? 'all' : cat);
    setExpandedId(null); // collapse all when filter changes
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filtered = articles.filter(article => {
    const catMatch = activeFilter === 'all' || article.cat === activeFilter;
    const searchMatch = !search || article.title.toLowerCase().includes(search.toLowerCase()) || article.excerpt.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const techCount = articles.filter(a => a.cat === 'tech').length;
  const ntCount = articles.filter(a => a.cat === 'nontech').length;

  // ── Styles (same as old design) ──
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
          <input style={s.searchIn} placeholder="Search blogs, topics or skills…" value={search} onChange={e => setSearch(e.target.value)} />
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

        {/* Category Cards */}
        <div style={s.sHead}>
          <h2 style={s.sTitle}>Browse by Category</h2>
          <span style={{ fontSize: '13px', color: '#6B7A8D' }}>Click a card to filter blogs below</span>
        </div>

        <div style={s.catGrid}>
          {/* Technical Card */}
          <div onClick={() => selectCategory('tech')} style={{
            borderRadius: '18px', padding: '26px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px',
            cursor: 'pointer', position: 'relative', overflow: 'hidden', background: '#0B1A2E',
            border: activeFilter === 'tech' ? '2px solid #00C896' : '2px solid #1E3350',
            boxShadow: activeFilter === 'tech' ? '0 0 0 4px rgba(0,200,150,0.12)' : 'none',
            opacity: activeFilter === 'nontech' ? 0.4 : 1, transition: 'all 0.2s',
          }}>
            {activeFilter === 'tech' && (<div style={{ position: 'absolute', top: '12px', right: '14px', width: '22px', height: '22px', borderRadius: '50%', background: '#00C896', color: '#0B1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</div>)}
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0,200,150,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>💻</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>Technical Job Blogs</h3>
              <p style={{ color: '#6B90B0', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px' }}>In-depth guides for developers, data scientists, DevOps, AI/ML engineers and designers.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                {['Software Dev', 'Data Science', 'UI/UX', 'DevOps', 'AI / ML'].map(t => (<span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '20px', background: 'rgba(0,200,150,0.15)', color: '#00C896' }}>{t}</span>))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#00C896' }}>{techCount} articles</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#00C896' }}>{activeFilter === 'tech' ? '✓ Showing Technical' : 'Show Technical →'}</span>
              </div>
            </div>
          </div>

          {/* Non-Technical Card */}
          <div onClick={() => selectCategory('nontech')} style={{
            borderRadius: '18px', padding: '26px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px',
            cursor: 'pointer', position: 'relative', overflow: 'hidden', background: '#fff',
            border: activeFilter === 'nontech' ? '2px solid #1A6EF5' : '2px solid #E3EAF2',
            boxShadow: activeFilter === 'nontech' ? '0 0 0 4px rgba(26,110,245,0.10)' : 'none',
            opacity: activeFilter === 'tech' ? 0.4 : 1, transition: 'all 0.2s',
          }}>
            {activeFilter === 'nontech' && (<div style={{ position: 'absolute', top: '12px', right: '14px', width: '22px', height: '22px', borderRadius: '50%', background: '#1A6EF5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</div>)}
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#EBF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>💼</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#0B1A2E', fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>Non-Technical Job Blogs</h3>
              <p style={{ color: '#6B7A8D', fontSize: '13px', lineHeight: 1.5, marginBottom: '12px' }}>Career tips for sales, HR, marketing, finance and operations professionals.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                {['Sales & BD', 'HR', 'Marketing', 'Finance', 'Operations'].map(t => (<span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '20px', background: '#EBF2FF', color: '#1A6EF5' }}>{t}</span>))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #E3EAF2' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A6EF5' }}>{ntCount} articles</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A6EF5' }}>{activeFilter === 'nontech' ? '✓ Showing Non-Technical' : 'Show Non-Technical →'}</span>
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
            <button onClick={() => setActiveFilter('all')} style={{ fontSize: '13px', color: '#1A6EF5', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              ✕ Show all
            </button>
          )}
        </div>

        {/* Blog Grid (expandable cards) */}
        <div id="blog-grid" style={s.blogGrid}>
          {filtered.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '48px 0', color: '#6B7A8D', fontSize: '15px' }}>
              No blogs found. <button onClick={() => { setActiveFilter('all'); setSearch(''); }} style={{ color: '#1A6EF5', background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px', fontFamily: 'inherit' }}>Clear filter →</button>
            </div>
          ) : filtered.map(article => {
            const isExpanded = expandedId === article.id;
            return (
              <div
                key={article.id}
                style={{
                  background: '#fff',
                  border: '1px solid #E3EAF2',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Thumbnail emoji based on category */}
                <div style={{
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  background: article.cat === 'tech'
                    ? 'linear-gradient(135deg, #0B1A2E, #1E3350)'
                    : 'linear-gradient(135deg, #EBF2FF, #D0E4FF)',
                }}>
                  {article.cat === 'tech' ? '💻' : '💼'}
                </div>

                {/* Body */}
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px',
                      background: article.cat === 'tech' ? '#E0FBF4' : '#EBF2FF',
                      color: article.cat === 'tech' ? '#00855F' : '#1A6EF5',
                    }}>
                      {article.cat === 'tech' ? 'Technical' : 'Non-Technical'}
                    </span>
                    <span style={{ fontSize: '11px', color: '#6B7A8D' }}>{article.date}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0B1A2E', lineHeight: 1.45, marginBottom: '7px', flex: 1 }}>{article.title}</h3>
                  <p style={{ fontSize: '12px', color: '#6B7A8D', lineHeight: 1.6 }}>{article.excerpt}</p>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div style={{ marginTop: '16px', borderTop: '1px solid #E3EAF2', paddingTop: '12px' }}>
                      {article.content?.map((para, idx) => (
                        <p key={idx} style={{ fontSize: '13px', color: '#444', lineHeight: 1.7, marginBottom: '12px' }}>{para}</p>
                      ))}
                      {article.pullquote && (
                        <div style={{ borderLeft: '3px solid #00C896', padding: '8px 16px', margin: '12px 0', background: '#F4F7FB', fontStyle: 'italic', fontSize: '13px', color: '#0B1A2E' }}>
                          {article.pullquote}
                        </div>
                      )}
                      {article.bullets && (
                        <ul style={{ margin: '12px 0 12px 20px', listStyle: 'disc', color: '#444', fontSize: '13px' }}>
                          {article.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      )}
                      {article.twoCol && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '12px 0' }}>
                          {article.twoCol.map((col, idx) => (
                            <div key={idx} style={{ background: '#F4F7FB', padding: '10px', borderRadius: '8px' }}>
                              <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>{col.heading}</h4>
                              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                {col.items.map((item, j) => <li key={j} style={{ fontSize: '12px', marginBottom: '4px' }}>• {item}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {article.salary && (
                        <div style={{ background: '#0B1A2E', color: '#00C896', padding: '8px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', margin: '12px 0' }}>
                          💰 {article.salary}
                        </div>
                      )}
                      {article.code && (
                        <pre style={{ background: '#0d1117', color: '#e6edf3', padding: '12px', borderRadius: '8px', fontSize: '12px', overflowX: 'auto', fontFamily: 'monospace' }}>
                          {article.code}
                        </pre>
                      )}
                    </div>
                  )}

                  <button
                    onClick={(e) => { e.stopPropagation(); toggleExpand(article.id); }}
                    style={{
                      marginTop: '12px',
                      background: 'none',
                      border: '1px solid #E3EAF2',
                      borderRadius: '20px',
                      padding: '6px 12px',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#1A6EF5',
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {isExpanded ? 'Show Less ↑' : 'Read More →'}
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #E3EAF2' }}>
                    <span style={{ fontSize: '11px', color: '#6B7A8D' }}>{article.tag}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#1A6EF5' }}>{article.readTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
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
