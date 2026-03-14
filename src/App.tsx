import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Placeholder pages for each frame (same as before)
function Applications() { return <div style={styles.page}><h2>Applications</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Messages()    { return <div style={styles.page}><h2>Messages</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Interviews()  { return <div style={styles.page}><h2>Interviews</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Saved()       { return <div style={styles.page}><h2>Saved Jobs</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Profile()     { return <div style={styles.page}><h2>Profile</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Network()     { return <div style={styles.page}><h2>Network</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Calendar()    { return <div style={styles.page}><h2>Calendar</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Resources()   { return <div style={styles.page}><h2>Resources</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }
function Settings()    { return <div style={styles.page}><h2>Settings</h2><Link to="/" style={styles.back}>? Back to Dashboard</Link></div>; }

// Main dashboard with full-page background
function Home() {
  return (
    <div style={styles.background}>
      {/* Emblem at top left */}
      <div style={styles.emblemContainer}>
        <img src="/emblem.jpg" alt="Emblem" style={styles.emblem} />
      </div>

      {/* Centered content: heading + grid */}
      <div style={styles.content}>
        <h1 style={styles.heading}>JobLynk Dashboard</h1>
        <div style={styles.grid}>
          <Link to="/applications" style={styles.card}><h3>Applications</h3><p>Track your job apps</p></Link>
          <Link to="/messages" style={styles.card}><h3>Messages</h3><p>Inbox & replies</p></Link>
          <Link to="/interviews" style={styles.card}><h3>Interviews</h3><p>Upcoming interviews</p></Link>
          <Link to="/saved" style={styles.card}><h3>Saved Jobs</h3><p>Bookmarked listings</p></Link>
          <Link to="/profile" style={styles.card}><h3>Profile</h3><p>Your details</p></Link>
          <Link to="/network" style={styles.card}><h3>Network</h3><p>Connections</p></Link>
          <Link to="/calendar" style={styles.card}><h3>Calendar</h3><p>Schedule</p></Link>
          <Link to="/resources" style={styles.card}><h3>Resources</h3><p>Tools & guides</p></Link>
          <Link to="/settings" style={styles.card}><h3>Settings</h3><p>Preferences</p></Link>
        </div>
      </div>
    </div>
  );
}

// Styles (including full-page background)
const styles = {
  background: {
    backgroundImage: 'url("/aibm.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    position: "relative" as const,
    fontFamily: "Arial, sans-serif"
  },
  emblemContainer: {
    position: "absolute" as const,
    top: "20px",
    left: "20px",
    zIndex: 10
  },
  emblem: {
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    objectFit: "cover" as const,
    border: "2px solid white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "80px 20px 20px 20px", // top padding to avoid emblem overlap
    boxSizing: "border-box" as const
  },
  heading: {
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    marginBottom: "40px",
    fontSize: "2.5rem",
    textAlign: "center" as const
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "900px",
    width: "100%"
  },
  card: {
    textDecoration: "none",
    color: "#333",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "transform 0.2s, box-shadow 0.2s",
    textAlign: "center" as const
  },
  page: {
    padding: "40px",
    fontFamily: "Arial",
    background: "#f5f5f5",
    minHeight: "100vh"
  },
  back: {
    display: "inline-block",
    marginTop: "20px",
    color: "#007bff",
    textDecoration: "none"
  }
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
