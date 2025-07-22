import React from "react";

const skills = [
  "HTML", "CSS", "Tailwind CSS", "JavaScript", "React",
  "C++", "MySQL", "PostgreSQL", "Figma","Express.js"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-cyan-700 text-white rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
