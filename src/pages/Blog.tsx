import { useState } from "react";

const articles = [
  {
    id: 1,
    tag: "Resume & Job Search",
    title: "Top Resume Tips to Get Hired Faster",
    date: "April 2026",
    readTime: "4 min read",
    excerpt:
      "Your resume is the first impression you make on a recruiter. A well-structured resume can significantly increase your chances of getting shortlisted.",
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
    tag: "Interview Prep",
    title: "How to Prepare for Job Interviews",
    date: "April 2026",
    readTime: "4 min read",
    excerpt:
      "Preparing for a job interview is essential to making a strong impression. Research, practice, and follow-up are your three pillars.",
    content: [
      "Preparing for a job interview is essential to making a strong impression. Start by researching the company and understanding the role you are applying for. Practice answering common interview questions such as Tell me about yourself and What are your strengths and weaknesses?",
      "Good communication skills and a positive attitude can set you apart from other candidates. Following up with a thank-you email shows genuine interest in the position — a small gesture that many candidates overlook.",
    ],
    pullquote:
      "Confidence and clarity are key. Dress professionally, arrive on time, and follow up with a thank-you email after the interview.",
  },
  {
    id: 3,
    tag: "Skills & Upskilling",
    title: "Top Skills in Demand in 2026",
    date: "April 2026",
    readTime: "5 min read",
    excerpt:
      "The job market is evolving rapidly. Technical and soft skills together define who gets hired — and who gets left behind.",
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
    tag: "New AI Careers",
    title: "The AI Generalist: Job Description, Responsibilities & the Future of Work",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Imagine a professional who understands ML, integrates AI into workflows, and translates technical complexity into business strategy. That is the AI Generalist.",
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
    tag: "New AI Careers",
    title: "AI Prompt Engineering: Job Description, Responsibilities & Career Outlook",
    date: "April 2026",
    readTime: "6 min read",
    excerpt:
      "Prompt Engineering is the art of communicating with AI systems. It blends language, logic, and business — and it pays exceptionally well.",
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
    tag: "Developer Learning",
    title: "Beginner React Concept: Components",
    date: "March 2026",
    readTime: "3 min read",
    excerpt:
      "In React, everything is built using components — reusable building blocks for your UI. Create once, use everywhere.",
    content: [
      "In React, everything is built using components — reusable building blocks for your user interface. Instead of repeating the same code multiple times, you create a component once and reuse it throughout your application.",
      "React's component-based architecture allows developers to build complex applications using simple, reusable pieces.",
    ],
    code: `// A simple React component\nfunction Button() {\n  return <button>Click Me</button>;\n}\n\n// Use it anywhere\n<Button />`,
    bullets: ["Easier to maintain and debug", "Easier to scale your application", "More organized, readable code"],
  },
  {
    id: 7,
    tag: "Developer Tools",
    title: "Vite + React: The Modern Way to Build Fast Web Apps",
    date: "March 2026",
    readTime: "5 min read",
    excerpt:
      "One of the fastest and most efficient frontend setups in 2026. Your app starts in under 2 seconds.",
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
    tag: "Career Mindset",
    title: "Mastering Success Through Core Values and Character",
    date: "March 2026",
    readTime: "4 min read",
    excerpt:
      "Success is not just about reaching the top — it is about having the foundation to stay there.",
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

const topics = ["Resume Tips", "AI Careers", "Interviews", "React", "Salary Guide", "Upskilling", "Prompt Engineering", "Mindset", "Vite", "Freshers"];

export default function Blog() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggle = (id: number) => setExpanded(expanded === id ? null : id);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#faf7f2", minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ background: "#0f1f3d", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8a020", border: "1px solid #e8a020", padding: "4px 14px", borderRadius: "2px", marginBottom: "1.2rem" }}>
          Career Intelligence
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", fontWeight: 400, lineHeight: 1.2, marginBottom: "0.8rem" }}>
          Career Tips & Articles
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto", fontSize: "0.95rem", fontWeight: 300 }}>
          Expert insights on jobs, skills, and the future of work in India.
        </p>
      </div>

      {/* ISSUE BAR */}
      <div style={{ background: "#e8a020", padding: "9px 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", fontWeight: 500, color: "#0f1f3d", flexWrap: "wrap", gap: "4px" }}>
        <span>APRIL 2026 EDITION</span>
        <span>JOBLYNK.LIVE</span>
        <span>CAREER & MARKET INSIGHTS</span>
      </div>

      {/* QUICK READS */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "3rem 2rem 2rem" }}>
        <SectionLabel text="Quick Reads" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {["How to Find a Job in India", "Top Resume Tips for Freshers", "Best Job Portals in India"].map((t, i) => (
            <div key={i} style={{ background: "#0f1f3d", borderRadius: 4, padding: "1.5rem", cursor: "pointer" }}>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8a020", display: "block", marginBottom: "0.5rem" }}>
                {["Career Basics", "Resume", "Resources"][i]}
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 400, color: "white", lineHeight: 1.35 }}>{t}</h3>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e0d8ce" }} />

      {/* MAIN LAYOUT */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "2.5rem 2rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: "2.5rem" }}>

          {/* ARTICLES */}
          <div>
            <SectionLabel text="All Articles" />
            {articles.map(article => (
              <div key={article.id} style={{ background: "white", border: "1px solid #e0d8ce", borderRadius: 4, marginBottom: "1.5rem", overflow: "hidden" }}>
                <div style={{ padding: "1.75rem 1.75rem 0" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8a020" }}>{article.tag}</span>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 400, color: "#0f1f3d", lineHeight: 1.3, margin: "0.4rem 0 0.3rem" }}>{article.title}</h2>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.8rem" }}>{article.date} · {article.readTime}</div>
                </div>

                <div style={{ padding: "0 1.75rem 1.75rem" }}>
                  <p style={{ fontSize: "0.93rem", color: "#444", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>{article.excerpt}</p>

                  {expanded === article.id && (
                    <div>
                      {article.content.map((p, i) => (
                        <p key={i} style={{ fontSize: "0.93rem", color: "#444", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>{p}</p>
                      ))}
                      {"pullquote" in article && article.pullquote && (
                        <div style={{ borderLeft: "3px solid #e8a020", padding: "0.75rem 1.25rem", margin: "1.25rem 0", fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#0f1f3d", fontStyle: "italic", lineHeight: 1.6 }}>
                          {article.pullquote}
                        </div>
                      )}
                      {"twoCol" in article && article.twoCol && (
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
                          {article.twoCol.map((col, i) => (
                            <div key={i} style={{ background: "#f3f0eb", borderRadius: 4, padding: "1rem", borderLeft: "3px solid #e8a020" }}>
                              <h4 style={{ fontSize: "0.78rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0f1f3d", marginBottom: "0.5rem" }}>{col.heading}</h4>
                              <ul style={{ listStyle: "none" }}>
                                {col.items.map((item, j) => (
                                  <li key={j} style={{ fontSize: "0.85rem", color: "#6b7280", padding: "3px 0", fontWeight: 300 }}>
                                    <span style={{ color: "#e8a020" }}>→ </span>{item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {"bullets" in article && article.bullets && (
                        <ul style={{ listStyle: "none", margin: "0.5rem 0 1rem" }}>
                          {article.bullets.map((b, i) => (
                            <li key={i} style={{ fontSize: "0.9rem", color: "#444", padding: "4px 0", fontWeight: 300 }}>
                              <span style={{ color: "#e8a020", fontWeight: 500 }}>✓ </span>{b}
                            </li>
                          ))}
                        </ul>
                      )}
                      {"salary" in article && article.salary && (
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0f1f3d", color: "white", padding: "8px 16px", borderRadius: 3, fontSize: "0.85rem", fontWeight: 500, margin: "0.75rem 0" }}>
                          Salary Range: <span style={{ color: "#e8a020", fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>{article.salary}</span>
                        </div>
                      )}
                      {"code" in article && article.code && (
                        <pre style={{ background: "#0d1117", borderRadius: 4, padding: "1rem 1.25rem", margin: "1rem 0", fontFamily: "monospace", fontSize: "0.84rem", color: "#a6e3a1", overflowX: "auto", whiteSpace: "pre-wrap" }}>
                          {article.code}
                        </pre>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => toggle(article.id)}
                    style={{ marginTop: "0.75rem", background: "none", border: "1px solid #e0d8ce", padding: "7px 18px", borderRadius: 3, cursor: "pointer", fontSize: "0.82rem", color: "#0f1f3d", fontFamily: "inherit" }}
                  >
                    {expanded === article.id ? "Show Less ↑" : "Read More →"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SIDEBAR */}
          <div style={{ position: "sticky", top: 80, alignSelf: "start" }}>
            <div style={{ background: "white", border: "1px solid #e0d8ce", borderRadius: 4, padding: "1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f1f3d", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e0d8ce" }}>Popular Articles</div>
              {articles.slice(0, 5).map(a => (
                <button key={a.id} onClick={() => toggle(a.id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "0.5rem 0", borderBottom: "1px solid #e0d8ce" }}>
                  <span style={{ fontSize: "0.875rem", color: "#0f1f3d", fontWeight: 300, display: "block" }}>{a.title}</span>
                  <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>{a.tag}</span>
                </button>
              ))}
            </div>

            <div style={{ background: "white", border: "1px solid #e0d8ce", borderRadius: 4, padding: "1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f1f3d", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid #e0d8ce" }}>Browse by Topic</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {topics.map(t => (
                  <span key={t} style={{ fontSize: "0.75rem", padding: "4px 12px", border: "1px solid #e0d8ce", borderRadius: 20, color: "#6b7280", cursor: "pointer" }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ background: "#0f1f3d", borderRadius: 4, padding: "1.25rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e8a020", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Find Jobs on JobLynk</div>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "1rem", fontWeight: 300 }}>Browse thousands of jobs across India.</p>
              <a href="/" style={{ display: "block", textAlign: "center", background: "#e8a020", color: "#0f1f3d", padding: 10, borderRadius: 3, textDecoration: "none", fontSize: "0.85rem", fontWeight: 500 }}>Browse Jobs →</a>
            </div>
          </div>

        </div>
      </div>

      {/* NEWSLETTER */}
      <div style={{ background: "#0f1f3d", padding: "3rem 2rem", textAlign: "center" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "white", fontWeight: 400, marginBottom: "0.4rem" }}>Stay Ahead of the Job Market</h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", marginBottom: "1.5rem", fontWeight: 300 }}>Weekly career insights, job alerts, and salary data — every Tuesday, free.</p>
        {subscribed ? (
          <p style={{ color: "#e8a020", fontWeight: 500 }}>✓ You are subscribed! Welcome to JobLynk.</p>
        ) : (
          <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto" }}>
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, padding: "11px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", borderRadius: 3, fontFamily: "inherit", fontSize: "0.9rem", outline: "none" }} />
            <button onClick={handleSubscribe} style={{ background: "#e8a020", color: "#0f1f3d", border: "none", padding: "11px 22px", borderRadius: 3, fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer" }}>
              Subscribe Free
            </button>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#080f1e", color: "rgba(255,255,255,0.4)", padding: "1.75rem 2rem", textAlign: "center", fontSize: "0.82rem" }}>
        <p>© 2026 <a href="/" style={{ color: "#e8a020", textDecoration: "none" }}>JobLynk.live</a> — Find Jobs Easily Across India</p>
      </footer>

    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8a020", fontWeight: 500, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
      {text}
      <div style={{ flex: 1, height: 1, background: "#e8a020", opacity: 0.3 }} />
    </div>
  );
}