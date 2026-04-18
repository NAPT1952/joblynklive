import React, { useState } from "react";

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "nontech">("all");

  const techPosts = [
    { id: 1, title: "Top 10 Programming Languages for 2024", category: "tech", date: "April 15, 2024", readTime: "5 min read", excerpt: "Discover which programming languages are in high demand.", link: "/blog-pages/tech-blog1.html" },
    { id: 2, title: "How to Crack Technical Interviews at MAANG Companies", category: "tech", date: "April 10, 2024", readTime: "8 min read", excerpt: "Tips for Google, Amazon, Microsoft interviews.", link: "/blog-pages/tech-blog2.html" },
    { id: 3, title: "AI Tools Every Developer Should Know in 2024", category: "tech", date: "April 5, 2024", readTime: "6 min read", excerpt: "Boost productivity with AI-powered tools.", link: "/blog-pages/tech-blog3.html" },
    { id: 4, title: "Remote Work: Best Practices for Indian IT Professionals", category: "tech", date: "March 28, 2024", readTime: "7 min read", excerpt: "Succeed in remote work environments.", link: "/blog-pages/tech-blog4.html" },
    { id: 5, title: "Product Manager Career in India", category: "tech", date: "April 16, 2024", readTime: "8 min read", excerpt: "Complete guide to Product Management careers in India.", link: "/blog-pages/product-manager-career.html" },
    { id: 6, title: "Cybersecurity Analyst Career in India", category: "tech", date: "April 16, 2024", readTime: "8 min read", excerpt: "Complete guide to cybersecurity careers in India.", link: "/blog-pages/cybersecurity-analyst-career.html" },
    { id: 7, title: "Top AI Tools Indians Are Using to Save Time and Make Money in 2026", category: "tech", date: "April 16, 2024", readTime: "8 min read", excerpt: "Discover the AI tools helping Indians save time and earn more.", link: "/blog-pages/ai-tools-india.html" },
    { id: 8, title: "Canva AI – Design Without Hiring Designers", category: "tech", date: "April 17, 2024", readTime: "8 min read", excerpt: "How Canva AI is helping Indians design better and earn more.", link: "/blog-pages/canva-ai-design.html" },
    { id: 9, title: "Data Analyst Career in India", category: "tech", date: "April 17, 2024", readTime: "7 min read", excerpt: "Complete guide to becoming a data analyst in India.", link: "/blog-pages/data-analyst-career.html" },
    { id: 10, title: "How to Use LinkedIn to Get Hired in 2026", category: "tech", date: "April 17, 2024", readTime: "8 min read", excerpt: "Master LinkedIn to land your dream job.", link: "/blog-pages/linkedin-job-guide.html" },
    { id: 11, title: "Best High-Paying Tech Jobs in India Without a CS Degree", category: "tech", date: "April 17, 2024", readTime: "8 min read", excerpt: "Top tech careers that don't require a CS degree.", link: "/blog-pages/tech-jobs-no-cs-degree.html" },
    { id: 12, title: "How to Start a Cybersecurity Career in India", category: "tech", date: "April 17, 2024", readTime: "8 min read", excerpt: "Beginner's guide to cybersecurity careers.", link: "/blog-pages/cybersecurity-careers-india.html" },
    { id: 13, title: "Cloud Computing Jobs in India", category: "tech", date: "April 17, 2024", readTime: "8 min read", excerpt: "Complete guide to AWS, Azure, and GCP careers.", link: "/blog-pages/cloud-computing-jobs-india.html" },
    { id: 14, title: "Cybersecurity Jobs in India: Complete Hiring Guide 2026", category: "tech", date: "April 17, 2024", readTime: "8 min read", excerpt: "Complete guide to cybersecurity jobs.", link: "/blog-pages/cybersecurity-careers-2026.html" },
    { id: 15, title: "The Indian Tech Job Market in 2026", category: "tech", date: "April 17, 2024", readTime: "5 min read", excerpt: "Most in-demand tech roles in 2026.", link: "/blog-pages/tech-job-market-2026.html" },
    { id: 16, title: "Internships in India: Fastest Route to Full-Time Jobs", category: "tech", date: "April 17, 2024", readTime: "5 min read", excerpt: "How internships lead to full-time offers.", link: "/blog-pages/internships-india.html" },
    { id: 17, title: "Best Job Portals in India for Tech Candidates in 2026", category: "tech", date: "April 17, 2024", readTime: "6 min read", excerpt: "Top job portals for tech professionals and freshers. Where to apply for real opportunities in 2026.", link: "/blog-pages/best-job-portals-india.html" },
  ];

  const nonTechPosts = [
    { id: 17, title: "Soft Skills That Matter Most in 2024", category: "nontech", date: "April 12, 2024", readTime: "4 min read", excerpt: "Skills every employer values.", link: "/blog-pages/nontech-blog1.html" },
    { id: 18, title: "How to Write a Cover Letter That Gets Noticed", category: "nontech", date: "April 8, 2024", readTime: "6 min read", excerpt: "Step-by-step cover letter guide.", link: "/blog-pages/nontech-blog2.html" },
    { id: 19, title: "Networking Strategies for Job Seekers", category: "nontech", date: "April 3, 2024", readTime: "5 min read", excerpt: "Build professional connections.", link: "/blog-pages/nontech-blog3.html" },
    { id: 20, title: "Salary Negotiation Tips for Indian Job Market", category: "nontech", date: "March 25, 2024", readTime: "7 min read", excerpt: "Negotiate your salary confidently.", link: "/blog-pages/nontech-blog4.html" },
    { id: 21, title: "How to Crack a Sales Executive Interview", category: "nontech", date: "April 16, 2024", readTime: "7 min read", excerpt: "Word-for-word sales interview scripts.", link: "/blog-pages/sales-executive-interview.html" },
    { id: 22, title: "What Employers Look for in Non-Tech Candidates", category: "nontech", date: "April 16, 2024", readTime: "8 min read", excerpt: "What hiring managers truly value.", link: "/blog-pages/non-tech-employer-expectations.html" },
    { id: 23, title: "Best Non-Tech Jobs in India 2026", category: "nontech", date: "April 16, 2024", readTime: "8 min read", excerpt: "Top 10 non-tech careers with growth.", link: "/blog-pages/best-nontech-jobs-2026.html" },
    { id: 24, title: "Resume Mistakes That Kill Job Chances", category: "nontech", date: "April 16, 2024", readTime: "8 min read", excerpt: "12 common resume mistakes to avoid.", link: "/blog-pages/resume-mistakes.html" },
    { id: 25, title: "Interview Secrets HR Managers Won't Tell You", category: "nontech", date: "April 16, 2024", readTime: "9 min read", excerpt: "12 interview secrets HR managers evaluate.", link: "/blog-pages/interview-secrets.html" },
    { id: 26, title: "Operations & Logistics Interview Scripts", category: "nontech", date: "April 16, 2024", readTime: "7 min read", excerpt: "8 key operations interview questions.", link: "/blog-pages/operations-logistics-interview.html" },
    { id: 27, title: "Bank Job Interview Scripts for Non-Tech Roles", category: "nontech", date: "April 16, 2024", readTime: "7 min read", excerpt: "BFSI interview answers and scripts.", link: "/blog-pages/bank-job-interview.html" },
    { id: 28, title: "Salary Negotiation Scripts for Indian Professionals", category: "nontech", date: "April 17, 2024", readTime: "6 min read", excerpt: "Real scripts for salary negotiation.", link: "/blog-pages/salary-negotiation-scripts.html" },
    { id: 29, title: "10 Resume Templates That Got Indians Hired", category: "nontech", date: "April 17, 2024", readTime: "5 min read", excerpt: "Proven resume templates for success.", link: "/blog-pages/resume-templates.html" },
    { id: 30, title: "Healthcare Administration Jobs in India", category: "nontech", date: "April 17, 2024", readTime: "6 min read", excerpt: "Career guide for healthcare administration.", link: "/blog-pages/healthcare-admin-jobs.html" },
    { id: 31, title: "Freshers in India: Why Many Are Unemployed", category: "nontech", date: "April 17, 2024", readTime: "6 min read", excerpt: "How freshers can break into tech.", link: "/blog-pages/freshers-unemployed-tech.html" },
    { id: 32, title: "What HR Managers Secretly Reject Candidates For", category: "nontech", date: "April 17, 2024", readTime: "5 min read", excerpt: "Hidden reasons candidates get rejected.", link: "/blog-pages/hr-rejection-reasons.html" },
    { id: 33, title: "Smart Job Application Strategy for Indian Candidates", category: "nontech", date: "April 17, 2024", readTime: "5 min read", excerpt: "Apply better, not just more.", link: "/blog-pages/job-application-strategy.html" }
  ];

  const featuredPosts = [
    { id: 7, title: "Top AI Tools Indians Are Using", category: "tech", excerpt: "Discover the AI tools helping Indians save time and earn more.", link: "/blog-pages/ai-tools-india.html" },
    { id: 21, title: "How to Crack a Sales Executive Interview", category: "nontech", excerpt: "Word-for-word scripts that work for sales interviews.", link: "/blog-pages/sales-executive-interview.html" },
    { id: 5, title: "Product Manager Career in India", category: "tech", excerpt: "Complete guide to Product Management careers.", link: "/blog-pages/product-manager-career.html" },
    { id: 24, title: "Resume Mistakes That Kill Job Chances", category: "nontech", excerpt: "12 common resume mistakes to avoid.", link: "/blog-pages/resume-mistakes.html" },
    { id: 13, title: "Cloud Computing Jobs in India", category: "tech", excerpt: "Complete guide to AWS, Azure, and GCP careers.", link: "/blog-pages/cloud-computing-jobs-india.html" },
    { id: 25, title: "Interview Secrets HR Managers Won't Tell You", category: "nontech", excerpt: "12 interview secrets HR managers evaluate.", link: "/blog-pages/interview-secrets.html" }
  ];

  const allPosts = [...techPosts, ...nonTechPosts];

  const getFilteredPosts = () => {
    if (activeCategory === "tech") return techPosts;
    if (activeCategory === "nontech") return nonTechPosts;
    return allPosts;
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>JobLynk Blog</h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "2rem" }}>Career advice, tech insights, and job search strategies</p>

      {/* Weekly Series Section */}
      <div style={{ marginBottom: "3rem", background: "linear-gradient(135deg, #0f172a, #1e293b)", borderRadius: "16px", padding: "2rem", color: "white", textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem" }}>📅 Weekly Career Series</h2>
        <p style={{ marginBottom: "1.5rem", color: "#94a3b8" }}>New articles every Monday, Wednesday, Friday & Sunday</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div><span style={{ fontSize: "1.5rem" }}>🎓</span><br/><strong>Monday</strong><br/>Fresher Guide</div>
          <div><span style={{ fontSize: "1.5rem" }}>🤫</span><br/><strong>Wednesday</strong><br/>HR Secrets</div>
          <div><span style={{ fontSize: "1.5rem" }}>📈</span><br/><strong>Friday</strong><br/>Skills in Demand</div>
          <div><span style={{ fontSize: "1.5rem" }}>🗺️</span><br/><strong>Sunday</strong><br/>Internship Roadmap</div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>⭐ Featured Articles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {featuredPosts.map((post) => (
            <div key={post.id} style={{ background: "linear-gradient(135deg, #fef3c7, #fff)", border: "1px solid #fbbf24", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ display: "inline-block", padding: "4px 12px", background: post.category === "tech" ? "#dbeafe" : "#fef3c7", color: post.category === "tech" ? "#2563eb" : "#d97706", borderRadius: "20px", fontSize: "0.75rem", marginBottom: "1rem" }}>
                {post.category === "tech" ? "Tech" : "Non-Tech"}
              </div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{post.title}</h3>
              <p style={{ color: "#475569", marginBottom: "1rem" }}>{post.excerpt}</p>
              <a href={post.link} style={{ color: "#2563eb", textDecoration: "none", fontWeight: "600" }}>Read More →</a>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
        <button onClick={() => setActiveCategory("all")} style={{ padding: "0.5rem 1.5rem", background: activeCategory === "all" ? "#2563eb" : "transparent", color: activeCategory === "all" ? "white" : "#64748b", border: "1px solid #e2e8f0", borderRadius: "8px", cursor: "pointer" }}>All Posts</button>
        <button onClick={() => setActiveCategory("tech")} style={{ padding: "0.5rem 1.5rem", background: activeCategory === "tech" ? "#2563eb" : "transparent", color: activeCategory === "tech" ? "white" : "#64748b", border: "1px solid #e2e8f0", borderRadius: "8px", cursor: "pointer" }}>Tech</button>
        <button onClick={() => setActiveCategory("nontech")} style={{ padding: "0.5rem 1.5rem", background: activeCategory === "nontech" ? "#2563eb" : "transparent", color: activeCategory === "nontech" ? "white" : "#64748b", border: "1px solid #e2e8f0", borderRadius: "8px", cursor: "pointer" }}>Non-Tech</button>
      </div>

      {/* Blog Posts Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "2rem" }}>
        {getFilteredPosts().map((post) => (
          <div key={post.id} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem" }}>
            <div style={{ display: "inline-block", padding: "4px 12px", background: post.category === "tech" ? "#dbeafe" : "#fef3c7", color: post.category === "tech" ? "#2563eb" : "#d97706", borderRadius: "20px", fontSize: "0.75rem", marginBottom: "1rem" }}>
              {post.category === "tech" ? "Tech" : "Non-Tech"}
            </div>
            <h3>{post.title}</h3>
            <div style={{ display: "flex", gap: "1rem", fontSize: "0.85rem", color: "#64748b" }}>📅 {post.date} | ⏱️ {post.readTime}</div>
            <p>{post.excerpt}</p>
            <a href={post.link} style={{ color: "#2563eb", textDecoration: "none" }}>Read More →</a>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div style={{ marginTop: "4rem", padding: "2rem", background: "linear-gradient(135deg, #0f172a, #1e293b)", borderRadius: "16px", textAlign: "center", color: "white" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Subscribe to Our Newsletter</h2>
        <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>Get weekly career tips and job opportunities delivered to your inbox.</p>
        <div style={{ display: "flex", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}>
          <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", border: "none", fontSize: "1rem" }} />
          <button style={{ padding: "0.75rem 1.5rem", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }} onClick={() => alert("Newsletter subscription coming soon!")}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;