import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "80px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        About Us
      </h1>

      <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
        Bridging the Gap Between Jobs & Talent
      </h2>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "20px" }}>
        JobLynk.live was born from a simple observation: millions of skilled
        Indian workers—from factory floors to home offices—struggle to present
        themselves professionally to employers.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "30px" }}>
        We started in 2024 with a clear mission: make job application tools
        affordable (₹49/₹99) and brutally simple. No confusing dashboards. No
        hidden fees. Just your resume, cover letter, and a direct line to
        employers who are actually hiring.
      </p>

      {/* Stats */}
      <div style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
        <div>
          <h2 style={{ color: "#2563eb" }}>500+</h2>
          <p>Job Seekers Placed</p>
        </div>
        <div>
          <h2 style={{ color: "#2563eb" }}>200+</h2>
          <p>Verified Employers</p>
        </div>
      </div>

      {/* Promise */}
      <h2 style={{ marginBottom: "20px" }}>🎯 Our Promise</h2>
      <ul style={{ lineHeight: "2" }}>
        <li>No monthly fees – Pay once, lifetime access</li>
        <li>Real human support – Fast response</li>
        <li>Privacy first – Your data is secure</li>
      </ul>

      {/* Team */}
      <h2 style={{ marginTop: "40px" }}>Meet the Team</h2>
      <ul style={{ lineHeight: "2" }}>
        <li>Nigel A Thomas– Founder</li>
        <li>Nigel A Thomas – Head of Operations</li>
        <li>Das Subbraj – Tech Lead</li>
      </ul>

      {/* Contact */}
      <div style={{ marginTop: "40px" }}>
        <h3>📞 We're Here to Help</h3>
        <p>tech-joblybklive@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
