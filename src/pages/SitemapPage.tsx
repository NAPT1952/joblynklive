import React from 'react';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0f172a", textAlign: "center" }}>Site Map</h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "2rem" }}>All pages on JobLynk.live</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
        <div>
          <h2>Main Pages</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        
        <div>
          <h2>Services</h2>
          <ul>
            <li><Link to="/payportal">Pay Portal</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h2>Tools</h2>
          <ul>
            <li><Link to="/resumebuilder">Resume Builder</Link></li>
            <li><Link to="/resumetools">Resume Tools</Link></li>
            <li><Link to="/samplesvault">Samples Vault</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        
        <div>
          <h2>Legal</h2>
          <ul>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}