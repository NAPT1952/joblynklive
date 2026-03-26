$content = @'
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", position: "relative", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url(/images/ai.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3, zIndex: 1 }}></div>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)", zIndex: 2 }}></div>
        <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white", padding: "0 20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", marginBottom: "1rem", fontWeight: "700" }}>JobLynk.live</h1>
          <p style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", maxWidth: "700px", marginBottom: "3rem", color: "#e2e8f0" }}>Bridging Jobs & Talent</p>
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "30px 40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.2)", minWidth: "280px", textAlign: "left" }}>
              <h2 style={{ color: "#fff", margin: "0 0 15px 0", fontSize: "1.8rem" }}>White · Rs49</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>Professional Resume</li>
                <li style={{ marginBottom: "12px" }}>Cover Letter</li>
                <li>1 Updated Employee Data List</li>
              </ul>
            </div>
            <div style={{ background: "linear-gradient(135deg, rgba(180,83,9,0.2), rgba(180,83,9,0.3))", backdropFilter: "blur(10px)", padding: "30px 40px", borderRadius: "24px", border: "2px solid #b45309", minWidth: "280px", textAlign: "left" }}>
              <h2 style={{ color: "#fbbf24", margin: "0 0 15px 0", fontSize: "1.8rem" }}>Gold · Rs99</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>AI-Optimized Resume</li>
                <li style={{ marginBottom: "12px" }}>AI-Optimized Cover Letter</li>
                <li>Premium Data List</li>
              </ul>
            </div>
          </div>
          <button style={{ padding: "16px 48px", background: "#2563eb", color: "white", border: "none", borderRadius: "50px", fontSize: "1.2rem", fontWeight: "600", cursor: "pointer", marginBottom: "1.5rem" }}>Get Started</button>
          <p style={{ color: "#94a3b8" }}>tech-support@joblynk.live</p>
        </div>
      </div>

      <div style={{ padding: "80px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#0f172a", maxWidth: "700px", margin: "0 auto" }}>Bridging the Gap Between Jobs & Talent</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div>
              <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: "1.7", marginBottom: "20px" }}>JobLynk.live was born from a simple observation: millions of skilled Indian workers struggle to present themselves professionally to employers.</p>
              <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: "1.7" }}>We started in 2024 with a clear mission: make job application tools affordable and simple.</p>
              <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
                <div><h3 style={{ color: "#2563eb", fontSize: "2.2rem", margin: 0 }}>500+</h3><p style={{ color: "#475569" }}>Job Seekers Placed</p></div>
                <div><h3 style={{ color: "#2563eb", fontSize: "2.2rem", margin: 0 }}>200+</h3><p style={{ color: "#475569" }}>Verified Employers</p></div>
              </div>
            </div>
            <div style={{ background: "#e6f0ff", borderRadius: "32px", padding: "40px" }}>
              <h3 style={{ color: "#1e40af", marginBottom: "30px", fontSize: "1.8rem" }}>Our Promise</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "25px" }}>No monthly fees - Pay once, get your documents forever</li>
                <li style={{ marginBottom: "25px" }}>Real human support - Email us, get reply within hours</li>
                <li>Privacy first - Your data is encrypted</li>
              </ul>
            </div>
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
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "#2563eb", width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2rem", fontWeight: "bold", margin: "0 auto 20px" }}>JL</div>
              <h3 style={{ margin: "0 0 5px 0" }}>Team Member 2</h3>
              <p style={{ color: "#64748b" }}>Co-Founder</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "#2563eb", width: "100px", height: "100px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2rem", fontWeight: "bold", margin: "0 auto 20px" }}>NT</div>
              <h3 style={{ margin: "0 0 5px 0" }}>Team Member 3</h3>
              <p style={{ color: "#64748b" }}>Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#1e293b", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h3 style={{ color: "#facc15", fontSize: "2rem", marginBottom: "20px" }}>We are Here to Help</h3>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Have questions? Our team responds within hours, not days.</p>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px" }}>
            <strong style={{ color: "#facc15", fontSize: "1.3rem" }}>joblynklive@gmail.com</strong>
          </div>
        </div>
      </div>

      <div style={{ background: "#0f172a", color: "#94a3b8", padding: "30px 20px", textAlign: "center", borderTop: "1px solid #334155" }}>
        <p>2024 JobLynk.live - Bridging Jobs and Talent</p>
        <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>No Refund Policy applies. All digital sales are final.</p>
      </div>
    </>
  );
};

export default Home;
'@
$content | Out-File -FilePath "src\pages\Home.tsx" -Encoding utf8

git add src/pages/Home.tsx
git commit -m "Replace broken Home.tsx with clean version"
git push origin main