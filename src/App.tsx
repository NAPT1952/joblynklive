import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Disclaimer from './pages/Disclaimer';
import Support from './pages/Support';
import PayPortal from './pages/PayPortal';
import ResumeTools from './pages/ResumeTools';

// Optional (if you created this page later)
import EmployersData from './pages/EmployersData';

// Sidebar / Menu (BrainGrid)
import BrainGrid from './components/BrainGrid';

function App() {
  return (
    <Router>
      {/* Sidebar Menu */}
      <BrainGrid />

      {/* Main Content */}
      <div style={{ marginLeft: '180px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/support" element={<Support />} />
          <Route path="/payportal" element={<PayPortal />} />
          <Route path="/resumetools" element={<ResumeTools />} />

          {/* Protected page (we’ll secure later) */}
          <Route path="/employersdata" element={<EmployersData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
