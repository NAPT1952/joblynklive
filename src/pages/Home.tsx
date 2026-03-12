import React, { useEffect } from "react";
import Totals from "../components/Totals"; // adjust path if needed

const Home: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//finicounter.eu.org/finicounter.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ backgroundColor: "#0B1322", color: "#E9EEF2", fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <div className="container">
        {/* Copy the entire content from your original App.tsx here, EXCEPT the navbar and footer */}
        {/* We'll handle navbar/footer separately */}
      </div>
    </div>
  );
};

export default Home;
