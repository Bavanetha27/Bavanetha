import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-6 px-6 text-center ${
        theme === "dark" ? "bg-gray-800 text-pink-300" : "bg-pink-950 text-pink-100"
      }`}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bavanetha M.R. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
