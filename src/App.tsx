import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Pricing from "./pages/Pricing";
import ResumeTools from "./pages/ResumeTools";
import SamplesVault from "./pages/samplesvault";
import EmployerPortal from "./pages/employerportal";
import PayPortal from "./pages/PayPortal";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import SignUp from "./pages/SignUp";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resumebuilder" element={<ResumeTools />} />
            <Route path="/samplesvault" element={<SamplesVault />} />
            <Route path="/employerportal" element={<EmployerPortal />} />
            <Route path="/payportal" element={<PayPortal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
export default App;
