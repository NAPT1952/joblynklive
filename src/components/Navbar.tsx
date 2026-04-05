import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emblem from "../assets/emblem.jpg";

const Navbar: React.FC = () => {
  const [blogOpen, setBlogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setBlogOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pages = [
    { name: "Home",            path: "/",               desc: "Main dashboard" },
    { name: "About",           path: "/about",          desc: "About our platform" },
    { name: "Jobs",            path: "/jobs",           desc: "Find career opportunities" },
    { name: "Pricing",         path: "/pricing",        desc: "Subscription plans" },
    { name: "Resume Builder",  path: "/resumebuilder",  desc: "Create your CV" },
    { name: "Samples Vault",   path: "/samplesvault",   desc: "View resume samples" },
    { name: "Employer Portal", path: "/employerportal", desc: "Recruiter access" },
    { name: "Pay Portal",      path: "/payportal",      desc: "Payments & billing" },
    { name: "Contact",         path: "/contact",        desc: "Reach our team" },
  ];

  const blogOptions = [
    { name: "Technical Blogs",     path: "/blog",     filter: "tech",    desc: "Dev, Data, AI, DevOps, UX", icon: "💻" },
    { name: "Non-Technical Blogs", path: "/blog",     filter: "nontech", desc: "Sales, HR, Marketing, Finance", icon: "💼" },
    { name: "All Blogs",           path: "/blog",     filter: "all",     desc: "View everything", icon: "📚" },
  ];

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "8px",
    width: "130px",
    textDecoration: "none",
    textAlign: "center",
    background: "#f7f7f7",
    display: "block",
    color: "inherit",
  };

  const handleBlogOption = (filter: string) => {
    setBlogOpen(false);
    navigate('/blog', { state: { filter } });
  };

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      background: "#ffffff",
      padding: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <img
        src={emblem}
        alt="logo"
        style={{ width: "50px", height: "50px", marginRight: "20px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "flex-start" }}>

        {/* Regular nav links */}
        {pages.map((p) => (
          <Link
            key={p.name}
            to={p.path}
            style={cardStyle}
          >
            <div style={{ fontWeight: "bold", fontSize: "13px" }}>{p.name}</div>
            <div style={{ fontSize: "11px", marginTop: "4px", color: "#666" }}>{p.desc}</div>
          </Link>
        ))}

        {/* ── BLOG DROPDOWN CARD ── */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            onClick={() => setBlogOpen(!blogOpen)}
            style={{
              ...cardStyle,
              cursor: "pointer",
              background: blogOpen ? "#0B1A2E" : "#f7f7f7",
              border: blogOpen ? "1px solid #00C896" : "1px solid #ccc",
              width: "130px",
              fontFamily: "inherit",
            }}
          >
            <div style={{
              fontWeight: "bold",
              fontSize: "13px",
              color: blogOpen ? "#00C896" : "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}>
              Blog
              <span style={{
                fontSize: "9px",
                display: "inline-block",
                transform: blogOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}>▼</span>
            </div>
            <div style={{
              fontSize: "11px",
              marginTop: "4px",
              color: blogOpen ? "#6B90B0" : "#666",
            }}>
              Career tips & articles
            </div>
          </button>

          {/* Dropdown menu */}
          {blogOpen && (
            <div style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#0B1A2E",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "8px",
              minWidth: "220px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
              zIndex: 2000,
            }}>
              {/* Arrow tip */}
              <div style={{
                position: "absolute",
                top: "-6px",
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: "10px",
                height: "10px",
                background: "#0B1A2E",
                borderLeft: "1px solid rgba(255,255,255,0.12)",
                borderTop: "1px solid rgba(255,255,255,0.12)",
              }} />

              {blogOptions.map((opt, i) => (
                <React.Fragment key={opt.filter}>
                  <button
                    onClick={() => handleBlogOption(opt.filter)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "inherit",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <div style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      background: opt.filter === 'tech'
                        ? "rgba(0,200,150,0.15)"
                        : opt.filter === 'nontech'
                        ? "rgba(26,110,245,0.15)"
                        : "rgba(255,255,255,0.06)",
                      flexShrink: 0,
                    }}>
                      {opt.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 500, color: "#C8D8E8" }}>
                        {opt.name}
                      </div>
                      <div style={{ fontSize: "11px", color: "#4A6A8A", marginTop: "1px" }}>
                        {opt.desc}
                      </div>
                    </div>
                  </button>

                  {/* Divider between items */}
                  {i < blogOptions.length - 1 && (
                    <div style={{
                      height: "1px",
                      background: "rgba(255,255,255,0.06)",
                      margin: "4px 0",
                    }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
