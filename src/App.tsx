import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";
import PayPortal from "./pages/PayPortal";
import ResumeTools from "./pages/ResumeTools";
import SignUp from "./pages/SignUp";
import EmployersData from "./pages/EmployersData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payportal" element={<PayPortal />} />
        <Route path="/resume-tools" element={<ResumeTools />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/employers" element={<EmployersData />} />
      </Routes>
    </Router>
  );
}

export default App;
