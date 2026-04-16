import React, { useState } from "react";

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    celNumber: "",
    email: "",
    body: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.celNumber || !formData.email || !formData.body) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", celNumber: "", email: "", body: "" });
    setError("");
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <h1>Support & Contact</h1>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        <div style={{ background: "#f5f7fa", padding: "2rem", borderRadius: "12px" }}>
          <h2 style={{ color: "#007bff" }}>🌐 Web Master</h2>
          <h3>Nigel A Thomas</h3>
          <p>📧 joblynklive@gmail.com</p>
          <p>📞 +91 97693 51231</p>
        </div>
        
        <div style={{ background: "#d4edda", padding: "2rem", borderRadius: "12px" }}>
          <h2 style={{ color: "#28a745" }}>💾 Data Engineer</h2>
          <h3>Das Suburaj</h3>
          <p>📧 Das8369372112@gmail.com</p>
          <p>📞 +91 83693 72112</p>
        </div>
      </div>

      <div style={{
        background: "#e8f4fd",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        ⏱️ <strong>24-Hour Response Guarantee:</strong> We'll respond within 24 hours
      </div>

      {submitted ? (
        <div style={{
          background: "#d4edda",
          padding: "2rem",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h3>✅ Thank You!</h3>
          <p>Your message has been sent. We'll respond within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>Send Another</button>
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
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          
          <input
            type="tel"
            name="celNumber"
            placeholder="Cell Number"
            value={formData.celNumber}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          
          <textarea
            name="body"
            placeholder="Message"
            value={formData.body}
            onChange={handleChange}
            required
            rows={5}
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
          
          <button
            type="submit"
            style={{
              background: "#007bff",
              color: "white",
              padding: "1rem",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Support;