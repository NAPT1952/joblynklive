import React from "react";

const Terms: React.FC = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "1rem" }}>Terms & Conditions</h1>
      <p style={{ color: "#64748b", marginBottom: "2rem" }}>Last updated: April 16, 2024</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2563eb", marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
        <p style={{ lineHeight: "1.7", color: "#334155" }}>
          By accessing and using JobLynk.live, you accept and agree to be bound by these Terms & Conditions.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2563eb", marginBottom: "1rem" }}>2. Services</h2>
        <p style={{ lineHeight: "1.7", color: "#334155" }}>
          JobLynk provides resume building, cover letter creation, and employer contact data services. We do not guarantee job placement.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2563eb", marginBottom: "1rem" }}>3. Payments & Refunds</h2>
        <p style={{ lineHeight: "1.7", color: "#334155" }}>
          All payments are final. No refunds will be issued for digital services once delivered.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2563eb", marginBottom: "1rem" }}>4. Privacy</h2>
        <p style={{ lineHeight: "1.7", color: "#334155" }}>
          Your data is encrypted and never shared with third parties without your consent.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#2563eb", marginBottom: "1rem" }}>5. Contact</h2>
        <p style={{ lineHeight: "1.7", color: "#334155" }}>
          Questions? Email us at: joblynklive@gmail.com
        </p>
      </section>
    </div>
  );
};

export default Terms;