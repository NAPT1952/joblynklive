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
        JobLynk.live helps job seekers present themselves professionally and connect with real employers.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "30px" }}>
        Simple tools. Affordable pricing. Real opportunities.
      </p>

      <h2>🎯 Our Promise</h2>
      <ul>
        <li>No monthly fees</li>
        <li>Fast support</li>
        <li>Secure data</li>
      </ul>
    </div>
  );
};

export default About;
