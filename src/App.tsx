import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-row">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* You can add more routes here later, like /jobs */}
            </Routes>
          </main>

          <Footer />
        </div>

        {/* Floating Components */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
