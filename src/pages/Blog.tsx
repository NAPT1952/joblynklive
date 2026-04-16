import React, { useState } from "react";

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "nontech">("all");

  const techPosts = [
    {
      id: 1,
      title: "Top 10 Programming Languages for 2024",
      category: "tech",
      date: "April 15, 2024",
      readTime: "5 min read",
      excerpt: "Discover which programming languages are in high demand and can boost your career prospects.",
      content: "Full content here..."
    },
    {
      id: 2,
      title: "How to Crack Technical Interviews at MAANG Companies",
      category: "tech",
      date: "April 10, 2024",
      readTime: "8 min read",
      excerpt: "Tips and strategies to prepare for technical interviews at Google, Amazon, Microsoft, and more.",
      content: "Full content here..."
    },
    {
      id: 3,
      title: "AI Tools Every Developer Should Know in 2024",
      category: "tech",
      date: "April 5, 2024",
      readTime: "6 min read",
      excerpt: "Boost your productivity with these AI-powered development tools.",
      content: "Full content here..."
    },
    {
      id: 4,
      title: "Remote Work: Best Practices for Indian IT Professionals",
      category: "tech",
      date: "March 28, 2024",
      readTime: "7 min read",
      excerpt: "How to succeed in remote work environments and maintain work-life balance.",
      content: "Full content here..."
    }
  ];

  const nonTechPosts = [
    {
      id: 5,
      title: "Soft Skills That Matter Most in 2024",
      category: "nontech",
      date: "April 12, 2024",
      readTime: "4 min read",
      excerpt: "Communication, leadership, and emotional intelligence - skills every employer values.",
      content: "Full content here..."
    },
    {
      id: 6,
      title: "How to Write a Cover Letter That Gets Noticed",
      category: "nontech",
      date: "April 8, 2024",
      readTime: "6 min read",
      excerpt: "Step-by-step guide to crafting cover letters that HR managers actually read.",
      content: "Full content here..."
    },
    {
      id: 7,
      title: "Networking Strategies for Job Seekers",
      category: "nontech",
      date: "April 3, 2024",
      readTime: "5 min read",
      excerpt: "Build meaningful professional connections online and offline.",
      content: "Full content here..."
    },
    {
      id: 8,
      title: "Salary Negotiation Tips for Indian Job Market",
      category: "nontech",
      date: "March 25, 2024",
      readTime: "7 min read",
      excerpt: "Learn how to negotiate your salary confidently and get what you deserve.",
      content: "Full content here..."
    }
  ];

  const allPosts = [...techPosts, ...nonTechPosts];

  const getFilteredPosts = () => {
    if (activeCategory === "tech") return techPosts;
    if (activeCategory === "nontech") return nonTechPosts;
    return allPosts;
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0f172a", textAlign: "center", marginBottom: "0.5rem" }}>
        JobLynk Blog
      </h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "2rem" }}>
        Career advice, tech insights, and job search strategies
      </p>

      {/* Category Tabs */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "3rem",
        borderBottom: "1px solid #e2e8f0",
        paddingBottom: "1rem"
      }}>
        <button
          onClick={() => setActiveCategory("all")}
          style={{
            padding: "0.5rem 1.5rem",
            background: activeCategory === "all" ? "#2563eb" : "transparent",
            color: activeCategory === "all" ? "white" : "#64748b",
            border: activeCategory === "all" ? "none" : "1px solid #e2e8f0",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          All Posts
        </button>
        <button
          onClick={() => setActiveCategory("tech")}
          style={{
            padding: "0.5rem 1.5rem",
            background: activeCategory === "tech" ? "#2563eb" : "transparent",
            color: activeCategory === "tech" ? "white" : "#64748b",
            border: activeCategory === "tech" ? "none" : "1px solid #e2e8f0",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          💻 Tech
        </button>
        <button
          onClick={() => setActiveCategory("nontech")}
          style={{
            padding: "0.5rem 1.5rem",
            background: activeCategory === "nontech" ? "#2563eb" : "transparent",
            color: activeCategory === "nontech" ? "white" : "#64748b",
            border: activeCategory === "nontech" ? "none" : "1px solid #e2e8f0",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          🎯 Non-Tech
        </button>
      </div>

      {/* Blog Posts Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        gap: "2rem"
      }}>
        {getFilteredPosts().map((post) => (
          <div
            key={post.id}
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "1.5rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              display: "inline-block",
              padding: "4px 12px",
              background: post.category === "tech" ? "#dbeafe" : "#fef3c7",
              color: post.category === "tech" ? "#2563eb" : "#d97706",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>
              {post.category === "tech" ? "💻 Tech" : "🎯 Non-Tech"}
            </div>
            
            <h3 style={{ fontSize: "1.3rem", color: "#0f172a", marginBottom: "0.5rem" }}>
              {post.title}
            </h3>
            
            <div style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              fontSize: "0.85rem",
              color: "#64748b"
            }}>
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
            
            <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "1rem" }}>
              {post.excerpt}
            </p>
            
            <button
              style={{
                background: "transparent",
                color: "#2563eb",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                padding: "0"
              }}
              onClick={() => alert(`Full article: ${post.title}\n\n${post.content}\n\nCheck back for complete content!`)}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div style={{
        marginTop: "4rem",
        padding: "2rem",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        borderRadius: "16px",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Subscribe to Our Newsletter</h2>
        <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
          Get weekly career tips and job opportunities delivered to your inbox.
        </p>
        <div style={{ display: "flex", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              fontSize: "1rem"
            }}
          />
          <button
            style={{
              padding: "0.75rem 1.5rem",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600"
            }}
            onClick={() => alert("Newsletter subscription feature coming soon!")}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;