import React from "react";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white", textAlign: "center", padding: "0 20px" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", marginBottom: "1rem", fontWeight: "700" }}>JobLynk.live</h1>
        <p style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", maxWidth: "700px", marginBottom: "3rem", color: "#e2e8f0" }}>Bridging Jobs & Talent</p>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "30px 40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.2)", minWidth: "280px", textAlign: "left" }}>
            <h2 style={{ color: "#fff", margin: "0 0 15px 0", fontSize: "1.8rem" }}>White - Rs49</h2>
            <p>Professional Resume</p>
            <p>Cover Letter</p>
            <p>1 Updated Employee Data List</p>
          </div>
          <div style={{ background: "rgba(180,83,9,0.3)", padding: "30px 40px", borderRadius: "24px", border: "2px solid #b45309", minWidth: "280px", textAlign: "left" }}>
            <h2 style={{ color: "#fbbf24", margin: "0 0 15px 0", fontSize: "1.8rem" }}>Gold - Rs99</h2>
            <p>AI-Optimized Resume</p>
            <p>AI-Optimized Cover Letter</p>
            <p>Premium Data List</p>
          </div>
        </div>
        <a href="/pricing" style={{ padding: "16px 48px", background: "#2563eb", color: "white", borderRadius: "50px", fontSize: "1.2rem", fontWeight: "600", textDecoration: "none", marginBottom: "1.5rem" }}>Get Started</a>
        <p style={{ color: "#94a3b8" }}>tech-support@joblynk.live</p>
      </div>

      <div style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "20px" }}>Bridging the Gap Between Jobs & Talent</h2>
          <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto 40px" }}>JobLynk.live was born from a simple observation: millions of skilled Indian workers struggle to present themselves professionally to employers. We make job application tools affordable and simple.</p>
          <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
            <div><h3 style={{ color: "#2563eb", fontSize: "2.2rem", margin: 0 }}>500+</h3><p style={{ color: "#475569" }}>Job Seekers Placed</p></div>
            <div><h3 style={{ color: "#2563eb", fontSize: "2.2rem", margin: 0 }}>200+</h3><p style={{ color: "#475569" }}>Verified Employers</p></div>
          </div>
        </div>
      </div>

      <div style={{ padding: "80px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#0f172a", textAlign: "center", marginBottom: "50px" }}>Meet the Team</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "#2563eb", width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2rem", fontWeight: "bold", margin: "0 auto 20px" }}>NAT</div>
              <h3 style={{ margin: "0 0 5px 0" }}>Nigel A Thomas</h3>
              <p style={{ color: "#64748b" }}>Founder</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#1e293b", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <h3 style={{ color: "#facc15", fontSize: "2rem", marginBottom: "20px" }}>We are Here to Help</h3>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Have questions? Our team responds within hours, not days.</p>
        <strong style={{ color: "#facc15", fontSize: "1.3rem" }}>joblynklive@gmail.com</strong>
      </div>

      <div style={{ background: "#0f172a", color: "#94a3b8", padding: "30px 20px", textAlign: "center", borderTop: "1px solid #334155" }}>
        <p>2024 JobLynk.live - Bridging Jobs and Talent</p>
        <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>No Refund Policy applies. All digital sales are final.</p>
      </div>
    </>
  );
};

export default Home;
