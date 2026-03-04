<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JOBSLINKED.live – AI Human Performance</title>
  <!-- Tailwind for quick layout (optional, but kept for consistency) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    /* ===== GLOBAL ===== */
    body {
      background: #0f172a;
      color: white;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      margin: 0;
      line-height: 1.5;
    }

    /* ===== HERO BANNER (full luminous) ===== */
    .hero-banner {
      position: relative;
      height: 750px;
      overflow: hidden;
    }

    /* Background image with fallback gradient */
    .hero-bg {
      position: absolute;
      inset: 0;
      background: url('banner.jpg') center center/cover no-repeat;
      z-index: 0;
    }
    /* fallback if image missing */
    .hero-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(145deg, #02161d, #07333f);
      opacity: 0.9;
      z-index: -1;
    }

    /* Dark overlay */
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85));
      z-index: 1;
    }

    /* ===== SPHERES ===== */
    .sphere {
      position: absolute;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border: 2px solid rgba(0,255,255,0.5);
      box-shadow: 0 0 40px rgba(0,255,255,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(5px);
      z-index: 2;
    }
    .sphere::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      border: 1px dashed rgba(0,255,255,0.4);
      animation: spin 18s linear infinite;
    }
    .left {
      top: 140px;
      left: 18%;
    }
    .right {
      top: 140px;
      right: 18%;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .sphere h1 {
      font-size: 60px;
      color: #7fffd4;
      letter-spacing: 5px;
      text-shadow: 0 0 20px #2dd4bf;
    }

    /* ===== HANDS (with pseudo icons) ===== */
    .hand {
      position: absolute;
      width: 200px;
      height: 120px;
      bottom: 120px;
      border-radius: 60px;
      z-index: 2;
    }
    .robot {
      left: 14%;
      background: linear-gradient(to right, #6bd3ff, #b3f0ff);
      box-shadow: 0 0 25px cyan;
    }
    .human {
      right: 14%;
      background: linear-gradient(to right, #6c7a89, #a1b0c0);
      box-shadow: 0 0 25px #a0d0ff;
    }
    .robot::after {
      content: '⚙️ ⚙️ ⚙️';
      position: absolute;
      width: 100%;
      font-size: 28px;
      letter-spacing: 8px;
      color: #c4f0ff;
      text-shadow: 0 0 15px cyan;
      bottom: -35px;
      text-align: center;
    }
    .human::after {
      content: '☞ ☜';
      position: absolute;
      width: 100%;
      font-size: 40px;
      font-weight: bold;
      color: #d4d4d4;
      text-shadow: 0 0 8px white;
      bottom: -40px;
      letter-spacing: 15px;
      text-align: center;
    }

    /* ===== SMALL EMBLEM (briefcase + magnifier) ===== */
    .small-emblem {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, #0f2d35, #061a1f);
      box-shadow: 0 0 25px #2dd4bf, 0 4px 10px rgba(0,0,0,0.5);
      border: 2px solid rgba(0,255,200,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 30;
      backdrop-filter: blur(2px);
    }
    .mini-briefcase {
      width: 30px;
      height: 20px;
      background: linear-gradient(145deg, #3cc56f, #1c3f4a);
      border-radius: 4px;
      position: relative;
      box-shadow: 0 0 10px #00ffaa;
      transform: scale(0.9);
    }
    .mini-briefcase::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 5px;
      border: 2px solid #ccc;
      border-bottom: none;
      border-radius: 6px 6px 0 0;
      top: -6px;
      left: 8px;
    }
    .mini-magnifier {
      position: absolute;
      width: 18px;
      height: 18px;
      border: 3px solid rgba(255,255,255,0.7);
      border-radius: 50%;
      bottom: 5px;
      right: 5px;
      box-shadow: 0 0 12px cyan;
    }
    .mini-magnifier::after {
      content: "";
      position: absolute;
      width: 14px;
      height: 3px;
      background: rgba(255,255,255,0.7);
      transform: rotate(45deg);
      bottom: -8px;
      right: -8px;
      border-radius: 2px;
    }

    /* ===== GLASS NAVBAR ===== */
    .navbar-glass {
      position: absolute;
      top: 30px;
      left: 80px;
      right: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 30px;
      border-radius: 60px;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(45,212,191,0.4);
      z-index: 50;
    }

    .nav-btn {
      padding: 8px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.3);
      transition: 0.3s;
      text-decoration: none;
      color: white;
    }
    .nav-btn:hover {
      background: rgba(45,212,191,0.2);
      border-color: #2dd4bf;
      color: #2dd4bf;
    }

    .nav-primary {
      padding: 10px 24px;
      border-radius: 999px;
      background: #2dd4bf;
      color: #0f172a;
      font-weight: bold;
      text-decoration: none;
    }
    .nav-primary:hover {
      background: #14b8a6;
    }

    /* visitor counter */
    .visitor-badge {
      background: rgba(255,255,255,0.1);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
      border: 1px solid #334155;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    /* ===== HERO TEXT ===== */
    .hero-content {
      position: absolute;
      bottom: 200px;  /* above hands */
      left: 12%;
      max-width: 650px;
      z-index: 40;
      text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    }
    .hero-content h2 {
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.2;
    }
    .hero-content p {
      margin-top: 15px;
      color: #e2e8f0;
      font-size: 1.2rem;
    }

    .cta-yellow {
      background: #facc15;
      color: #0f172a;
      padding: 14px 32px;
      border-radius: 999px;
      font-weight: bold;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s;
    }
    .cta-yellow:hover { background: #eab308; }

    .cta-outline {
      border: 2px solid #2dd4bf;
      padding: 14px 32px;
      border-radius: 999px;
      color: #2dd4bf;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s;
    }
    .cta-outline:hover { background: rgba(45,212,191,0.1); }

    /* ===== MAIN CONTENT SECTIONS ===== */
    .section {
      padding: 80px 20px;
      max-width: 1100px;
      margin: auto;
    }

    .card {
      background: #1e293b;
      padding: 25px;
      border-radius: 20px;
      border: 1px solid #334155;
      margin-bottom: 20px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
    }

    footer {
      background: #020617;
      padding: 40px;
      text-align: center;
      border-top: 1px solid #1e293b;
      color: #94a3b8;
    }

    /* ===== CHATBOT ===== */
    #chatbot {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 100;
    }
    #chatToggle {
      background: #facc15;
      color: #0f172a;
      border: none;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      transition: 0.2s;
    }
    #chatToggle:hover { background: #eab308; }
    #chatWindow {
      display: none;
      background: #1e293b;
      border: 1px solid #2dd4bf;
      border-radius: 16px;
      padding: 16px;
      width: 260px;
      margin-bottom: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    #chatWindow p { color: #e2e8f0; font-size: 14px; }
    #chatWindow a { color: #2dd4bf; }

    /* responsive */
    @media (max-width: 900px) {
      .navbar-glass {
        left: 20px;
        right: 20px;
        flex-direction: column;
        gap: 12px;
        padding: 15px;
      }
      .hero-content {
        left: 5%;
        bottom: 150px;
      }
      .hero-content h2 { font-size: 2.2rem; }
      .sphere { width: 150px; height: 150px; }
      .sphere h1 { font-size: 40px; }
      .sphere::before { width: 180px; height: 180px; }
      .hand { width: 140px; height: 80px; }
      .left { left: 5%; }
      .right { right: 5%; }
    }
  </style>
</head>
<body>

<!-- HERO SECTION (full luminous) -->
<div class="hero-banner">
  <!-- background image + fallback gradient (via ::after) -->
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>

  <!-- GLASS NAVBAR (JOBSLINKED) -->
  <div class="navbar-glass">
    <div class="text-2xl font-bold">
      JOBSLINKED<span class="text-teal-400">.live</span>
    </div>
    <div class="flex gap-3 items-center flex-wrap">
      <a href="#" class="nav-btn">Home</a>
      <a href="#" class="nav-btn">Pay Portal</a>
      <a href="#" class="nav-btn">Samples</a>
      <a href="#" class="nav-btn">Employer</a>
      <a href="#" class="nav-primary">Get Started</a>
      <!-- visitor counter -->
      <span class="visitor-badge"><i class="fas fa-eye"></i> <span id="finicount_views"></span>+</span>
    </div>
  </div>

  <!-- SPHERES -->
  <div class="sphere left"><h1>AI</h1></div>
  <div class="sphere right"><h1>BM</h1></div>

  <!-- HANDS -->
  <div class="hand robot"></div>
  <div class="hand human"></div>

  <!-- SMALL EMBLEM (left side) -->
  <div class="small-emblem">
    <div class="mini-briefcase"></div>
    <div class="mini-magnifier"></div>
  </div>

  <!-- HERO TEXT -->
  <div class="hero-content">
    <h2>Connecting Talent with Opportunity<br>
    <span class="text-teal-300">Faster, Smarter, Simpler</span></h2>
    <p>Structured resumes, curated employer data, and readiness tools powered by AI + human expertise.</p>
    <div class="flex gap-4 mt-6">
      <a href="#" class="cta-yellow">Get Started</a>
      <a href="#" class="cta-outline">For Employers</a>
    </div>
  </div>
</div>

<!-- MAIN CONTENT (JOBSLINKED.live sections) -->
<div class="section">
  <h2 class="text-3xl font-bold text-teal-300 mb-6">About Us</h2>
  <p class="text-slate-300 text-lg">
    JOBSLINKED.live helps job seekers prepare structured resumes,
    professional cover letters, and curated employer contact data
    across hospitality and service industries.
  </p>
</div>

<div class="section">
  <h2 class="text-3xl font-bold text-teal-300 mb-6">Success Stories</h2>
  <div class="card">
    <i class="fas fa-quote-left text-teal-400 mr-2"></i> “Got placed in Pune within weeks.” – Rahul S.
  </div>
  <div class="card">
    <i class="fas fa-quote-left text-teal-400 mr-2"></i> “Professional documentation helped me switch roles.” – Meena K.
  </div>
  <div class="card">
    <i class="fas fa-quote-left text-teal-400 mr-2"></i> “Employer contacts were relevant.” – Arjun P.
  </div>
  <!-- trust badges -->
  <div class="mt-6 flex flex-wrap gap-3">
    <span class="bg-teal-900/30 text-teal-300 border border-teal-700 px-4 py-2 rounded-full text-sm"><i class="fas fa-check-circle mr-1"></i> Verified Employer</span>
    <span class="bg-teal-900/30 text-teal-300 border border-teal-700 px-4 py-2 rounded-full text-sm"><i class="fas fa-check-circle mr-1"></i> Hospitality Partner</span>
    <span class="bg-teal-900/30 text-teal-300 border border-teal-700 px-4 py-2 rounded-full text-sm"><i class="fas fa-check-circle mr-1"></i> Service Recruiter</span>
  </div>
</div>

<div class="section">
  <h2 class="text-3xl font-bold text-teal-300 mb-6">How It Works</h2>
  <ol class="list-decimal list-inside text-lg text-slate-200 space-y-3">
    <li>Choose a support plan</li>
    <li>Submit your details</li>
    <li>Receive structured job-ready documents</li>
  </ol>
</div>

<!-- FOOTER -->
<footer>
  <div class="text-xl font-bold mb-2">
    JOBSLINKED<span class="text-teal-400">.live</span>
  </div>
  <p class="text-slate-400">
    © 2025 – Not a job board, a readiness platform.
  </p>
</footer>

<!-- CHATBOT -->
<div id="chatbot">
  <div id="chatWindow">
    <p>Hi! Looking for the right job support plan, or are you an employer seeking talent? I can help!</p>
    <a href="#" class="text-teal-300 text-sm mt-2 inline-block">Start Chat →</a>
  </div>
  <button id="chatToggle" onclick="toggleChat()"><i class="fas fa-comment-dots"></i></button>
</div>

<!-- VISITOR COUNTER SCRIPT -->
<script async src="//finicounter.eu.org/finicounter.js"></script>
<script>
  function toggleChat() {
    var win = document.getElementById("chatWindow");
    win.style.display = (win.style.display === "none" || win.style.display === "") ? "block" : "none";
  }
</script>

<!-- ensure chat window hidden initially -->
<style>
  #chatWindow { display: none; }
</style>

</body>
</html>
