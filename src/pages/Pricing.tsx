import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>Pricing Plans</h1>
      <p style={{ textAlign: "center", color: "#64748b" }}>Simple, transparent pricing for job seekers</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
        <div style={{ background: "white", border: "1px solid #ccc", borderRadius: "16px", padding: "1.5rem", textAlign: "center" }}>
          <h2>White Plan</h2>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb" }}>₹49</p>
          <ul style={{ textAlign: "left" }}>
            <li>✓ 1 Professional Resume</li>
            <li>✓ 1 Cover Letter</li>
            <li>✓ 20 Employer Contacts</li>
          </ul>
          <Link to="/payportal"><button style={{ background: "#2563eb", color: "white", padding: "10px", width: "100%", border: "none", borderRadius: "8px" }}>Choose Plan</button></Link>
        </div>
        
        <div style={{ background: "white", border: "2px solid #fbbf24", borderRadius: "16px", padding: "1.5rem", textAlign: "center" }}>
          <h2>Gold Plan</h2>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#fbbf24" }}>₹99</p>
          <ul style={{ textAlign: "left" }}>
            <li>✓ 1 Professional Resume</li>
            <li>✓ 1 Cover Letter</li>
            <li>✓ 20 Employer Contacts (Daily × 5 Days)</li>
          </ul>
          <Link to="/payportal"><button style={{ background: "#fbbf24", color: "#0f172a", padding: "10px", width: "100%", border: "none", borderRadius: "8px" }}>Choose Plan</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;