import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Pricing from "./pages/Pricing";
import SamplesVault from "./pages/SamplesVault";
import EmployerPortal from "./pages/EmployerPortal";
import PayPortal from "./pages/PayPortal";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/samplesvault" element={<SamplesVault />} />
        <Route path="/employerportal" element={<EmployerPortal />} />
        <Route path="/payportal" element={<PayPortal />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
      <Chatbot />
      <Toast />
    </Router>
  );
}

export default App;
