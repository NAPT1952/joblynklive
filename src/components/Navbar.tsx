import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emblem from "../assets/emblem.jpg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

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

  // Two separate visible blog buttons
  const blogButtons = [
    {
      filter: "tech",
      icon: "💻",
      name: "Technical Blogs",
      desc: "Dev, Data, AI & more",
      bg: "#0B1A2E",
      border: "#1E3350",
      hoverBorder: "#00C896",
      nameColor: "#00C896",
      descColor: "#6B90B0",
    },
    {
      filter: "nontech",
      icon: "💼",
      name: "Non-Technical Blogs",
      desc: "Sales, HR, Marketing",
      bg: "#EBF2FF",
      border: "#C7D8F8",
      hoverBorder: "#1A6EF5",
      nameColor: "#1A6EF5",
      descColor: "#4A6A9A",
    },
  ];

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
      flexWrap: "wrap",
      gap: "10px",
    }}>
      <img
        src={emblem}
        alt="logo"
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "flex-start" }}>

        {/* Regular nav links */}
        {pages.map((p) => (
          <Link
            key={p.name}
            to={p.path}
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "8px",
              width: "130px",
              textDecoration: "none",
              textAlign: "center",
              background: "#f7f7f7",
              display: "block",
              color: "inherit",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "13px" }}>{p.name}</div>
            <div style={{ fontSize: "11px", marginTop: "4px", color: "#666" }}>{p.desc}</div>
          </Link>
        ))}

        {/* ── BLOG SPLIT BUTTONS ── */}
        {blogButtons.map((btn) => (
          <button
            key={btn.filter}
            onClick={() => navigate('/blog', { state: { filter: btn.filter } })}
            style={{
              border: `1px solid ${btn.border}`,
              borderRadius: "6px",
              padding: "8px",
              width: "130px",
              cursor: "pointer",
              textAlign: "center",
              background: btn.bg,
              fontFamily: "inherit",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = btn.hoverBorder;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = btn.border;
            }}
          >
            <div style={{ fontSize: "16px", marginBottom: "2px" }}>{btn.icon}</div>
            <div style={{ fontWeight: "bold", fontSize: "12px", color: btn.nameColor, lineHeight: 1.2 }}>
              {btn.name}
            </div>
            <div style={{ fontSize: "10px", marginTop: "3px", color: btn.descColor }}>
              {btn.desc}
            </div>
          </button>
        ))}

      </div>
    </nav>
  );
};

export default Navbar;
