import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const bubblesLight = [
  { id: 1, size: 200, left: "5%", top: "15%", duration: 18, delay: 0 },
  { id: 2, size: 70, left: "30%", top: "5%", duration: 35, delay: 0 },
  { id: 3, size: 120, left: "70%", top: "10%", duration: 25, delay: 0 },
  { id: 4, size: 150, left: "50%", top: "70%", duration: 30, delay: 0 },
  { id: 5, size: 190, left: "80%", top: "45%", duration: 35, delay: 0 },
  { id: 6, size: 50, left: "25%", top: "75%", duration: 22, delay: 0 },
];

const bubblesDark = [
  { id: 1, size: 200, left: "5%", top: "15%", duration: 18, delay: 0 },
  { id: 2, size: 70, left: "30%", top: "5%", duration: 35, delay: 0 },
  { id: 3, size: 120, left: "70%", top: "10%", duration: 25, delay: 0 },
  { id: 4, size: 150, left: "50%", top: "70%", duration: 30, delay: 0 },
  { id: 5, size: 190, left: "80%", top: "45%", duration: 35, delay: 0 },
  { id: 6, size: 50, left: "25%", top: "75%", duration: 22, delay: 0 },
];

const sparkles = [
  { id: 1, left: "30%", top: "20%", delay: 0 },
  { id: 2, left: "40%", top: "35%", delay: 1.5 },
  { id: 3, left: "60%", top: "10%", delay: 3 },
  { id: 4, left: "80%", top: "60%", delay: 2 },
  { id: 5, left: "20%", top: "80%", delay: 1 },
  { id: 6, left: "85%", top: "85%", delay: 2.5 },
  { id: 7, left: "90%", top: "20%", delay: 0 },
  { id: 8, left: "10%", top: "65%", delay: 2.5 },
];

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bubbles = theme === "light" ? bubblesLight : bubblesDark;

  const selectedIndexes = [0, 3]; 
  const displayedBubbles = isMobile
    ? selectedIndexes.map(index => bubbles[index]).filter(Boolean)
    : bubbles;

  return (
    <header className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <section
        id="home"
        className={`relative overflow-hidden py-20 px-6 min-h-screen mx-auto text-center rounded-lg shadow-lg flex flex-col justify-center items-center ${
          theme === "dark" ? "text-pinkPrimary" : "text-pinkDark"
        }`}
      >
        {/* Glowing Upward Floating Bubbles */}
        {displayedBubbles.map(({ id, size, left, top, duration, delay }) => (
          <div
            key={id}
            className="glowing-bubble"
            style={{
              width: size,
              height: size,
              left,
              top,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              position: "absolute",
              borderRadius: "50%",
              background:
                theme === "dark"
                  ? "radial-gradient(circle at center, rgba(255, 105, 180, 0.4), rgba(179, 0, 89, 0.2))"
                  : "radial-gradient(circle at center, rgba(255, 105, 180, 0.6), rgba(179, 0, 89, 0.4))",
              zIndex: 0,
            }}
          />
        ))}

        {/* Glitter Sparkles */}
        {sparkles.map(({ id, left, top, delay }) => (
          <div
            key={id}
            className="glitter-sparkle"
            style={{
              width: 6,
              height: 6,
              left,
              top,
              position: "absolute",
              borderRadius: "50%",
              zIndex: 0,
              animationDelay: `${delay}s`,
            }}
          />
        ))}

        {/* Actual content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6">Hello, I’m Bavanetha M.R</h1>
          <p className="text-xl mb-10">
            I am a passionate Full Stack Developer who loves building beautiful and
            functional web applications with modern technologies.
          </p>
          <a
            href="/Resume.pdf"
            download="Bavanetha_Resume.pdf"
            target = "_blank"
            className={`inline-block px-8 py-4 rounded-md font-semibold transition ${
              theme === "dark"
                ? "bg-pinkPrimary text-black hover:bg-pinkPrimary/80"
                : "bg-pinkDark text-white hover:bg-pinkDark/80"
            }`}
          >
            Download Resume
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
