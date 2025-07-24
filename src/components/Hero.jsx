import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/jazib2.jpg";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-900" id="home">
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myPhoto}
          alt="Muhammad Jazib"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg ring-4 ring-cyan-600 ring-offset-2"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Muhammad Jazib
      </motion.h1>

      <p className="text-xl mt-4 text-gray-300">Software Engineer & Frontend Developer</p>
    </section>
  );
};

export default Hero;
