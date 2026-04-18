import Navbar from "./Navbar";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Chatbot from "./Chatbot";
import Totals from "./Totals";

function App() {
  return (
    <div>
      <Navbar />

      <section style={{ padding: "60px", textAlign: "center" }}>
        <h1>JobLynk.live</h1>
        <p>Connecting Talent With Opportunity</p>
        <p>Jobs • Internships • Tech Careers • Employers</p>
      </section>

      <Totals />
      <Pricing />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
