import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#0f172a", marginBottom: "1rem" }}>
          We Don't Just Build Resumes.
          <br />
          <span style={{ color: "#2563eb" }}>We Unlock Job Opportunities.</span>
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#475569", maxWidth: "800px", margin: "0 auto" }}>
          JobLynk is your personal job-hunting engine — scanning, matching, and preparing you for success.
        </p>
      </div>

      {/* What We Actually Do */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1.5rem" }}>What JobLynk Really Does</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#334155", marginBottom: "1.5rem" }}>
          Most job platforms wait for you to find them. JobLynk works differently — <strong>we actively hunt the internet</strong> to find opportunities that match your profile. We are NOT a service provider. We are your silent partner in the background, constantly scanning job boards, company career pages, LinkedIn, and niche industry portals to discover every possible opening that fits your skills.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#334155", marginBottom: "1.5rem" }}>
          Once we identify relevant positions, we don't just hand you a list. We take the <strong>data YOU provide</strong> — your work history, education, certifications, and achievements — and transform it into a professional, ATS-friendly resume that speaks directly to HR managers and employers. Every word is optimized to pass automated screening systems and catch the attention of recruiters who are drowning in hundreds of applications.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#334155" }}>
          Think of us as your job-hunting engine: we scan, we match, we build, and we deliver. You focus on preparing for interviews while we handle the heavy lifting of finding the right doors and getting you inside them.
        </p>
      </div>

      {/* Our Mission Statement */}
      <div style={{ background: "#f0f9ff", padding: "2rem", borderRadius: "16px", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1rem" }}>🎯 Our Mission</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#334155", fontStyle: "italic" }}>
          "To democratize job hunting by making intelligent, data-driven resume building and opportunity discovery accessible to every Indian job seeker — regardless of their budget or background."
        </p>
        <p style={{ fontSize: "1rem", color: "#475569", marginTop: "1rem" }}>
          We believe that a great resume should not cost a month's salary. We believe that job seekers deserve to know where the real opportunities are hiding. And we believe that with the right tools, anyone can land their dream job.
        </p>
      </div>

      {/* The Problem We Solve */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1.5rem" }}>The Harsh Reality of Job Hunting in India</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <h3 style={{ color: "#dc2626", marginBottom: "1rem" }}>❌ Problem 1: Invisible Jobs</h3>
            <p>Millions of jobs are never posted on major job boards. They sit on company websites, internal referral systems, or niche industry portals. Most candidates never see them.</p>
          </div>
          
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <h3 style={{ color: "#dc2626", marginBottom: "1rem" }}>❌ Problem 2: ATS Rejection</h3>
            <p>Over 75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them. Your qualifications don't matter if your resume isn't formatted correctly.</p>
          </div>
          
          <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e2e8f0" }}>
            <h3 style={{ color: "#dc2626", marginBottom: "1rem" }}>❌ Problem 3: Generic Applications</h3>
            <p>Applying with the same resume to 100 jobs rarely works. Each application needs tailoring, but most job seekers don't have the time or expertise to customize every submission.</p>
          </div>
        </div>
      </div>

      {/* How JobLynk Works */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1.5rem", textAlign: "center" }}>How JobLynk Works</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem", alignItems: "start" }}>
            <div style={{ background: "#2563eb", color: "white", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: "bold" }}>1</div>
            <div>
              <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>You Share Your Data</h3>
              <p style={{ lineHeight: "1.7", color: "#475569" }}>Tell us about your work history, education, skills, certifications, and the type of role you're seeking. The more detail you provide, the better we can match you with opportunities.</p>
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem", alignItems: "start" }}>
            <div style={{ background: "#2563eb", color: "white", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: "bold" }}>2</div>
            <div>
              <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>We Scan the Internet</h3>
              <p style={{ lineHeight: "1.7", color: "#475569" }}>Our system continuously crawls job boards, company career pages, LinkedIn, government portals, and niche job sites to discover every relevant opening that matches your profile. We find jobs you would never discover on your own.</p>
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem", alignItems: "start" }}>
            <div style={{ background: "#2563eb", color: "white", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: "bold" }}>3</div>
            <div>
              <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>We Build Your Resume</h3>
              <p style={{ lineHeight: "1.7", color: "#475569" }}>Using the data you provide, we craft a professional, ATS-optimized resume that highlights your strengths and speaks directly to HR managers. Each resume is tailored to pass automated filters and grab recruiter attention.</p>
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem", alignItems: "start" }}>
            <div style={{ background: "#2563eb", color: "white", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: "bold" }}>4</div>
            <div>
              <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>We Deliver Opportunities</h3>
              <p style={{ lineHeight: "1.7", color: "#475569" }}>You receive your polished resume AND a curated list of employers/HR managers actively hiring. Our Gold plan delivers fresh opportunities daily for 5 days — keeping you ahead of the competition.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1rem", textAlign: "center" }}>Simple, Transparent Pricing</h2>
        <p style={{ textAlign: "center", color: "#475569", marginBottom: "2rem" }}>No subscriptions. No hidden fees. Pay once, get results.</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          
          {/* White Plan - ₹49 */}
          <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "0.5rem" }}>White Plan</h3>
            <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#2563eb", marginBottom: "1rem" }}>₹49</p>
            <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>One-time payment</p>
            
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> 1 Professional Resume (ATS-optimized)
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> 1 Tailored Cover Letter
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> 20 Employer/HR Manager Contacts
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Direct hiring leads
              </li>
            </ul>
            
            <Link to="/signup">
              <button style={{ width: "100%", padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: "pointer" }}>Choose White Plan</button>
            </Link>
          </div>
          
          {/* Gold Plan - ₹99 */}
          <div style={{ background: "linear-gradient(135deg, #fff9e6, #fff)", border: "2px solid #fbbf24", borderRadius: "16px", padding: "2rem", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", right: "20px", background: "#fbbf24", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold", color: "#0f172a" }}>POPULAR</div>
            <h3 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "0.5rem" }}>Gold Plan</h3>
            <p style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#fbbf24", marginBottom: "1rem" }}>₹99</p>
            <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>One-time payment</p>
            
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> 1 Professional Resume (ATS-optimized)
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> 1 Tailored Cover Letter
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> 20 Employer/HR Manager Contacts (Daily × 5 Days)
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Fresh opportunities delivered daily
              </li>
              <li style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "#22c55e" }}>✓</span> Priority support
              </li>
            </ul>
            
            <Link to="/signup">
              <button style={{ width: "100%", padding: "12px", background: "#fbbf24", color: "#0f172a", border: "none", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: "pointer" }}>Choose Gold Plan</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose JobLynk */}
      <div style={{ background: "#f8fafc", padding: "2rem", borderRadius: "16px", marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1.5rem", textAlign: "center" }}>Why Job Seekers Choose JobLynk</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div>
            <h3 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>🎯 Real Opportunities</h3>
            <p>We don't just send you job links. We verify employers are actively hiring and provide direct contact information.</p>
          </div>
          <div>
            <h3 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>⚡ Speed</h3>
            <p>From data submission to resume delivery in under 24 hours. We know you can't wait weeks to apply.</p>
          </div>
          <div>
            <h3 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>🔒 Privacy First</h3>
            <p>Your Aadhaar, contact details, and personal data are encrypted. We never share your information without consent.</p>
          </div>
          <div>
            <h3 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>💬 Human Support</h3>
            <p>Talk to a real person — not a chatbot. Our team responds within hours, not days.</p>
          </div>
        </div>
      </div>

      {/* Success Slogan */}
      <div style={{ textAlign: "center", marginBottom: "3rem", padding: "3rem", background: "linear-gradient(135deg, #0f172a, #1e293b)", borderRadius: "24px", color: "white" }}>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic", marginBottom: "1rem" }}>"Stop hunting jobs blindly.</p>
        <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Let JobLynk find them for you."</p>
        <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>Your resume, your cover letter, and your daily opportunities — all for less than a pizza.</p>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>Is JobLynk a recruitment agency?</h3>
            <p style={{ color: "#475569" }}>No. We do not recruit or hire on behalf of companies. We are a technology platform that helps candidates find opportunities and build professional application materials.</p>
          </div>
          
          <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>How do you find employers?</h3>
            <p style={{ color: "#475569" }}>Our system scans thousands of sources — job boards, company career pages, LinkedIn, government portals, and industry-specific job sites — to identify employers actively hiring for roles matching your profile.</p>
          </div>
          
          <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>Can I customize my resume after receiving it?</h3>
            <p style={{ color: "#475569" }}>Yes! We provide your resume in editable formats (Word/PDF) so you can make adjustments as needed.</p>
          </div>
          
          <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>What if I don't get any interviews?</h3>
            <p style={{ color: "#475569" }}>While we cannot guarantee job placement (that depends on many factors), we stand behind our service. If you follow our guidance and still see no results, contact our support team for a free resume review.</p>
          </div>
          
          <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1rem" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>Is my data safe?</h3>
            <p style={{ color: "#475569" }}>Absolutely. We encrypt all personal data and never share your information with third parties without your explicit consent.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: "center", padding: "3rem", background: "#f0f9ff", borderRadius: "24px" }}>
        <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1rem" }}>Ready to Stop Hunting and Start Winning?</h2>
        <p style={{ fontSize: "1.2rem", color: "#475569", marginBottom: "2rem" }}>Join thousands of Indian job seekers who found their dream roles through JobLynk.</p>
        <Link to="/signup">
          <button style={{ padding: "14px 40px", background: "#2563eb", color: "white", border: "none", borderRadius: "50px", fontSize: "1.1rem", fontWeight: "600", cursor: "pointer" }}>Get Started Now →</button>
        </Link>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#64748b" }}>No credit card required. Start with ₹49.</p>
      </div>
      
    </div>
  );
};

export default About;