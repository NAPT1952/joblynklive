<!-- redeploy -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JobLynk.live – readiness intelligence</title>
  <!-- Font Awesome 6 (free) for clean icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- Optional: Plausible Analytics (remove if not needed) -->
  <script defer data-domain="joblynk.live" src="https://plausible.io/js/script.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #0B1322; /* dark navy base */
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #E9EEF2;
      line-height: 1.5;
      font-weight: 400;
    }

    h1, h2, h3, .stat-value {
      font-weight: 500;
      letter-spacing: -0.02em;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 32px;
    }

    .teal {
      color: #2dd4bf;
    }

    .badge-teal {
      background: rgba(45,212,191,0.12);
      color: #2dd4bf;
      border: 1px solid rgba(45,212,191,0.25);
      border-radius: 100px;
      padding: 4px 12px;
      font-size: 0.85rem;
      font-weight: 500;
      display: inline-block;
    }

    .btn-outline-teal {
      background: transparent;
      border: 1.5px solid #2dd4bf;
      color: #2dd4bf;
      border-radius: 40px;
      padding: 10px 24px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: 0.2s;
      cursor: default;
      display: inline-block;
    }

    .btn-solid-teal {
      background: #2dd4bf;
      border: none;
      color: #0B1322;
      font-weight: 600;
      border-radius: 40px;
      padding: 12px 32px;
      font-size: 1rem;
      cursor: default;
      display: inline-block;
      box-shadow: 0 8px 20px -8px rgba(45,212,191,0.25);
    }

    .card {
      background: #1A2536;
      border-radius: 28px;
      padding: 28px 24px;
      border: 1px solid #293445;
      box-shadow: 0 20px 35px -12px rgba(0,0,0,0.6);
    }

    .card-light {
      background: #1F2C40;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid #263041;
      flex-wrap: wrap;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .logo span {
      color: #2dd4bf;
      font-weight: 500;
    }
    .logo-tagline {
      font-size: 0.9rem;
      color: #9AA9B9;
      margin-left: 12px;
      font-weight: 400;
      letter-spacing: 0.2px;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
    }
    .nav-links a {
      text-decoration: none;
      color: #D3DCE9;
      font-weight: 450;
      font-size: 0.95rem;
    }
    .nav-links a:hover { color: #2dd4bf; }

    .hero {
      padding: 60px 0 40px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .hero-badge {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-bottom: 16px;
    }
    .hero h1 {
      font-size: 3.3rem;
      font-weight: 550;
      line-height: 1.2;
      max-width: 900px;
    }
    .hero .subhead {
      font-size: 1.3rem;
      color: #B4C2D5;
      max-width: 700px;
      margin: 16px 0 24px;
    }
    .hero-stats {
      display: flex;
      gap: 40px;
      margin: 24px 0 16px;
    }
    .stat-item {
      display: flex;
      flex-direction: column;
    }
    .stat-value {
      font-size: 2rem;
      font-weight: 550;
      color: #2dd4bf;
    }
    .stat-label {
      font-size: 0.9rem;
      color: #9FB0C7;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

   /* correct version */

.disclaimer-tag {
  background: #1A293B;
  border: 1px solid #2dd4bf;
  padding: 14px 18px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}.disclaimer-tag {
  background: #1A293B;
  border: 1px solid #2dd4bf;
  padding: 14px 18px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}

    .section-title {
      font-size: 2.2rem;
      font-weight: 530;
      margin-bottom: 20px;
    }
    .section-sub {
      color: #B0C1D6;
      margin-bottom: 48px;
      font-size: 1.2rem;
    }

    .grid-2col {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .feature-icon {
      font-size: 2.2rem;
      color: #2dd4bf;
      margin-bottom: 24px;
    }
    .card h3 {
      font-size: 1.6rem;
      font-weight: 530;
      margin-bottom: 16px;
    }
    .card p {
      color: #C6D3E6;
      margin-bottom: 24px;
      font-size: 1rem;
    }
    .metric-highlight {
      background: rgba(45,212,191,0.08);
      border-radius: 16px;
      padding: 18px;
      margin-top: 16px;
      border: 1px solid #314159;
    }
    .jpi-preview {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .jpi-ring {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      background: conic-gradient(#2dd4bf 0deg 230deg, #3E5770 230deg 360deg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
      border: 2px solid #2dd4bf;
    }
    .jpi-ring span {
      background: #1A2536;
      width: 48px;
      height: 48px;
      border-radius: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pricing-card {
      background: #15212F;
      border-radius: 32px;
      padding: 32px 28px;
      border: 1px solid #31465C;
      display: flex;
      flex-direction: column;
    }
    .pricing-name {
      font-size: 1.8rem;
      font-weight: 520;
      margin-bottom: 8px;
    }
    .pricing-price {
      margin: 20px 0;
      font-size: 2.5rem;
      font-weight: 550;
      color: #2dd4bf;
    }
    .pricing-price small {
      font-size: 1rem;
      color: #9AAFC7;
      font-weight: 400;
    }
    .pricing-features {
      list-style: none;
      margin: 24px 0;
    }
    .pricing-features li {
      margin: 14px 0;
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .pricing-features i {
      color: #2dd4bf;
      width: 20px;
    }

    .assurance-block {
      background: #102131;
      border-radius: 36px;
      padding: 48px;
      margin: 60px 0;
      border-left: 8px solid #2dd4bf;
    }

    hr {
      border: 0.5px solid #28344A;
      margin: 48px 0;
    }

    footer {
      padding: 48px 0 64px;
      color: #8FA2C0;
      font-size: 0.9rem;
      border-top: 1px solid #1F2F40;
    }

    @media (max-width: 900px) {
      .grid-4col, .grid-3col, .grid-2col { grid-template-columns: 1fr; }
      .hero h1 { font-size: 2.5rem; }
      .navbar { flex-direction: column; align-items: start; gap: 16px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- navigation -->
    <div class="navbar">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div class="logo">JobLynk<span>.live</span></div>
        <span class="logo-tagline">AI–human performance</span>
      </div>
      <div class="nav-links" style="display: flex; gap: 32px; align-items: center;">
        <a href="#">platform</a>
        <a href="#">jpi</a>
        <a href="#">pricing</a>
        <a href="#"><span class="badge-teal"><i class="fas fa-shield-alt" style="margin-right: 4px;"></i> guarantee</span></a>
        <span class="btn-outline-teal">sign in</span>
        <span class="btn-solid-teal">try readiness</span>
        <!-- Simple free visitor counter (like nigelthomas.live) -->
        <div style="background: rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 20px; font-size: 0.9rem; margin-left: auto; white-space: nowrap;">
          Visitors: <span id="finicount_views"></span>+
        </div>
      </div>
    </div>

    <!-- hero with background image -->
    <div style="background: url('abm.jpg') center/cover no-repeat; border-radius: 40px; padding: 60px 40px; margin: 40px 0;">
      <div style="background: rgba(0,0,0,0.6); padding: 40px; border-radius: 30px;">
        <div class="hero-badge">
          <span class="badge-teal"><i class="fas fa-robot" style="margin-right: 6px;"></i> hybrid intelligence</span>
          <span class="badge-teal"><i class="fas fa-chart-line"></i> JPI certified</span>
        </div>
        <h1 style="color: white;">Measure. Improve. Prove.<br>Your interview readiness, quantified.</h1>
        <div class="subhead" style="color: #ddd;">Not a job board. A career performance platform that guarantees higher interview conversion through structured metrics — resume ATS, mock interviews, and the Job Performance Index (JPI).</div>
        
        <div class="hero-stats">
          <div class="stat-item"><span class="stat-value">+47%</span><span class="stat-label">interview conversion</span></div>
          <div class="stat-item"><span class="stat-value">89</span><span class="stat-label">JPI score (top tier)</span></div>
          <div class="stat-item"><span class="stat-value">12k</span><span class="stat-label">readiness badges</span></div>
        </div>

        <div class="disclaimer-tag" style="background: #1A293B; border-color: #2dd4bf;">
          <i class="fas fa-times-circle"></i>
          <span><strong style="color:white;">This is NOT a job board.</strong> We do not list jobs — we engineer readiness before you apply.</span>
          <i class="fas fa-check-circle" style="color:#2dd4bf;"></i>
        </div>
      </div>
    </div>

    <!-- core components: 4 pillars -->
    <h2 class="section-title" style="margin-top: 80px;">Core readiness engine</h2>
    <div class="section-sub">Structured evaluation metrics, AI + human calibrated</div>
    <div class="grid-4col">
      <div class="card">
        <div class="feature-icon"><i class="fas fa-file-alt"></i></div>
        <h3>Resume analysis</h3>
        <p>ATS compatibility · keyword alignment · structural clarity · impact strength. Generates score & actionable edits.</p>
        <div class="metric-highlight">
          <span class="badge-teal">resume score  → 84</span> 
          <div style="margin-top: 10px; font-size:0.9rem;">bullet point strength: high</div>
        </div>
      </div>
      <div class="card">
        <div class="feature-icon"><i class="fas fa-comments"></i></div>
        <h3>Mock interview</h3>
        <p>Role-specific questions, text-based response. Evaluate clarity, structure, relevance & outcome orientation.</p>
        <div class="metric-highlight">
          <span class="badge-teal">clarity 92</span> <span class="badge-teal">relevance 88</span>
        </div>
      </div>
      <div class="card">
        <div class="feature-icon"><i class="fas fa-tachometer-alt"></i></div>
        <h3>Job Performance Index<small style="font-size:0.8rem; margin-left:5px;">™</small></h3>
        <p>Composite readiness: resume score + interview + role alignment. The universal readiness metric.</p>
        <div class="jpi-preview" style="margin-top:20px;">
          <div class="jpi-ring"><span>78</span></div>
          <div><span style="color:#2dd4bf;">current JPI</span><br>target &gt;85</div>
        </div>
      </div>
      <div class="card">
        <div class="feature-icon"><i class="fas fa-certificate"></i></div>
        <h3>Performance badge</h3>
        <p>Shareable digital readiness badge when you cross predefined thresholds. Proof of prep.</p>
        <div style="background:#1E3349; border-radius:40px; padding:10px 18px; margin-top:20px; display:flex; align-items:center; gap:10px; border:1px solid #2dd4bf40;">
          <i class="fas fa-shield-alt teal"></i> <span style="font-weight:500;">JPI ready <span style="color:#2dd4bf;">⏺ elite</span></span>
        </div>
      </div>
    </div>

    <!-- detailed JPI / badge explanation + target users -->
    <div style="margin: 80px 0 40px;">
      <div class="grid-2col">
        <div class="card card-light" style="padding: 36px;">
          <h2><span class="teal">JPI</span> — Job Performance Index</h2>
          <p style="font-size:1.2rem; margin: 20px 0;">A single composite score from resume, interview simulation, and role alignment percentage. Reflects real interview readiness.</p>
          <div style="display: flex; gap: 24px; flex-wrap: wrap;">
            <div><span class="stat-value">0.82</span> <span class="stat-label">avg JPI after 1 cycle</span></div>
            <div><span class="stat-value">+31%</span> <span class="stat-label">boost with Pro</span></div>
          </div>
        </div>
        <div class="card card-light" style="padding: 36px;">
          <h2><span class="teal">designed for</span></h2>
          <div style="margin: 28px 0;">
            <div style="display: flex; gap: 18px; align-items: center; border-bottom: 1px solid #314959; padding: 18px 0;">
              <i class="fas fa-graduation-cap teal" style="font-size:2rem;"></i>
              <div><strong style="font-size:1.2rem;">Graduates</strong> <span class="badge-teal" style="margin-left:10px;">entry level</span><br>first touchpoints with structured hiring</div>
            </div>
            <div style="display: flex; gap: 18px; align-items: center; padding: 18px 0;">
              <i class="fas fa-briefcase teal" style="font-size:2rem;"></i>
              <div><strong style="font-size:1.2rem;">Professionals 3–12y</strong> <span class="badge-teal">mid/senior</span><br>advancement & interview conversion</div>
            </div>
          </div>
          <p class="teal" style="margin-top: 8px;"><i class="fas fa-bullseye"></i> primary goal: increase interview conversion probability by structured preparation</p>
        </div>
      </div>
    </div>

    <!-- brain image section -->
    <section style="text-align:center; padding:60px; background:#0B1C2C; color:white;">
      <img src="p1.jpg" alt="AI readiness" style="width:100%; max-width:900px; border-radius:10px; margin-bottom:20px;">
      <h2>Find Opportunities That Match Your Mindset</h2>
      <p>AI-driven readiness meets real-world performance.</p>
    </section>

    <!-- pricing + assurance -->
    <h2 class="section-title" style="margin-top: 40px;">tiered readiness</h2>
    <div class="grid-3col" style="margin: 32px 0;">
      <div class="pricing-card">
        <div class="pricing-name">Basic</div>
        <div class="pricing-price"><small>₹</small>999 <small>/mo</small></div>
        <ul class="pricing-features">
          <li><i class="fas fa-check-circle"></i> Resume scan (ATS + structure)</li>
          <li><i class="fas fa-check-circle"></i> Basic alignment feedback</li>
          <li><i class="fas fa-times-circle" style="color:#5F7893;"></i> No interview simulation</li>
          <li><i class="fas fa-times-circle" style="color:#5F7893;"></i> No JPI</li>
        </ul>
        <div style="margin-top: auto;"><span class="btn-outline-teal" style="width:100%; text-align:center;">start free scan</span></div>
      </div>
      <div class="pricing-card" style="border-color:#2dd4bf40;">
        <div class="pricing-name">Smart Growth</div>
        <div class="pricing-price"><small>₹</small>2,999 <small>/mo</small></div>
        <ul class="pricing-features">
          <li><i class="fas fa-check-circle"></i> Resume + interview simulation</li>
          <li><i class="fas fa-check-circle"></i> JPI composite score</li>
          <li><i class="fas fa-check-circle"></i> Role alignment %</li>
          <li><i class="fas fa-times-circle" style="color:#5F7893;"></i> Badge qualification</li>
        </ul>
        <span class="btn-solid-teal" style="text-align:center;">upgrade readiness</span>
      </div>
      <div class="pricing-card">
        <div class="pricing-name">Pro Acceleration</div>
        <div class="pricing-price"><small>₹</small>5,999 <small>/mo</small></div>
        <ul class="pricing-features">
          <li><i class="fas fa-check-circle"></i> Full system: resume + interview</li>
          <li><i class="fas fa-check-circle"></i> JPI + badge qualification</li>
          <li><i class="fas fa-check-circle"></i> Re-optimization support</li>
          <li><i class="fas fa-check-circle"></i> Guaranteed improvement</li>
        </ul>
        <span class="btn-solid-teal" style="text-align:center;">go pro</span>
      </div>
    </div>

    <div class="assurance-block">
      <div style="display: flex; gap: 28px; flex-wrap: wrap; align-items: center;">
        <div style="flex: 2;">
          <span class="badge-teal" style="font-size:1rem;"><i class="fas fa-shield-alt"></i> assurance policy</span>
          <h2 style="font-size:2.2rem; margin: 16px 0;">measurable improvement guaranteed</h2>
          <p style="font-size:1.2rem; color:#C2D5EE;">We guarantee improvement in resume alignment and interview performance scores. If not, we provide conditional re-optimization support until you trend upward.</p>
          <div style="margin-top: 30px;"><span class="btn-solid-teal"><i class="fas fa-chart-up"></i> see JPI guarantee</span></div>
        </div>
        <div style="flex:1; background:#0A1929; border-radius:24px; padding: 24px; border:1px solid #2dd4bf30;">
          <i class="fas fa-arrow-trend-up teal" style="font-size:2.5rem;"></i>
          <p style="font-weight:500; margin-top:8px;">resume alignment +42% / interview clarity +37% (avg. after 2 cycles)</p>
        </div>
      </div>
    </div>

    <!-- final CTA -->
    <div style="text-align: center; margin: 80px 0 40px;">
      <span class="badge-teal" style="font-size:1.1rem; padding:10px 32px;"><i class="fas fa-ribbon"></i> earn your shareable readiness badge</span>
      <p style="font-size:1.5rem; margin: 30px 0; color:#EBF2FA;">Join graduates and professionals who prove their JPI before the interview.</p>
      <div style="display: flex; gap: 24px; justify-content: center;">
        <span class="btn-solid-teal" style="padding: 16px 56px;">measure my JPI</span>
        <span class="btn-outline-teal" style="padding: 16px 40px;">see sample report</span>
      </div>
    </div>

    <hr>

    <footer>
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px;">
        <div>
          <span class="logo" style="font-size:1.8rem;">JobLynk<span>.live</span></span>
          <p style="max-width:300px; margin-top:16px;">AI–human career performance. Not a job board — a readiness platform.</p>
        </div>
        <div>
          <p><strong>platform</strong></p>
          <p>resume analysis · mock interview · JPI · badge</p>
        </div>
      </div>
    </footer>
  </div>
  <div style="height: 20px;"></div>
  <!-- Simple free counter script (FiniCounter) -->
  <script async src="//finicounter.eu.org/finicounter.js"></script>

</body>
</html>




