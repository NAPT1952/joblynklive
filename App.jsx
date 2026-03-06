
import React, { useEffect } from "react";
import Totals from "./Totals";
function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//finicounter.eu.org/finicounter.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ backgroundColor: "#0B1322", color: "#E9EEF2", fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <div className="container">
        
        {/* Navbar */}
        <div className="navbar">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="logo">
              JobLynk<span>.live</span>
            </div>
            <span className="logo-tagline">AI–human performance</span>
          </div>

          <div className="nav-links">
            <a href="#">platform</a>
            <a href="#">jpi</a>
            <a href="#">pricing</a>
            <a href="#">
              <span className="badge-teal">
                <i className="fas fa-shield-alt" style={{ marginRight: 4 }}></i> guarantee
              </span>
            </a>
            <span className="btn-outline-teal">sign in</span>
            <span className="btn-solid-teal">try readiness</span>

            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "5px 12px",
                borderRadius: 20,
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
              }}
            >
              Visitors: <span id="finicount_views"></span>+
            </div>
          </div>
        </div>

        {/* Hero */}
        <div
          style={{
            background: "url('abm.jpg') center/cover no-repeat",
            borderRadius: 40,
            padding: "60px 40px",
            margin: "40px 0",
          }}
        >
          <div style={{ background: "rgba(0,0,0,0.6)", padding: 40, borderRadius: 30 }}>
            <div className="hero-badge">
              <span className="badge-teal">
                <i className="fas fa-robot" style={{ marginRight: 6 }}></i> hybrid intelligence
              </span>
              <span className="badge-teal">
                <i className="fas fa-chart-line"></i> JPI certified
              </span>
            </div>

            <h1 style={{ color: "white" }}>
              Measure. Improve. Prove.
              <br />
              Your interview readiness, quantified.
            </h1>

            <div className="subhead" style={{ color: "#ddd" }}>
              Not a job board. A career performance platform that guarantees higher interview conversion through
              structured metrics — resume ATS, mock interviews, and the Job Performance Index (JPI).
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">+47%</span>
                <span className="stat-label">interview conversion</span>
              </div>

              <div className="stat-item">
                <span className="stat-value">89</span>
                <span className="stat-label">JPI score (top tier)</span>
              </div>

              <div className="stat-item">
                <span className="stat-value">12k</span>
                <span className="stat-label">readiness badges</span>
              </div>
            </div>

            <div className="disclaimer-tag">
              <i className="fas fa-times-circle"></i>
              <span>
                <strong style={{ color: "white" }}>This is NOT a job board.</strong> We do not list jobs — we engineer
                readiness before you apply.
              </span>
              <i className="fas fa-check-circle" style={{ color: "#2dd4bf" }}></i>
            </div>
          </div>
        </div>

        {/* Core readiness */}
        <h2 className="section-title" style={{ marginTop: 80 }}>
          Core readiness engine
        </h2>

        <div className="section-sub">Structured evaluation metrics, AI + human calibrated</div>

        <div className="grid-4col">

          <div className="card">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Resume analysis</h3>
            <p>
              ATS compatibility · keyword alignment · structural clarity · impact strength. Generates score &
              actionable edits.
            </p>

            <div className="metric-highlight">
              <span className="badge-teal">resume score → 84</span>
              <div style={{ marginTop: 10, fontSize: "0.9rem" }}>bullet point strength: high</div>
            </div>
          </div>

          <div className="card">
            <div className="feature-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Mock interview</h3>
            <p>Role-specific questions with structured evaluation.</p>
          </div>

          <div className="card">
            <div className="feature-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <h3>Job Performance Index</h3>

            <div className="jpi-preview" style={{ marginTop: 20 }}>
              <div className="jpi-ring">
                <span>78</span>
              </div>
              <div>
                <span style={{ color: "#2dd4bf" }}>current JPI</span>
                <br />
                target &gt;85
              </div>
            </div>
          </div>

          <div className="card">
            <div className="feature-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Performance badge</h3>
            <p>Shareable readiness badge once thresholds are crossed.</p>
          </div>
        </div>

        {/* Brain image section */}
        <section style={{ textAlign: "center", padding: 60, background: "#0B1C2C", color: "white" }}>
          <img
            src="p1.jpg"
            alt="AI readiness"
            style={{ width: "100%", maxWidth: 900, borderRadius: 10, marginBottom: 20 }}
          />
          <h2>Find Opportunities That Match Your Mindset</h2>
          <p>AI-driven readiness meets real-world performance.</p>
        </section>

        {/* Footer */}
        <footer style={{ padding: "48px 0 64px", color: "#8FA2C0", fontSize: "0.9rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
            <div>
              <span className="logo" style={{ fontSize: "1.8rem" }}>
                JobLynk<span>.live</span>
              </span>
              <p style={{ maxWidth: 300, marginTop: 16 }}>
                AI–human career performance. Not a job board — a readiness platform.
              </p>
            </div>

            <div>
              <p>
                <strong>platform</strong>
              </p>
              <p>resume analysis · mock interview · JPI · badge</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
