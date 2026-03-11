import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress 0 → 100 over ~2.3s
    let start = null;
    const duration = 2300;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (pct < 100) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const letters = "KAUSHIK".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#1F3A63",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        gap: "2rem",
        overflow: "hidden",
      }}
    >
      {/* Radial glow behind */}
      <div style={{
        position: "absolute",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,77,90,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Animated letter logo */}
      <div style={{ display: "flex", gap: "4px", alignItems: "flex-end" }}>
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.1 + i * 0.07,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: i === 0 || i === 6 ? "#FF4D5A" : "#fff",
              textShadow: i === 0 || i === 6
                ? "0 0 30px rgba(255,77,90,0.6)"
                : "none",
              lineHeight: 1,
              fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          marginTop: "-1.2rem",
        }}
      >
        Web Developer · Portfolio
      </motion.p>

      {/* Progress bar container */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
      >
        {/* Track */}
        <div style={{
          width: "clamp(200px, 40vw, 280px)",
          height: "3px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "3px",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Fill */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.05 }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #FF4D5A, #ff8a93)",
              borderRadius: "3px",
              boxShadow: "0 0 10px rgba(255,77,90,0.7)",
            }}
          />
          {/* Glow head */}
          <motion.div
            animate={{ left: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.05 }}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 10px rgba(255,255,255,0.9)",
            }}
          />
        </div>

        {/* Percentage */}
        <motion.span
          style={{
            color: "#FF4D5A",
            fontSize: "0.75rem",
            fontWeight: 600,
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.05em",
          }}
        >
          {String(progress).padStart(3, "0")}%
        </motion.span>
      </motion.div>

      {/* Decorative corner dots */}
      {[
        { top: 24, left: 24 },
        { top: 24, right: 24 },
        { bottom: 24, left: 24 },
        { bottom: 24, right: 24 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.05 }}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#FF4D5A",
            ...pos,
          }}
        />
      ))}

      {/* Corner brackets */}
      {[
        { top: 16, left: 16, borderTop: "2px solid", borderLeft: "2px solid" },
        { top: 16, right: 16, borderTop: "2px solid", borderRight: "2px solid" },
        { bottom: 16, left: 16, borderBottom: "2px solid", borderLeft: "2px solid" },
        { bottom: 16, right: 16, borderBottom: "2px solid", borderRight: "2px solid" },
      ].map((style, i) => (
        <motion.div
          key={`bracket-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.3 }}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            borderColor: "#FF4D5A",
            ...style,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;