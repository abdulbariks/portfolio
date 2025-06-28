"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Law.BD",
    description:
      "FindLawyer is a simple and intuitive React-based web application that helps users search for lawyers by expertise, location, and availability. Whether you're looking for legal advice or trying to book a consultation, this app makes the process smooth and efficient.",
    image: "/images/projects/lawbd.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdulbariks/Law.BD",
    previewUrl: "https://abdulbariks-lawbd.netlify.app/",
  },
  {
    id: 2,
    title: "Roommate Lagbe",
    description:
      "A smart and safe platform to help you find compatible roommates with ease.",
    image: "/images/projects/roommate.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdulbariks/Roommate-Lagbe",
    previewUrl: "https://abdulbarik-roommate-finder.netlify.app/",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "A chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time",
    image: "/images/projects/chat-application.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdulbariks/chat-application",
    previewUrl: "https://chat-application-3hxv.onrender.com",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description:
      "Shopelo Trading is an ecommerce site developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It offers a user-friendly and efficient shopping experience for customers, while providing sellers with essential tools to manage their products and sales.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abdulbariks/MERN-Ecommerce-Site",
    previewUrl: "https://mern-ecommerce-site-chi.vercel.app/",
  },
  {
    id: 5,
    title: "Food Ordering Application (Coming Soon)",
    description:
      "I am working hard to launch my Food Ordering Application. Stay tuned for something amazing!",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-10" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
