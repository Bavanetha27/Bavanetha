import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const achievementsData = [
  {
    title: "CognoRise Web Development Hackathon (May Edition)",
    description: "Secured Third Place among competitive teams.",
    year: "2024",
  },
  {
    title: "Freshathon 2024 - Sri Eshwar College of Engineering",
    description: "Secured First Place in a competitive coding challenge.",
    year: "2024",
  },
  {
    title: "Future Tech AI Hackathon – Growbinar",
    description: "Selected as one of the Top 8 Teams among national participants.",
    year: "2024",
  },
  {
    title: "CodeInsomania – Sri Eshwar College of Engineering",
    description: "Achieved First Place in this intense coding competition.",
    year: "2024",
  },
  {
    title: "Pragati – Path to Future Comfort 3.0",
    description: "Participated and gained recognition in this national innovation event.",
    year: "2025",
  },
];


const Achievements = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="achievements"
      className={`py-20 px-6 transition-colors duration-700 ${
        theme === "dark" ? "bg-gray-900 text-pink-300" : "bg-pink-50 text-pink-900"
      }`}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-16 text-center">🎖 Achievements</h2>

        {/* Vertical center line */}
        <div
          className={`hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-1 rounded ${
            theme === "dark" ? "bg-pink-400" : "bg-pink-600"
          }`}
          style={{ height: "calc(100% - 80px)", marginTop: "40px" }}
        />

        <div className="relative z-10 flex flex-col space-y-32">
          {achievementsData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex justify-center min-h-[120px]"
              >
                {/* Circle */}
                <div
                  className={`hidden md:block absolute top-1/2 w-6 h-6 rounded-full border-4 z-20 ${
                    theme === "dark"
                      ? "border-pink-400 bg-pink-900"
                      : "border-pink-600 bg-white"
                  }`}
                  style={{ left: "50%", transform: "translate(-50%, -50%)" }}
                />

                {/* Content */}
                <div
                    className={`w-full max-w-lg p-6 rounded-xl shadow-lg cursor-default transition
                        ${
                        theme === "dark"
                            ? "bg-pink-900/20 hover:bg-pink-900/40"
                            : "bg-white hover:bg-pink-100"
                        }
                        text-left mx-auto
                        md:absolute md:top-1/2 md:-translate-y-1/2
                        ${isLeft ? "md:left-0 md:text-right md:pr-16" : "md:right-0 md:text-left md:pl-16"}
                    `}
                >
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="mb-2 text-sm leading-snug">{item.description}</p>
                  <span className="text-xs font-medium opacity-70">{item.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
