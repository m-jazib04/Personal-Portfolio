import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Banking Management System (C++)",
    url: "https://github.com/m-jazib04/Banking-Management-System.git",
  },
  {
    title: "Myntra Clone (HTML/CSS)",
    url: "https://github.com/m-jazib04/Myntra-Clone-online-shopping-platform-.git",
  },
  {
    title: "Restaurant Management System (React)",
    url: "https://github.com/m-jazib04/WAD-Project.git",
  },
  {
    title: "Flipmart Clone (React)",
    url: "https://github.com/m-jazib04/WAD-Assignments.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-gradient-to-r from-gray-900 to-gray-800">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 hover:border-cyan-500 border border-transparent transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-sm text-cyan-300">View on GitHub</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
