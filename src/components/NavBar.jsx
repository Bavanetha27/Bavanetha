import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      className={`sticky top-0 shadow-lg z-50 px-6 py-4 flex justify-between items-center font-semibold ${
        theme === "dark" ? "bg-gray-900 text-pink-400" : "bg-pink-200 text-pink-900"
      }`}
    >
      {/* Logo / Brand */}
      <div className="text-xl font-bold cursor-pointer">Bavanetha M.R</div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#home" className="hover:opacity-70">Home</a></li>
        <li><a href="#about" className="hover:opacity-70">About</a></li>
        <li><a href="#projects" className="hover:opacity-70">Projects</a></li>
        <li><a href="#achievements" className="hover:opacity-70">Achievements</a></li>
        <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
      </ul>

      {/* Theme toggle & hamburger - grouped */}
      <div className="flex items-center md:space-x-4 space-x-2">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition text-lg"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

        {/* Hamburger icon - visible only on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul
          className={`absolute top-full left-0 right-0 ${
            theme === "dark" ? "bg-gray-900 text-pink-400" : "bg-pink-200 text-pink-900"
          } flex flex-col space-y-4 p-6 md:hidden shadow-lg`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#home" className="block hover:opacity-70">Home</a></li>
          <li><a href="#about" className="block hover:opacity-70">About</a></li>
          <li><a href="#projects" className="block hover:opacity-70">Projects</a></li>
          <li><a href="#achievements" className="block hover:opacity-70">Achievements</a></li>
          <li><a href="#contact" className="block hover:opacity-70">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
