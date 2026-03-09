import { motion } from "framer-motion";

const skills = [
  { label: "React & Next.js", level: 95 },
  { label: "UI/UX Design", level: 88 },
  { label: "Node.js & APIs", level: 80 },
  { label: "CSS & Animation", level: 92 },
  { label: "TypeScript", level: 78 },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "∞", label: "Passion for Craft" },
];




export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap');

        .about-page {
          min-height: 100vh;
          background: #000;
          color: #e5e5e5;
          font-family: 'Playfair Display', serif;
          padding: 0;
          overflow-x: hidden;
        }

        /* Hero Banner */
        .about-hero {
          position: relative;
          height: 45vh;
          display: flex;
          align-items: flex-end;
          padding: 60px;
          border-bottom: 1px solid #1a1a1a;
          overflow: hidden;
        }

        .about-hero::before {
          content: 'ABOUT';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(80px, 18vw, 220px);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px #1c1c1c;
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.1em;
        }

        .about-hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
        }

        .about-hero-title {
          position: relative;
          z-index: 2;
        }

        .about-hero-title p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: gold;
          margin-bottom: 12px;
        }

        .about-hero-title h1 {
          font-size: clamp(36px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 600;
        }

        .gold-word {
          background: linear-gradient(90deg, gold, #fff2a8, goldenrod);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Main Content */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        /* Left Column - Story */
        .about-story {
          padding: 80px 60px;
          border-right: 1px solid #1a1a1a;
        }

        .section-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: gold;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #1a1a1a;
        }

        .about-story h2 {
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 28px;
        }

        .about-story p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          line-height: 1.9;
          color: #888;
          margin-bottom: 20px;
        }

        /* Photo Card */
        .about-photo-wrap {
          position: relative;
          margin-top: 48px;
        }

        .about-photo-card {
          width: 100%;
          height: 320px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #222;
        }

        .about-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: 0.6s ease;
        }

        .about-photo-card:hover img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }

        .photo-tag {
          position: absolute;
          bottom: -16px;
          right: 24px;
          background: linear-gradient(90deg, gold, goldenrod);
          color: #000;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 40px;
        }

        /* Right Column - Skills + Stats */
        .about-skills-col {
          padding: 80px 60px;
        }

        /* Stats Row */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 60px;
        }

        .stat-item {
          background: #000;
          padding: 28px 24px;
          text-align: center;
          transition: background 0.3s;
        }

        .stat-item:hover {
          background: #0a0a0a;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(90deg, gold, #fff2a8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 1px;
          color: #666;
        }

        /* Skills */
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .skill-item {}

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skill-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          letter-spacing: 1px;
          color: #ccc;
        }

        .skill-pct {
          font-size: 13px;
          color: gold;
        }

        .skill-track {
          height: 2px;
          background: #1a1a1a;
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, gold, goldenrod);
          border-radius: 2px;
          transform-origin: left;
        }

        /* Values Row */
        .about-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #1a1a1a;
          border-top: 1px solid #1a1a1a;
          border-bottom: 1px solid #1a1a1a;
        }

        .value-card {
          background: #000;
          padding: 60px 40px;
          text-align: center;
          transition: background 0.3s;
        }

        .value-card:hover {
          background: #050505;
        }

        .value-icon {
          font-size: 28px;
          margin-bottom: 16px;
        }

        .value-card h4 {
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .value-card p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          color: #666;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          .about-story {
            border-right: none;
            border-bottom: 1px solid #1a1a1a;
          }
          .about-values {
            grid-template-columns: 1fr;
          }
          .about-hero {
            padding: 40px;
          }
          .about-story, .about-skills-col {
            padding: 60px 40px;
          }
        }
      `}</style>

      <div className="about-page">
        {/* Hero Banner */}
        <div className="about-hero">
          <div className="about-hero-glow" />
          <motion.div
            className="about-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>Who I Am</p>
            <h1>
              Designer. Developer. <br />
              <span className="gold-word">Craftsman.</span>
            </h1>
          </motion.div>
        </div>

        {/* Two-Column Content */}
        <div className="about-content">
          {/* Left: Story */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-label">My Story</div>
            <h2>
              Building Experiences That <span className="gold-word">Endure</span>
            </h2>
            <p>
              I'm Kaushik — a frontend engineer and digital designer who believes
              that every pixel carries intent. I specialize in high-end web
              experiences that marry aesthetic refinement with technical
              precision.
            </p>
            <p>
              My work lives at the intersection of luxury design and
              performance-driven engineering. I obsess over details most people
              never notice — and that's exactly what makes the difference between
              a good product and an iconic one.
            </p>
            <p>
              From elegant brand sites to complex interactive systems, I bring
              a singular point of view: that digital experiences should feel as
              considered as the finest physical craftsmanship.
            </p>

            <div className="about-photo-wrap">
              <div className="about-photo-card">
                <img src="/src/assets/photo.jpg" alt="Kaushik" />
              </div>
              <div className="photo-tag">Available for Work</div>
            </div>
          </motion.div>

          {/* Right: Stats + Skills */}
          <motion.div
            className="about-skills-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="section-label">By the Numbers</div>
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="section-label">Skills & Expertise</div>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <motion.div
                  className="skill-item"
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.label}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: skill.level / 100 }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Row */}
        <div className="about-values">
          {[
            { icon: "✦", title: "Precision", desc: "Every detail is intentional. No element exists without purpose." },
            { icon: "◈", title: "Elegance", desc: "Luxury isn't excess — it's the perfection of restraint." },
            { icon: "⬡", title: "Performance", desc: "Beauty and speed are not opposites. Both are non-negotiable." },
          ].map((v, i) => (
            <motion.div
              className="value-card"
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              <div className="value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
