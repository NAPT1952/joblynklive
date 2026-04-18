import React from "react";
import { Link } from "react-router-dom";
import emblem from "../assets/emblem.jpg";

const Navbar = () => {

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Jobs", path: "/jobs" },
  { name: "Contact", path: "/contact" },
  { name: "Support", path: "/support" },
  { name: "Pay Portal", path: "/payportal" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },  // <--- ADD THIS LINE
  { name: "Employer Portal", path: "/employers" },
  { name: "Resume Maker", path: "/resumebuilder" },
  { name: "Samples Vault", path: "/samplesvault" },
  { name: "Sign Up", path: "/signup" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Terms", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
];

return (

<nav style={{
display:"flex",
alignItems:"center",
background:"#ffffff",
padding:"10px",
boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
}}>

{/* Emblem */}

<img
src={emblem}
alt="logo"
style={{
width:"50px",
height:"50px",
marginRight:"20px"
}}
/>

{/* 9 Frames */}

<div style={{
display:"flex",
flexWrap:"wrap",
gap:"10px"
}}>

{pages.map((p)=>(
<Link
key={p.name}
to={p.path}
style={{
border:"1px solid #ccc",
borderRadius:"6px",
padding:"8px",
width:"130px",
textDecoration:"none",
textAlign:"center",
background:"#f7f7f7"
}}
>

<div style={{fontWeight:"bold"}}>
{p.name}
</div>

<div style={{
fontSize:"11px",
marginTop:"4px"
}}>
{p.desc}
</div>

</Link>
))}

</div>

</nav>

);
};

export default Navbar;