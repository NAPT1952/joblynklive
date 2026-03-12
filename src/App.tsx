import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import MapView from "./pages/MapView";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Totals from "./Totals";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#0B1322", color: "#E9EEF2", fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
        <div className="container">
          {/* Navbar */}
          <Totals />
          <div className="navbar">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="logo">
                JobLynk<span>.live</span>
              </div>
              <span className="logo-tagline">AI–human performance</span>
            </div>

            <div className="nav-links">
              <Link to="/">platform</Link>
              <Link to="/jpi">jpi</Link>  {/* This route doesn't exist yet; will show blank page for now */}
              <Link to="/pricing">pricing</Link>
              <Link to="/guarantee">
                <span className="badge-teal">
                  <i className="fas fa-shield-alt" style={{ marginRight: 4 }}></i> guarantee
                </span>
              </Link>
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

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            {/* Add other routes as needed */}
          </Routes>

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
                <p><strong>platform</strong></p>
                <p>resume analysis · mock interview · JPI · badge</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
