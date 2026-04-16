import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 sticky top-0 bg-white shadow-md z-50">
        <div className="flex items-center gap-2 ">
        <div className="w-4 h-4 bg-blue-500 my-3"></div>
        <div>
        <h1 className="font-bold text-xl ">John Ngugi  
        <span className="font-normal text-gray-500 text-md"> / Web Developer</span>
        </h1>
        </div>
        </div>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-600 transition-colors duration-300" >About Me</Link>
        <Link to="/resume" className="hover:text-blue-600 transition-colors duration-300" >Resume</Link>
        <Link to="/projects" className="hover:text-blue-600 transition-colors duration-300">Projects</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;