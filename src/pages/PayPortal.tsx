import React, { useState } from "react";
import { Link } from "react-router-dom";

const PayPortal: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<"white" | "gold" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [showPlacementSheet, setShowPlacementSheet] = useState(false);

  const plans = {
    white: {
      name: "White Plan",
      price: 49,
      features: ["1 Professional Resume", "1 Cover Letter", "20 Employer Contacts"],
      placementData: [
        { company: "TCS", role: "Software Engineer", location: "Mumbai", salary: "3.5-5 LPA", contact: "hr@tcs.com" },
        { company: "Infosys", role: "System Analyst", location: "Bangalore", salary: "4-6 LPA", contact: "careers@infosys.com" },
        { company: "Wipro", role: "Developer", location: "Hyderabad", salary: "3.8-5.5 LPA", contact: "recruitment@wipro.com" },
        { company: "HCL", role: "Technical Support", location: "Noida", salary: "3-4.5 LPA", contact: "hclcareers@hcl.com" },
        { company: "Tech Mahindra", role: "Associate Engineer", location: "Pune", salary: "3.5-5 LPA", contact: "hr@techmahindra.com" }
      ]
    },
    gold: {
      name: "Gold Plan",
      price: 99,
      features: ["1 Professional Resume", "1 Cover Letter", "20 Employer Contacts (Daily × 5 Days)", "Priority Support"],
      placementData: [
        { company: "Google", role: "Software Engineer", location: "Bangalore", salary: "15-25 LPA", contact: "careers@google.com" },
        { company: "Amazon", role: "Cloud Associate", location: "Hyderabad", salary: "12-18 LPA", contact: "amazon-jobs@amazon.com" },
        { company: "Microsoft", role: "Support Engineer", location: "Hyderabad", salary: "10-15 LPA", contact: "careers@microsoft.com" },
        { company: "Flipkart", role: "Software Developer", location: "Bangalore", salary: "8-12 LPA", contact: "hiring@flipkart.com" },
        { company: "Paytm", role: "Backend Developer", location: "Noida", salary: "7-10 LPA", contact: "careers@paytm.com" }
      ]
    }
  };

  const handleProceedToPay = () => {
    if (selectedPlan && paymentMethod === "upi") {
      setShowQR(true);
    } else if (selectedPlan && paymentMethod === "card") {
      alert("Card payments coming soon! Please use UPI for now.");
    } else {
      alert("Please select a plan and payment method");
    }
  };

  const handlePaymentComplete = () => {
    setShowQR(false);
    setShowPlacementSheet(true);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "0.5rem", textAlign: "center" }}>Pay Portal</h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "3rem" }}>
        Secure payment for your resume and job opportunities
      </p>

      {!showQR && !showPlacementSheet ? (
        <>
          {/* Plan Selection */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "1.5rem" }}>1. Select Your Plan</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              {/* White Plan */}
              <div
                onClick={() => setSelectedPlan("white")}
                style={{
                  background: selectedPlan === "white" ? "#e6f0ff" : "white",
                  border: selectedPlan === "white" ? "2px solid #2563eb" : "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                <h3 style={{ fontSize: "1.5rem", color: "#0f172a", marginBottom: "0.5rem" }}>White Plan</h3>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb", marginBottom: "1rem" }}>₹49</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plans.white.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "#22c55e" }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                {selectedPlan === "white" && (
                  <div style={{ marginTop: "1rem", color: "#2563eb", fontWeight: "600" }}>✓ Selected</div>
                )}
              </div>

              {/* Gold Plan */}
              <div
                onClick={() => setSelectedPlan("gold")}
                style={{
                  background: selectedPlan === "gold" ? "#fff9e6" : "white",
                  border: selectedPlan === "gold" ? "2px solid #fbbf24" : "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "2rem",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.2s"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  background: "#fbbf24",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold"
                }}>BEST VALUE</div>
                <h3 style={{ fontSize: "1.5rem", color: "#0f172a", marginBottom: "0.5rem" }}>Gold Plan</h3>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#fbbf24", marginBottom: "1rem" }}>₹99</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plans.gold.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "#22c55e" }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                {selectedPlan === "gold" && (
                  <div style={{ marginTop: "1rem", color: "#fbbf24", fontWeight: "600" }}>✓ Selected</div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          {selectedPlan && (
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "1.5rem" }}>2. Select Payment Method</h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  onClick={() => setPaymentMethod("upi")}
                  style={{
                    padding: "1rem 2rem",
                    background: paymentMethod === "upi" ? "#2563eb" : "white",
                    color: paymentMethod === "upi" ? "white" : "#0f172a",
                    border: paymentMethod === "upi" ? "none" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "600"
                  }}
                >
                  📱 UPI (Google Pay / PhonePe / Paytm)
                </button>
                <button
                  onClick={() => setPaymentMethod("card")}
                  style={{
                    padding: "1rem 2rem",
                    background: paymentMethod === "card" ? "#2563eb" : "white",
                    color: paymentMethod === "card" ? "white" : "#0f172a",
                    border: paymentMethod === "card" ? "none" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "600"
                  }}
                >
                  💳 Credit/Debit Card (Coming Soon)
                </button>
              </div>
            </div>
          )}

          {/* Proceed Button */}
          {selectedPlan && paymentMethod && (
            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleProceedToPay}
                style={{
                  padding: "1rem 3rem",
                  background: "#22c55e",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Pay ₹{selectedPlan === "white" ? "49" : "99"} → 
              </button>
            </div>
          )}
        </>
      ) : showQR ? (
        /* QR Code Section */
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "1rem" }}>Scan & Pay</h2>
          <p style={{ color: "#64748b", marginBottom: "2rem" }}>
            Amount to Pay: <strong style={{ fontSize: "1.5rem", color: "#2563eb" }}>₹{selectedPlan === "white" ? "49" : "99"}</strong>
          </p>
          
          <div style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            display: "inline-block",
            border: "2px solid #e2e8f0",
            marginBottom: "2rem"
          }}>
            <div style={{
              width: "250px",
              height: "250px",
              background: "#f8fafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{ fontSize: "4rem" }}>📱</div>
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#64748b" }}>Scan QR Code</p>
              <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.5rem" }}>UPI ID: joblynklive@okhdfcbank</p>
            </div>
          </div>

          <div style={{ background: "#f0f9ff", padding: "1.5rem", borderRadius: "12px", maxWidth: "400px", margin: "0 auto" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>📋 Manual UPI Payment</h3>
            <p style={{ color: "#475569", marginBottom: "0.5rem" }}>You can also pay via UPI ID:</p>
            <code style={{
              display: "block",
              background: "white",
              padding: "0.75rem",
              borderRadius: "8px",
              fontSize: "1.1rem",
              marginBottom: "1rem"
            }}>joblynklive@okhdfcbank</code>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button
              onClick={() => setShowQR(false)}
              style={{
                padding: "0.75rem 1.5rem",
                background: "#64748b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >← Back</button>
            
            <button
              onClick={handlePaymentComplete}
              style={{
                padding: "0.75rem 1.5rem",
                background: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >✅ I've Completed Payment</button>
          </div>
        </div>
      ) : (
        /* Placement Sheet Section */
        <div>
          <div style={{
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            color: "white",
            padding: "2rem",
            borderRadius: "16px",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎉 Payment Successful!</h2>
            <p>Thank you for choosing JobLynk. Here's your placement sheet with current job openings.</p>
          </div>

          <div style={{
            background: "white",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            marginBottom: "2rem"
          }}>
            <div style={{
              background: "#0f172a",
              color: "white",
              padding: "1rem",
              display: "grid",
              gridTemplateColumns: "2fr 2fr 1.5fr 1.5fr 2fr",
              fontWeight: "bold",
              fontSize: "0.9rem"
            }}>
              <div>Company</div>
              <div>Role</div>
              <div>Location</div>
              <div>Salary</div>
              <div>Contact</div>
            </div>
            
            {selectedPlan && plans[selectedPlan].placementData.map((job, index) => (
              <div
                key={index}
                style={{
                  padding: "1rem",
                  display: "grid",
                  gridTemplateColumns: "2fr 2fr 1.5fr 1.5fr 2fr",
                  borderBottom: index < plans[selectedPlan].placementData.length - 1 ? "1px solid #e2e8f0" : "none",
                  background: index % 2 === 0 ? "#f8fafc" : "white"
                }}
              >
                <div style={{ fontWeight: "600", color: "#0f172a" }}>{job.company}</div>
                <div style={{ color: "#475569" }}>{job.role}</div>
                <div style={{ color: "#475569" }}>{job.location}</div>
                <div style={{ color: "#2563eb", fontWeight: "600" }}>{job.salary}</div>
                <div>
                  <a href={`mailto:${job.contact}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                    {job.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Updates for Gold Plan */}
          {selectedPlan === "gold" && (
            <div style={{
              background: "#fff9e6",
              border: "2px solid #fbbf24",
              borderRadius: "16px",
              padding: "1.5rem",
              marginBottom: "2rem"
            }}>
              <h3 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>⭐ Gold Plan Exclusive</h3>
              <p style={{ color: "#475569", marginBottom: "0.5rem" }}>You will receive fresh placement data daily for 5 days via email.</p>
              <p style={{ fontSize: "0.9rem", color: "#64748b" }}>Check your email tomorrow for Day 2 opportunities!</p>
            </div>
          )}

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button
              onClick={() => {
                setShowPlacementSheet(false);
                setSelectedPlan(null);
                setPaymentMethod(null);
              }}
              style={{
                padding: "0.75rem 1.5rem",
                background: "#64748b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >New Purchase</button>
            
            <Link to="/">
              <button style={{
                padding: "0.75rem 1.5rem",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}>← Back to Home</button>
            </Link>
          </div>

          <div style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#f0f9ff",
            borderRadius: "12px",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
              📧 For any questions, contact: <strong>joblynklive@gmail.com</strong> or WhatsApp: <strong>+91 97693 51231</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayPortal;