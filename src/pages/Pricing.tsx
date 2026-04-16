import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0f172a", textAlign: "center", marginBottom: "2rem" }}>
        Simple, Transparent Pricing
      </h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "3rem" }}>
        No subscriptions. No hidden fees. Pay once, get results.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
        
        {/* White Plan */}
        <div style={{
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "2rem",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "0.5rem" }}>White Plan</h2>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#2563eb", marginBottom: "1rem" }}>₹49</p>
          <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>One-time payment</p>
          
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> 1 Professional Resume (ATS-optimized)
            </li>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> 1 Tailored Cover Letter
            </li>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> 20 Employer/HR Manager Contacts
            </li>
          </ul>
          
          <Link to="/payportal">
            <button style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer"
            }}>Choose White Plan</button>
          </Link>
        </div>
        
        {/* Gold Plan */}
        <div style={{
          background: "linear-gradient(135deg, #fff9e6, #fff)",
          border: "2px solid #fbbf24",
          borderRadius: "16px",
          padding: "2rem",
          textAlign: "center",
          position: "relative",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
        }}>
          <div style={{
            position: "absolute",
            top: "-12px",
            right: "20px",
            background: "#fbbf24",
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: "bold"
          }}>POPULAR</div>
          
          <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "0.5rem" }}>Gold Plan</h2>
          <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#fbbf24", marginBottom: "1rem" }}>₹99</p>
          <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>One-time payment</p>
          
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> 1 Professional Resume (ATS-optimized)
            </li>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> 1 Tailored Cover Letter
            </li>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> 20 Employer Contacts (Daily × 5 Days)
            </li>
            <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span> Priority Support
            </li>
          </ul>
          
          <Link to="/payportal">
            <button style={{
              width: "100%",
              padding: "12px",
              background: "#fbbf24",
              color: "#0f172a",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer"
            }}>Choose Gold Plan</button>
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ marginTop: "4rem", padding: "2rem", background: "#f8fafc", borderRadius: "16px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
        
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }}>
            <h3>❓ What happens after I pay?</h3>
            <p style={{ color: "#475569" }}>You'll receive your resume, cover letter, and employer contacts within 24 hours.</p>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <h3>❓ Is there a refund policy?</h3>
            <p style={{ color: "#475569" }}>All digital sales are final. No refunds apply.</p>
          </div>
          <div>
            <h3>❓ How do I get my documents?</h3>
            <p style={{ color: "#475569" }}>We'll email them to the address you provide during checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;