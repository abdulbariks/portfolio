import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNode className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
];

const Skills = () => {
  return (
    <div id="skills" className="py-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        My Skills
      </h2>
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="flex gap-16 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white min-w-[100px]"
            >
              <div className="text-4xl mb-1">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
