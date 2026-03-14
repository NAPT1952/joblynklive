import React from "react";
import { Link } from "react-router-dom";
import emblem from "../assets/emblem.jpg";

const Navbar = () => {

const pages = [
{ name: "Home", path: "/" , desc:"Main dashboard"},
{ name: "About", path: "/about", desc:"About our platform"},
{ name: "Jobs", path: "/jobs", desc:"Find career opportunities"},
{ name: "Pricing", path: "/pricing", desc:"Subscription plans"},
{ name: "Resume Builder", path: "/resumebuilder", desc:"Create your CV"},
{ name: "Samples Vault", path: "/samplesvault", desc:"View resume samples"},
{ name: "Employer Portal", path: "/employerportal", desc:"Recruiter access"},
{ name: "Pay Portal", path: "/payportal", desc:"Payments & billing"},
{ name: "Contact", path: "/contact", desc:"Reach our team"}
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