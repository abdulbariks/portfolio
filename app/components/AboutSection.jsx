"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  FaUniversity,
  FaBook,
  FaGraduationCap,
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaLaptopCode,
} from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-4 space-y-2">
        <li>
          <strong className="flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" />
            Bachelor of Science (BSc)
          </strong>
          <ul className="list-none pl-6 space-y-1 mt-1">
            <li className="flex items-center gap-2">
              <FaUniversity className="text-gray-600" />
              <span>
                <strong>Institution:</strong> UCASM, Under National University
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaBook className="text-gray-600" />
              <span>
                <strong>Subject:</strong> Computer Science & Engineering (CSE)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap className="text-gray-600" />
              <span>
                <strong>CGPA:</strong> 2.68
              </span>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-4 space-y-2">
        <li className="flex items-center gap-2">
          <FaCode className="text-blue-600" />
          <span>
            <strong>Full Stack Development:</strong> Programming Hero
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FaMobileAlt className="text-green-600" />
          <span>
            <strong>Mobile Application Development:</strong> BITM
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FaSearch className="text-orange-600" />
          <span>
            <strong>Search Engine Optimization (SEO):</strong> eShikhon
          </span>
        </li>
        <li className="flex items-center gap-2">
          <FaLaptopCode className="text-purple-600" />
          <span>
            <strong>Web Development:</strong> CodersTrust
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-16" id="about">
      <h2 className="text-4xl text-center font-bold text-white mb-4">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          height={500}
          width={500}
          className="rounded-md"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, JavaScript, React, Next, Node.js, Express,
            MongoDB, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
