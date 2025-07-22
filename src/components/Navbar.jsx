import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-8 py-4 items-center shadow-md bg-gray-900">
      <h1 className="text-2xl font-bold text-white">Muhammad Jazib</h1>
      <ul className="flex gap-6 text-white">
        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
