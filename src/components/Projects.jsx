import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Adjust path if needed
import pagecraft from "../assets/pagecraft.jpg";
import wavefarer from "../assets/wavefarer.png";
import edvora from "../assets/edvora.jpg";
import artora from "../assets/artora.jpg";
import spendwise from "../assets/spendwise.jpg";
import debugEase from "../assets/debugease.jpg";

const projectsData = [
  {
    id: 1,
    title: "PageCraft",
    description:
      "An AI-driven book recommendation platform that helps users discover high-quality books based on preferences.",
    github: "https://github.com/Bavanetha27/PageCraft.git",
    vercel: "",
    techStacks: ["React", "Node.js", "ML", "MongoDB"],
    image: pagecraft,
  },
  {
    id: 2,
    title: "Artora",
    description:
      "A creative poster maker app that allows users to generate customized posters using AI assistance.",
    github: "https://github.com/Bavanetha27/Artora.git",
    vercel: "https://artora.vercel.app",
    techStacks: ["React", "Tailwind CSS"],
    image: artora,
  },
  {
    id: 3,
    title: "WaveFarer",
    description:
      "A coastal tourism companion app offering personalized travel suggestions, places to visit, and real-time tips.",
    github: "https://github.com/Bavanetha27/WaveFarer.git",
    vercel: "",
    techStacks: ["React", "Map API", "Tailwind CSS", "Node.js", "Flask", "MongoDB"],
    image: wavefarer,
  },
  {
    id: 4,
    title: "DebugEase",
    description:
      "An AI-powered code debugger that helps identify and fix bugs instantly using the Groq API.",
    github: "https://github.com/Bavanetha27/DebugEase.git",
    vercel: "https://debug-ease-xi.vercel.app",
    techStacks: ["React", "Groq API", "Node Js", "MongoDB", "Tailwind CSS"],
    image: debugEase,
  },
  {
    id: 5,
    title: "SpendWise",
    description:
      "An AI-integrated expense tracker that helps you manage and analyze your spending patterns effectively.",
    github: "https://github.com/Bavanetha27/SpendWise.git",
    vercel: "https://spend-wise-six-olive.vercel.app",
    techStacks: ["React", "Node.js", "MongoDB", "AI"],
    image: spendwise,
  },
  {
    id: 6,
    title: "Edvora",
    description:
      "A skill training application that recommends learning paths using the Gemini API for personalized suggestions.",
    github: "https://github.com/Bavanetha27/Edvora.git",
    vercel: "",
    techStacks: ["React", "Gemini API", "MongoDB", "Node Js", "Tailwind CSS"],
    image: edvora,
  },
];
const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className={`py-20 px-6 min-h-screen ${
        theme === "dark" ? "bg-black text-pink-300" : "bg-white text-pink-900"
      }`}
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className={`relative cursor-pointer p-16 rounded-xl shadow-lg border text-center font-medium text-3xl transition transform hover:-translate-y-1 hover:shadow-pink-400/50 ${
              theme === "dark"
                ? "bg-pink-900/10 border-pink-600"
                : "bg-pink-100 border-pink-300"
            }`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={`absolute inset-0 rounded-xl ${
                theme === "dark"
                  ? "bg-black bg-opacity-60"
                  : "bg-white bg-opacity-40"
              }`}
              aria-hidden="true"
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <>
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-6">
            <div
              className={`relative max-w-lg w-full rounded-lg shadow-2xl p-6 ${
                theme === "dark"
                  ? "bg-gray-900 text-pink-300"
                  : "bg-white text-pink-900"
              }`}
            >
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 text-2xl font-bold transition ${
                  theme === "dark"
                    ? "text-pink-600 hover:text-pink-400"
                    : "text-pink-600 hover:text-pink-400"
                }`}
                aria-label="Close modal"
              >
                &times;
              </button>

              <h3 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="mb-6">{selectedProject.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {selectedProject.techStacks.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      theme === "dark"
                        ? "bg-pink-700 text-pink-300"
                        : "bg-pink-200 text-pink-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-semibold transition"
                  >
                    GitHub
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-block bg-gray-400 text-white px-4 py-2 rounded-md font-semibold cursor-not-allowed"
                  >
                    GitHub Unavailable
                  </button>
                )}
                {selectedProject.vercel ? (
                  <a
                    href={selectedProject.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-semibold transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-block bg-gray-400 text-white px-4 py-2 rounded-md font-semibold cursor-not-allowed"
                  >
                    Live Demo Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
