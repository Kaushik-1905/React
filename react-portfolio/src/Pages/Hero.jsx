import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaTelegramPlane } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="min-h-screen bg-[#1F3A63] flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl bg-[#223E6B] rounded-2xl border border-white/30 shadow-2xl p-10"
      >


        {/* Hero Content */}
        <div className="flex items-center justify-between">

          {/* Left Content */}
          <div className="mx-8">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 mb-3"
            >
              Hi There
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl font-bold text-white mb-4"
            >
              I'm <span className="text-[#FF4D5A]">Kaushik</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl text-gray-300 mb-8"
            >
              I am a Web Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-6"
            >
              <button className="bg-[#FF4D5A] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#e63e4d] transition hover:scale-105">
                Resume
              </button>

              <button className="bg-[#2A4A78] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#203B63] transition hover:scale-105">
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-80 h-80 bg-[#2B2F5C] rounded-full flex items-center justify-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="developer"
                className="w-60"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white/70 text-xl"
        >
          {[
            {
              icon: FaGithub,
              link: "https://github.com/Kaushik-1905/React",
            },
            {
              icon: FaLinkedinIn,
              link: "https://www.linkedin.com/in/kaushik-undefined-2899103a1/",
            },
            {
              icon: FaTwitter,
              link: "https://x.com/home",
            },
            {
              icon: FaTelegramPlane,
              link: "https://web.telegram.org/k/",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3 }}
                className="cursor-pointer hover:text-[#FF4D5A] transition"
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;