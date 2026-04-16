import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    celNumber: "",
    email: "",
    location: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.celNumber || !formData.email || !formData.location || !formData.message) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Contact Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", celNumber: "", email: "", location: "", message: "" });
    setError("");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "0.5rem", textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "2rem" }}>
        We'd love to hear from you. Send us a message and we'll respond within 24 hours.
      </p>

      {/* Contact Info Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        <div style={{
          background: "#f0f9ff",
          padding: "1.5rem",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📧</div>
          <h3 style={{ marginBottom: "0.5rem", color: "#0f172a" }}>Email Us</h3>
          <p style={{ color: "#475569" }}>joblynklive@gmail.com</p>
        </div>
        
        <div style={{
          background: "#f0f9ff",
          padding: "1.5rem",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📞</div>
          <h3 style={{ marginBottom: "0.5rem", color: "#0f172a" }}>Call Us</h3>
          <p style={{ color: "#475569" }}>+91 97693 51231</p>
        </div>
        
        <div style={{
          background: "#f0f9ff",
          padding: "1.5rem",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏱️</div>
          <h3 style={{ marginBottom: "0.5rem", color: "#0f172a" }}>Response Time</h3>
          <p style={{ color: "#475569" }}>Within 24 hours</p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{
        background: "white",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        border: "1px solid #e2e8f0"
      }}>
        <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "1.5rem", textAlign: "center" }}>Send us a Message</h2>
        
        {submitted ? (
          <div style={{
            background: "#d4edda",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#155724", marginBottom: "1rem" }}>✅ Thank You!</h3>
            <p style={{ color: "#155724" }}>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: "1.5rem",
                padding: "10px 20px",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div style={{
                background: "#f8d7da",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "1rem",
                color: "#721c24"
              }}>⚠️ {error}</div>
            )}
            
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#0f172a" }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem"
                }}
                placeholder="Enter your full name"
              />
            </div>
            
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#0f172a" }}>
                Cell Number *
              </label>
              <input
                type="tel"
                name="celNumber"
                value={formData.celNumber}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem"
                }}
                placeholder="Enter your mobile number"
              />
            </div>
            
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#0f172a" }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem"
                }}
                placeholder="Enter your email address"
              />
            </div>
            
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#0f172a" }}>
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem"
                }}
                placeholder="City, State (e.g., Mumbai, Maharashtra)"
              />
            </div>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#0f172a" }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontFamily: "inherit"
                }}
                placeholder="Tell us how we can help you..."
              />
            </div>
            
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#1d4ed8"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#2563eb"}
            >
              Send Message →
            </button>
            
            <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", color: "#94a3b8" }}>
              We'll never share your information with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;