import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import PayPortal from "./pages/payportal";
import Disclaimer from "./pages/disclaimer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pay" element={<PayPortal />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
