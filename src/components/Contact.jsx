import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success or error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/myzjlqen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission failed:", error);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-2 mx-auto transition-colors duration-700 text-center ${
        theme === "dark" ? "bg-gray-900" : "bg-pink-50"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto rounded-lg p-10 transition-colors duration-700 shadow-lg ${
          theme === "dark" ? "bg-gray-800 text-pink-300" : "bg-white text-pink-900"
        }`}
      >
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

               <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div className="flex flex-col md:flex-row md:space-x-6 w-full">
            <div className="flex-1 mb-6 md:mb-0 w-full">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name <span className="text-pink-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                  theme === "dark"
                    ? "bg-gray-700 border-pink-600 focus:ring-pink-400 text-pink-300"
                    : "bg-white border-pink-300 focus:ring-pink-600 text-pink-900"
                }`}
                placeholder="Your name"
              />
            </div>

            <div className="flex-1 w-full">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email <span className="text-pink-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                  theme === "dark"
                    ? "bg-gray-700 border-pink-600 focus:ring-pink-400 text-pink-300"
                    : "bg-white border-pink-300 focus:ring-pink-600 text-pink-900"
                }`}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message <span className="text-pink-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className={`w-full rounded-md border px-4 py-2 resize-none focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-gray-700 border-pink-600 focus:ring-pink-400 text-pink-300"
                  : "bg-white border-pink-300 focus:ring-pink-600 text-pink-900"
              }`}
              placeholder="Write your message here..."
            />
          </div>

          {status === "success" && (
            <div
              className={`text-green-600 font-semibold text-lg ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div
              className={`text-red-600 font-semibold text-lg ${
                theme === "dark" ? "text-red-400" : "text-red-600"
              }`}
            >
               Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            className={`w-full px-8 py-3 rounded-md font-semibold transition ${
              theme === "dark"
                ? "bg-pink-600 text-black hover:bg-pink-700"
                : "bg-pink-700 text-white hover:bg-pink-800"
            }`}
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-8 text-2xl">
          <a
            href="https://linkedin.com/in/bavanethamr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`transition-colors duration-300 hover:${
              theme === "dark" ? "text-pink-400" : "text-pink-700"
            }`}
          >
            {/* LinkedIn SVG icon */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75S5.53 4.23 6.5 4.23 8.25 5.02 8.25 6 7.47 7.73 6.5 7.73zm13.5 11.27h-3v-5.5c0-1.32-1.08-2.4-2.4-2.4s-2.4 1.08-2.4 2.4v5.5h-3v-10h3v1.41c.88-1.1 2.3-1.41 3.4-1.41 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
            </svg>
          </a>
          
          <a
            href="https://github.com/Bavanetha27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`transition-colors duration-300 hover:${
              theme === "dark" ? "text-pink-400" : "text-pink-700"
            }`}
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583
                0-.287-.01-1.046-.016-2.053-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729
                1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.42-1.305.763-1.604-2.665-.304-5.466-1.333-5.466-5.932
                0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 3.003-.404
                11.48 11.48 0 0 1 3.003.404c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84
                1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.814 1.102.814 2.222 0 1.604-.015 2.898-.015
                3.293 0 .322.216.698.825.58C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://instagram.com/bava27_06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`transition-colors duration-300 hover:${
              theme === "dark" ? "text-pink-400" : "text-pink-700"
            }`}
          >
            {/* Instagram SVG icon */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bavanethamr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className={`transition-colors duration-300 hover:${
              theme === "dark" ? "text-pink-400" : "text-pink-700"
            }`}
          >
            {/* Email SVG icon */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
