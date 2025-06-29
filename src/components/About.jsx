import React,{useContext} from "react";
import { ThemeContext } from "../context/ThemeContext"; 
import Profile from "../assets/Profile.jpg"; 
const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen py-20 px-6 gap-12 transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-pink-300" : "bg-white text-pink-800"
      }`}
    >
      {/* Left: Photo */}
      <div className="flex-shrink-0 max-w-xs md:max-w-md w-full rounded-xl overflow-hidden shadow-2xl ring-4 ring-pink-400/60">
        <img
          src={Profile}
          alt="Bavanetha M.R"
          className="w-full h-auto object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Right: Content */}
      <div className="max-w-3xl flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
        <p className="text-lg mb-8 leading-relaxed">
          Hello! I’m <span className="font-bold">Bavanetha M.R</span>, a dynamic Full Stack Developer fueled by passion and creativity. I specialize in crafting seamless, scalable, and visually stunning web applications. I believe technology is the canvas for innovation and storytelling — and I strive to build experiences that inspire and engage.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          With expertise in React, Node.js, MongoDB, and Tailwind CSS, I translate complex problems into elegant, maintainable solutions. I’m a lifelong learner who thrives on collaboration, continuous growth, and turning ambitious ideas into reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-pink-100 dark:bg-pink-900/10 border border-pink-300 dark:border-pink-600 p-6 rounded-xl shadow-lg hover:shadow-pink-400/50 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">💻 Frontend</h3>
            <p className="text-sm">
              React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind, Bootstrap, Responsive Design
            </p>
          </div>
          <div className="bg-pink-100 dark:bg-pink-900/10 border border-pink-300 dark:border-pink-600 p-6 rounded-xl shadow-lg hover:shadow-pink-400/50 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">⚙️ Backend & Databases</h3>
            <p className="text-sm">
              Node.js, Express.js, RESTful APIs, MongoDB, Mongoose, Authentication & Authorization
            </p>
          </div>
          <div className="bg-pink-100 dark:bg-pink-900/10 border border-pink-300 dark:border-pink-600 p-6 rounded-xl shadow-lg hover:shadow-pink-400/50 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">🚀 Tools & Workflow</h3>
            <p className="text-sm">
              Git & GitHub, VS Code, Postman, Agile Methodologies, Testing & Debugging, Deployment (Netlify, Render)
            </p>
          </div>
          <div className="bg-pink-100 dark:bg-pink-900/10 border border-pink-300 dark:border-pink-600 p-6 rounded-xl shadow-lg hover:shadow-pink-400/50 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">🌟 Soft Skills</h3>
            <p className="text-sm">
              Problem Solving, Team Collaboration, Communication, Creativity, Adaptability, Time Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
