import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import PayPortal from "./pages/PayPortal";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EmployersData from "./pages/EmployersData";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumeTools from "./pages/ResumeTools";
import SamplesVault from "./pages/SamplesVault";
import SignUp from "./pages/SignUp";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";
import BrainChain from "./pages/BrainChain";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#0f172a";
  };

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-WQLVPTR6EB";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WQLVPTR6EB');
    `;
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.async = true;
    script3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4282121192943910";
    script3.crossOrigin = "anonymous";
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <Router>
      <div className={isDarkMode ? "dark" : "light"}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/payportal" element={<PayPortal />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/employers" element={<EmployersData />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
          <Route path="/resumetools" element={<ResumeTools />} />
          <Route path="/samplesvault" element={<SamplesVault />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/brainchain" element={<BrainChain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;