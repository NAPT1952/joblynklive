import React from 'react';
import './App.css'; // You'll need to create this

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo">JobLynk<span>.live</span></div>
          <span className="logo-tagline">AI–human performance</span>
        </div>
        
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/map">Map View</a>
          <a href="/contact">Contact Us</a>
          <button className="btn-login">LOGIN</button>
          <button className="btn-register">REGISTER</button>
          <div className="visitor-counter">
            Visitors: <span id="finicount_views"></span>+
          </div>
        </div>
      </nav>

      {/* Hero Section with Banner */}
      <div className="banner">
        <div className="banner-content">
          <div className="spheres">
            <div className="sphere left">
              <h1>AI</h1>
            </div>
            <div className="sphere right">
              <h1>BM</h1>
            </div>
          </div>
          
          <div className="hands">
            <div className="hand robot"></div>
            <div className="hand human"></div>
          </div>

          <div className="emblem"></div>

          <div className="hero-text">
            <div className="hero-badges">
              <span className="badge"><i className="fas fa-robot"></i> hybrid intelligence</span>
              <span className="badge"><i className="fas fa-chart-line"></i> JPI certified</span>
            </div>
            
            <h1>Measure. Improve. Prove.<br />Your interview readiness, quantified.</h1>
            
            <p className="subhead">
              Not a job board. A career performance platform that guarantees higher 
              interview conversion through structured metrics — resume ATS, mock 
              interviews, and the Job Performance Index (JPI).
            </p>

            <div className="stats">
              <div className="stat">
                <span className="stat-value">+47%</span>
                <span className="stat-label">interview conversion</span>
              </div>
              <div className="stat">
                <span className="stat-value">89</span>
                <span className="stat-label">JPI score (top tier)</span>
              </div>
              <div className="stat">
                <span className="stat-value">12k</span>
                <span className="stat-label">readiness badges</span>
              </div>
            </div>

            <div className="disclaimer">
              <i className="fas fa-times-circle"></i>
              <span><strong>This is NOT a job board.</strong> We do not list jobs — we engineer readiness before you apply.</span>
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Core Readiness Engine */}
      <section className="features">
        <h2>Core readiness engine</h2>
        <p className="section-sub">Structured evaluation metrics, AI + human calibrated</p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-file-alt"></i>
            <h3>Resume analysis</h3>
            <p>ATS compatibility · keyword alignment · structural clarity · impact strength. Generates score & actionable edits.</p>
            <div className="metric">
              <span className="badge">resume score → 84</span>
            </div>
          </div>

          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Mock interview</h3>
            <p>Role-specific questions, text-based response. Evaluate clarity, structure, relevance & outcome orientation.</p>
            <div className="metric">
              <span className="badge">clarity 92</span>
              <span className="badge">relevance 88</span>
            </div>
          </div>

          <div className="feature-card">
            <i className="fas fa-tachometer-alt"></i>
            <h3>Job Performance Index™</h3>
            <p>Composite readiness: resume score + interview + role alignment. The universal readiness metric.</p>
            <div className="jpi-display">
              <div className="jpi-ring">
                <span>78</span>
              </div>
              <div>
                <span className="teal">current JPI</span><br />
                target &gt;85
              </div>
            </div>
          </div>

          <div className="feature-card">
            <i className="fas fa-certificate"></i>
            <h3>Performance badge</h3>
            <p>Shareable digital readiness badge when you cross predefined thresholds. Proof of prep.</p>
            <div className="badge-preview">
              <i className="fas fa-shield-alt"></i>
              <span>JPI ready <span className="teal">⏺ elite</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>tiered readiness</h2>
        <div className="pricing-grid">
          {/* Basic Plan */}
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">₹999 <small>/mo</small></div>
            <ul>
              <li><i className="fas fa-check-circle"></i> Resume scan (ATS + structure)</li>
              <li><i className="fas fa-check-circle"></i> Basic alignment feedback</li>
              <li><i className="fas fa-times-circle"></i> No interview simulation</li>
              <li><i className="fas fa-times-circle"></i> No JPI</li>
            </ul>
            <button className="btn-outline">start free scan</button>
          </div>

          {/* Smart Growth Plan */}
          <div className="pricing-card featured">
            <h3>Smart Growth</h3>
            <div className="price">₹2,999 <small>/mo</small></div>
            <ul>
              <li><i className="fas fa-check-circle"></i> Resume + interview simulation</li>
              <li><i className="fas fa-check-circle"></i> JPI composite score</li>
              <li><i className="fas fa-check-circle"></i> Role alignment %</li>
              <li><i className="fas fa-times-circle"></i> Badge qualification</li>
            </ul>
            <button className="btn-solid">upgrade readiness</button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card">
            <h3>Pro Acceleration</h3>
            <div className="price">₹5,999 <small>/mo</small></div>
            <ul>
              <li><i className="fas fa-check-circle"></i> Full system: resume + interview</li>
              <li><i className="fas fa-check-circle"></i> JPI + badge qualification</li>
              <li><i className="fas fa-check-circle"></i> Re-optimization support</li>
              <li><i className="fas fa-check-circle"></i> Guaranteed improvement</li>
            </ul>
            <button className="btn-solid">go pro</button>
          </div>
        </div>
      </section>

      {/* Assurance Block */}
      <div className="assurance">
        <div className="assurance-content">
          <span className="badge"><i className="fas fa-shield-alt"></i> assurance policy</span>
          <h2>measurable improvement guaranteed</h2>
          <p>We guarantee improvement in resume alignment and interview performance scores. If not, we provide conditional re-optimization support until you trend upward.</p>
          <button className="btn-solid">see JPI guarantee</button>
        </div>
        <div className="assurance-stats">
          <i className="fas fa-arrow-trend-up"></i>
          <p>resume alignment +42% / interview clarity +37% (avg. after 2 cycles)</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <div className="logo">JobLynk<span>.live</span></div>
            <p>AI–human career performance. Not a job board — a readiness platform.</p>
          </div>
          <div>
            <p><strong>platform</strong></p>
            <p>resume analysis · mock interview · JPI · badge</p>
          </div>
        </div>
      </footer>

      {/* Visitor Counter Script */}
      <script async src="//finicounter.eu.org/finicounter.js"></script>
    </div>
  );
}

export default App;
