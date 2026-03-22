import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Disclaimer from './pages/Disclaimer';
import Support from './pages/Support';
import PayPortal from './pages/PayPortal';
import ResumeTools from './pages/ResumeTools';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/support" element={<Support />} />
        <Route path="/payportal" element={<PayPortal />} />
        <Route path="/resumetools" element={<ResumeTools />} />
      </Routes>
    </Router>
  );
}

export default App;
