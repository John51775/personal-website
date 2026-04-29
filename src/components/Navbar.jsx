import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">

      <div className="flex justify-between items-center p-5">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500"></div>
          <h1 className="font-bold text-xl">John Ngugi
            <span className="font-normal text-gray-500 text-md"> / Web Developer</span>
          </h1>
        </div>

        {/* DESKTOP LINKS — hidden on mobile */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">About Me</Link>
          <Link to="/resume" className="hover:text-blue-600 transition-colors duration-300">Resume</Link>
          <Link to="/projects" className="hover:text-blue-600 transition-colors duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
        </div>

        {/* HAMBURGER BUTTON — visible on mobile only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white flex flex-col items-center gap-6 py-6 text-lg shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-colors duration-300">About Me</Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-colors duration-300">Resume</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-colors duration-300">Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
        </div>
      )}

    </nav>
  );
}

export default Navbar;