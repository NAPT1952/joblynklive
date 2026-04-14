import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Support from './pages/Support';
import SignUp from './pages/SignUp';
import Pricing from './pages/Pricing';
import PayPortal from './pages/PayPortal';
import ResumeTools from './pages/ResumeTools';
import Disclaimer from './pages/Disclaimer';
import EmployersData from './pages/EmployersData';
import Contact from './Contact';
import BrainChain from './BrainChain';
import ResumeBuilder from './resumebuilder';
import SamplesVault from './samplesvault';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payportal" element={<PayPortal />} />
        <Route path="/resumetools" element={<ResumeTools />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/employers" element={<EmployersData />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brainchain" element={<BrainChain />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/samplesvault" element={<SamplesVault />} />
      </Routes>
    </Router>
  );
}
export default App;
