import { Link } from "react-router-dom";

interface Props {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: isDarkMode ? "#0f172a" : "#ffffff",
      borderBottom: "1px solid #e5e7eb"
    }}>

      {/* LOGO */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        JobLynk
      </div>

      {/* LINKS */}
      <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "center"
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
        <Link to="/jobs" style={{ textDecoration: "none" }}>Jobs</Link>
        <Link to="/pricing" style={{ textDecoration: "none" }}>Pricing</Link>
        <Link to="/resumebuilder" style={{ textDecoration: "none" }}>Resume</Link>
        <Link to="/samplesvault" style={{ textDecoration: "none" }}>Samples</Link>
        <Link to="/employers" style={{ textDecoration: "none" }}>Employers</Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link>
      </div>

      {/* DARK MODE */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light" : "Dark"}
      </button>

    </nav>
  );
};

export default Navbar;