import React from 'react';
import { Link } from 'react-router-dom';
import emblem from "../assets/emblem.jpg";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const pages = [
    { name: "Home", path: "/", description: "Landing page overview" },
    { name: "Pay Portal", path: "/pay", description: "Payments and subscriptions" },
    { name: "Disclaimer", path: "/disclaimer", description: "Terms and conditions" },
    { name: "Samples Vault", path: "/samples", description: "View sample resumes" },
    { name: "Employer Portal", path: "/employer", description: "For employers" },
    { name: "Resume Builder", path: "/builder", description: "Create resumes easily" },
    { name: "Admin", path: "/admin", description: "Admin dashboard" },
  ];

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"} p-4 flex items-center justify-between`}>
      {/* Emblem on top-left */}
      <div className="flex items-center gap-2">
        <img src={emblem} alt="Emblem" className="w-12 h-12 rounded-full" />
        <span className="font-bold text-xl">NigelThomas</span>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.path}
            title={page.description}
            className="px-3 py-2 border rounded hover:bg-blue-500 hover:text-white transition"
          >
            {page.name}
          </Link>
        ))}
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 px-3 py-2 border rounded"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
