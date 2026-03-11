import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = ["All", "React", "Full Stack", "UI/UX"];

const projects = [
  {
    title: "DevConnect",
    desc: "A real-time developer networking platform with live chat, project boards, and GitHub integration. Built because LinkedIn felt too formal for devs.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Full Stack",
    color: "#FF4D5A",
    icon: "🔗",
    github: "https://github.com/Kaushik-1905",
    live: "#",
  },
  {
    title: "PortfolioCraft",
    desc: "A drag-and-drop portfolio builder for developers. No design skills required — just pick a template, fill in your stuff, and you're live.",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "React",
    color: "#4D9FFF",
    icon: "🎨",
    github: "https://github.com/Kaushik-1905",
    live: "#",
  },
  {
    title: "TaskFlow",
    desc: "A minimal but powerful task manager inspired by how I actually work — Kanban boards, tags, priority flags, and zero fluff.",
    tech: ["React", "Redux", "Express"],
    category: "Full Stack",
    color: "#A78BFA",
    icon: "✅",
    github: "https://github.com/Kaushik-1905",
    live: "#",
  },
  {
    title: "WeatherNow",
    desc: "Clean weather dashboard with 7-day forecasts, animated icons, and location detection. I made it because weather apps are usually ugly.",
    tech: ["React", "OpenWeather API", "CSS"],
    category: "React",
    color: "#34D399",
    icon: "🌤️",
    github: "https://github.com/Kaushik-1905",
    live: "#",
  },
  {
    title: "ShopEase UI",
    desc: "A handcrafted e-commerce UI design — focused entirely on conversion, accessibility, and making the shopping experience actually enjoyable.",
    tech: ["Figma", "HTML", "CSS"],
    category: "UI/UX",
    color: "#FBBF24",
    icon: "🛒",
    github: "https://github.com/Kaushik-1905",
    live: "#",
  },
  {
    title: "NoteVault",
    desc: "A local-first notes app with markdown support, tags, and a beautiful minimal interface. Think Notion but lightweight and yours.",
    tech: ["React", "IndexedDB", "Tailwind"],
    category: "React",
    color: "#F87171",
    icon: "📝",
    github: "https://github.com/Kaushik-1905",
    live: "#",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-[#FF4D5A] hover:bg-[#e63e4d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-[#FF4D5A] hover:bg-[#e63e4d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
  >
    <FaChevronRight />
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dotsClass: "slick-dots !bottom-[-36px]",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1F3A63] flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-6xl bg-[#223E6B] rounded-2xl border border-white/20 shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#FF4D5A] text-sm font-semibold tracking-widest uppercase mb-2">
            What I've Built
          </p>
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-[#FF4D5A]">Portfolio</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#FF4D5A] rounded-full" />
        </div>

        {/* Category Buttons — decorative only, no onClick */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map((cat, i) => (
            <span
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-semibold cursor-default select-none ${
                cat === "All"
                  ? "bg-[#FF4D5A] text-white"
                  : "border border-white/20 text-gray-300"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Slider — always shows all projects */}
        <div className="relative px-6 pb-12">
          <Slider {...sliderSettings}>
            {projects.map((project, i) => (
              <div key={i} className="px-3">
                <div className="bg-[#1F3A63] rounded-2xl border border-white/10 hover:border-[#FF4D5A]/50 transition-all duration-300 p-6 flex flex-col gap-4 h-full">

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: project.color + "22" }}
                  >
                    {project.icon}
                  </div>

                  <span
                    className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: project.color + "22", color: project.color }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-[#223E6B] text-gray-300 rounded-md border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#FF4D5A] hover:text-white transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm mb-4">
            These are just the ones I'm proud enough to show 😄
          </p>
          <a href="https://github.com/Kaushik-1905" target="_blank" rel="noopener noreferrer">
            <button className="border border-[#FF4D5A] text-[#FF4D5A] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF4D5A] hover:text-white transition">
              See All on GitHub
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;