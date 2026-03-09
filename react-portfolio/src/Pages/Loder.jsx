import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center z-50"
    >
      
      {/* Logo Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-white tracking-widest mb-6"
      >
        <span className="text-[#C6A75E]">Kaushik</span>
      </motion.h1>

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-gray-800 rounded overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="h-full bg-[#C6A75E]"
        />
      </div>

      {/* Small Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-400 mt-4 text-sm tracking-wide"
      >
        Loading Portfolio...
      </motion.p>

    </motion.div>
  );
};

export default Loader;