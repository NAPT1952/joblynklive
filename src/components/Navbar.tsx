import React from 'react';
import { Link } from 'react-router-dom';
import emblem from "../assets/emblem.jpg";

const Navbar = () => {
  const pages = [
    { name: "Home", path: "/", desc: "Main dashboard" },
    { name: "About", path: "/about", desc: "About our platform" },
    { name: "Jobs", path: "/jobs", desc: "Find career opportunities" },
    { name: "Pricing", path: "/pricing", desc: "Subscription plans" },
    { name: "Resume Builder", path: "/resumebuilder", desc: "Create your CV" },
    { name: "Samples Vault", path: "/samplesvault", desc: "View resume samples" },
    { name: "Employer Portal", path: "/employerportal", desc: "Recruiter access" },
    { name: "Pay Portal", path: "/payportal", desc: "Payments & billing" },
    { name: "Contact", path: "/contact", desc: "Reach our team" },
    { name: "Disclaimer", path: "/disclaimer", desc: "Legal information" },
    { name: "Support", path: "/support", desc: "Get help & contact" },
    { name: "Support", path: "/support", desc: "Get help & contact" },
    { name: "Blog", path: "/blog", desc: "Career tips & articles" },

  ];

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      padding: "12px 16px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
    }}>
      <img
        src={emblem}
        alt="logo"
        style={{
          width: "50px",
          height: "50px",
          marginRight: "20px",
          borderRadius: "50%",
          border: "2px solid #fbbf24"
        }}
      />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        {pages.map((p) => (
          <Link
            key={p.name}
            to={p.path}
            style={{
              border: "1px solid #b45309",
              borderRadius: "8px",
              padding: "8px",
              width: "120px",
              textDecoration: "none",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(180,83,9,0.2), rgba(180,83,9,0.1))",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #b45309, #92400e)";
              e.currentTarget.style.borderColor = "#fbbf24";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(180,83,9,0.2), rgba(180,83,9,0.1))";
              e.currentTarget.style.borderColor = "#b45309";
            }}
          >
            <div style={{ fontWeight: "bold", color: "#fbbf24", fontSize: "13px" }}>{p.name}</div>
            <div style={{ fontSize: "10px", marginTop: "3px", color: "#94a3b8" }}>{p.desc}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;