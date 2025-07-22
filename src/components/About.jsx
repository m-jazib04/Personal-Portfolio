import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg leading-7 mb-6">
        I'm Muhammad Jazib, a passionate Computer Science student and a skilled frontend developer. With a solid grasp of problem-solving, UI design, and interactive development, I have worked on projects in React, C++, HTML/CSS, and database design. I aim to create responsive, user-friendly applications that deliver seamless user experiences.
      </p>
      
      <a
        href="/Muhammad_Jazib_Resume.pdf"
        download
        className="inline-block mt-4 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;
