import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import emblem from "/emblem.jpg";
interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
    { name: "Pay Portal", path: "/payportal" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Employer Portal", path: "/employers" },
    { name: "Resume Maker", path: "/resumebuilder" },
    { name: "Samples Vault", path: "/samplesvault" },
    { name: "Sign Up", path: "/signup" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Terms", path: "/terms" },
  ];
  const navStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(30,41,59,0.97) 100%)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(250,204,21,0.2)",
    padding: "12px 24px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
  };
  const linkStyle = (path: string): React.CSSProperties => ({
    padding: "5px 11px",
    borderRadius: "6px",
    border: location.pathname === path ? "1px solid #facc15" : "1px solid rgba(250,204,21,0.3)",
    color: location.pathname === path ? "#0f172a" : "#facc15",
    background: location.pathname === path ? "#facc15" : "transparent",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.3px",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap" as const,
  });
  return (
    <nav style={navStyle}>
      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <img src={emblem} alt="JobLynk" style={{width:"38px",height:"38px",borderRadius:"50%",border:"2px solid #facc15"}} />
        <span style={{color:"#facc15",fontWeight:"800",fontSize:"18px",letterSpacing:"0.5px"}}>JobLynk.live</span>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"5px",flex:1,justifyContent:"center",padding:"0 12px"}}
        className="desktop-nav">
        {pages.map((page) => (
          <Link key={page.name} to={page.path} style={linkStyle(page.path)}
            onMouseEnter={e=>{if(location.pathname!==page.path){e.currentTarget.style.background="rgba(250,204,21,0.15)";e.currentTarget.style.borderColor="#facc15";}}}
            onMouseLeave={e=>{if(location.pathname!==page.path){e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="rgba(250,204,21,0.3)";}}}
          >{page.name}</Link>
        ))}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
        <button onClick={toggleDarkMode}
          style={{padding:"5px 11px",border:"1px solid rgba(250,204,21,0.3)",borderRadius:"6px",color:"#facc15",background:"transparent",cursor:"pointer",fontSize:"12px",fontWeight:"600"}}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <button onClick={()=>setMenuOpen(!menuOpen)}
          style={{padding:"5px 10px",border:"1px solid rgba(250,204,21,0.3)",borderRadius:"6px",color:"#facc15",background:"transparent",cursor:"pointer",fontSize:"18px",lineHeight:1}}>
          {menuOpen ? "x" : "="}
        </button>
      </div>
      {menuOpen && (
        <div style={{width:"100%",display:"flex",flexWrap:"wrap",gap:"6px",paddingTop:"10px",borderTop:"1px solid rgba(250,204,21,0.2)",marginTop:"8px"}}>
          {pages.map((page) => (
            <Link key={page.name} to={page.path}
              onClick={()=>setMenuOpen(false)}
              style={linkStyle(page.path)}
            >{page.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
