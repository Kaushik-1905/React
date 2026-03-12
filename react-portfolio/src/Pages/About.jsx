import React from "react";
import { FaCode, FaLaptopCode, FaRocket, FaHeart } from "react-icons/fa";

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Node.js", level: 72 },
  { name: "MongoDB", level: 65 },
  { name: "Git & GitHub", level: 80 },
];

const facts = [
  { icon: FaCode, label: "Projects Built", value: "2+" },
  { icon: FaLaptopCode, label: "Technologies", value: "2+" },
  { icon: FaRocket, label: "Deployed Apps", value: "1" },
  { icon: FaHeart, label: "Happy Clients", value: "1" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFEBEC] flex items-center justify-center p-6 py-12">
      <div className="relative w-full max-w-6xl bg-[#E74B70] rounded-2xl border border-white/20 shadow-2xl p-10">

        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="text-[#2B2F5C] text-sm font-semibold tracking-widest uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-[#2B2F5C]">Me</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-white rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Avatar , Stats */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-52 h-52 rounded-full bg-[#2B2F5C] border-4 border-[#FF4D5A]/40 flex items-center justify-center shadow-xl">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="Kaushik"
                className="w-36"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {facts.map((fact, i) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#1F3A63] rounded-xl p-4 flex flex-col items-center gap-2 border border-white/10 hover:border-[#FF4D5A]/50 transition cursor-default"
                  >
                    <Icon className="text-[#FF4D5A] text-2xl" />
                    <span className="text-white font-bold text-xl">{fact.value}</span>
                    <span className="text-gray-400 text-xs text-center">{fact.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Story , Skills */}
          <div className="flex flex-col gap-7">
            <div>
              <h3 className="text-4xl font-bold text-white mb-3">
                Hey, I'm <span className="text-[#2B2F5C]">Kaushik</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                I'm a passionate Frontend Developer who genuinely loves turning ideas into
                beautiful, functional web experiences. I started coding out of curiosity
                and now I can't stop — there's something magical about writing a few lines
                and watching something come alive on a screen.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-3">
                When I'm not building stuff, you'll probably find me exploring new
                frameworks, binge-watching dev tutorials, or thinking about that one
                project I still haven't shipped yet. I believe clean code and clean design
                go hand in hand.
              </p>
            </div>

            {/* Skill Bars */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
                My Skills
              </h4>
              <div className="flex flex-col gap-4">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#2B2F5C] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[white] rounded-full overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-linear-to-r from-[#2B2F5C] to-[#7a84f7] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="self-start bg-[white] px-8 py-3 rounded-lg text-black font-semibold hover:bg-[#2B2F5C] hover:text-white transition mt-2">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;