import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTiktok, FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaBars, FaXmark } from "react-icons/fa6";
import Footer from "./Footer";

function AboutMe() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

     

      <div className="min-h-screen flex-grow flex items-center justify-center bg-gray-100 py-10">

        <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg">

          {/* LEFT CARD */}
          <div className="bg-[#d6cfc7] w-full md:w-1/2 p-10 flex flex-col items-center text-center">

            <img
              src="/JOHN.jpg"
              alt="profile"
              className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover mb-5"
            />

            <h2 className="text-2xl font-bold">John Ngugi</h2>

            <div className="w-10 h-1 bg-blue-500 my-3"></div>

            <p className="tracking-widest text-sm">Front End Web Developer</p>

            <div className="flex gap-4 mt-6 text-xl">
              <a href="https://www.tiktok.com/@_.johnngugi" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com/@ngaruiya2541" target="_blank">
                <FaXTwitter className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://github.com/John51775" target="_blank">
                <FaGithub className="hover:text-blue-600 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white w-full md:w-1/2 p-10">
            <div className="mt-4 md:mt-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello</h1>

              <p className="mb-8 text-lg text-gray-600">
                Here's who I am & what I do
              </p>

              <div className="flex gap-4 mb-8">
                <Link to="/Resume">
                  <button className="py-2 border border-gray-600 px-5 rounded-full hover:text-white hover:bg-blue-600 transition-colors duration-300">
                    Resume
                  </button>
                </Link>
                <Link to="/Projects">
                  <button className="border border-gray-600 px-5 py-2 rounded-full hover:text-white hover:bg-blue-600 transition-colors duration-300">
                    Projects
                  </button>
                </Link>
              </div>

              <p className="text-gray-600 text-lg">
                I'm a frontend developer with a design background, creating intuitive and visually engaging web experiences.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutMe;