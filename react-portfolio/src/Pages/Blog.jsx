import React from "react";
import { FaClock, FaArrowRight, FaSearch } from "react-icons/fa";

const tags = ["All", "React", "CSS", "JavaScript", "Career", "Tips"];

const blogs = [
  {
    id: 1,
    title: "Why I Stopped Fighting CSS and Started Loving It",
    excerpt:
      "Okay hear me out — CSS is not the enemy. For years I treated it like some chaotic beast I had to tame. But the moment I understood the cascade and specificity, everything clicked.",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    tag: "CSS",
    emoji: "🎨",
    featured: true,
    color: "#FF4D5A",
  },
  {
    id: 2,
    title: "React useEffect: The Hook That Confused Me for Months",
    excerpt:
      "I'm not ashamed to admit it — useEffect had me confused for a long time. Infinite loops, stale closures, missing deps warnings... here's how I finally got it.",
    date: "Feb 14, 2025",
    readTime: "7 min read",
    tag: "React",
    emoji: "⚛️",
    featured: false,
    color: "#4D9FFF",
  },
  {
    id: 3,
    title: "How I Built My First Full-Stack App (And What I Broke)",
    excerpt:
      "It took 3 weeks, 47 StackOverflow tabs, and one very patient rubber duck. Here's the honest story of building TaskFlow — including all the dumb mistakes I made.",
    date: "Jan 30, 2025",
    readTime: "9 min read",
    tag: "Career",
    emoji: "🚀",
    featured: false,
    color: "#A78BFA",
  },
  {
    id: 4,
    title: "10 JavaScript Tricks I Wish Someone Had Told Me Earlier",
    excerpt:
      "Optional chaining, nullish coalescing, array destructuring magic... these are the JS tricks that make me look like I know what I'm doing in code reviews.",
    date: "Jan 12, 2025",
    readTime: "4 min read",
    tag: "JavaScript",
    emoji: "⚡",
    featured: false,
    color: "#FBBF24",
  },
  {
    id: 5,
    title: "The Portfolio that Actually Got Me Noticed (And Why)",
    excerpt:
      "Spoiler: it wasn't the design. It was the story. Here's the thought process behind building a portfolio that feels human instead of another Bootstrap template.",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    tag: "Career",
    emoji: "💼",
    featured: false,
    color: "#34D399",
  },
  {
    id: 6,
    title: "Framer Motion is Insane and Here's a Quick Start",
    excerpt:
      "I added animations to my portfolio in under an hour thanks to Framer Motion. If you're still doing CSS keyframes for everything, this post is for you.",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    tag: "Tips",
    emoji: "🎬",
    featured: false,
    color: "#F87171",
  },
];

const featured = blogs.find((b) => b.featured);
const rest = blogs.filter((b) => !b.featured);

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#1F3A63] flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-6xl bg-[#223E6B] rounded-2xl border border-white/20 shadow-2xl p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#FF4D5A] text-sm font-semibold tracking-widest uppercase mb-2">
            Thoughts & Learnings
          </p>
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-[#FF4D5A]">Blog</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#FF4D5A] rounded-full" />
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">
            Things I've figured out, broken, fixed, and decided to write about so you don't have to go through the same pain.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">

          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search posts..."
              readOnly
              className="w-full bg-[#1F3A63] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 outline-none cursor-default"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-default select-none ${
                  tag === "All"
                    ? "bg-[#FF4D5A] text-white"
                    : "border border-white/20 text-gray-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#1F3A63] rounded-2xl border border-white/10 hover:border-[#FF4D5A]/50 transition-all duration-300 p-6 flex flex-col gap-4 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: blog.color + "22" }}
              >
                {blog.emoji}
              </div>

              <span
                className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: blog.color + "22", color: blog.color }}
              >
                {blog.tag}
              </span>

              <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#FF4D5A] transition">
                {blog.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><FaClock /> {blog.readTime}</span>
                  <span>{blog.date}</span>
                </div>
                <span className="text-[#FF4D5A] flex items-center gap-1 font-semibold">
                  Read <FaArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;