import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrainGrid from './BrainGrid';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import PayPortal from './pages/PayPortal';
import ResumeTools from './pages/ResumeTools';
import EmployersData from './pages/EmployersData';
import SignUp from './pages/SignUp';
import Support from './pages/Support';
import Disclaimer from './pages/Disclaimer';

function App() {
  console.log('🚀 App is rendering');
  
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <BrainGrid />
        <div style={{ 
          marginLeft: '150px', 
          width: 'calc(100% - 150px)',
          padding: '20px'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/payportal" element={<PayPortal />} />
            <Route path="/resumetools" element={<ResumeTools />} />
            <Route path="/employersdata" element={<EmployersData />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/support" element={<Support />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
