/* eslint-disable no-unused-vars */
import React from "react";
import html from "../assets/html.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import cs from "../assets/cs.png";
import tailwind from "../assets/tailwind.png";
import netCore from "../assets/netCore.png";
import node from "../assets/node.png";
import photoshop from "../assets/photoshop.png";
import flutter from "../assets/flutter.png";
import javascript from "../assets/javascript.png";
import figma from "../assets/figma.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: react,
      language: "React JS",
      style: "shadow-cyan-500",
    },
    {
      id: 2,
      src: html,
      language: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 3,
      src: tailwind,
      language: "Tailwind CSS",
      style: "shadow-blue-400",
    },
    {
      id: 4,
      src: javascript,
      language: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: node,
      language: "node JS",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: java,
      language: "Java",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: cs,
      language: "C#",
      style: "shadow-blue-800",
    },
    {
      id: 8,
      src: netCore,
      language: ".net Core",
      style: "shadow-purple-600",
    },
    {
      id: 9,
      src: flutter,
      language: "Flutter",
      style: "shadow-cyan-500",
    },
    {
      id: 10,
      src: github,
      language: "Github",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: figma,
      language: "Figma",
      style: "shadow-red-500",
    },
    {
      id: 12,
      src: photoshop,
      language: "Adobe Photoshop",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="skills"
      className=" pt-32 md:pt-[150px] h-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are the technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          
          {skills.map(({ id, src, language, style }) => (
            <div
              key={id}
              className={
                `shadow-md hover:scale-105 duration-500 py-2 pb-12 rounded-lg ${style}`
              }
            >
              <img src={src} alt="logo" className="w-20 mx-auto" />
              <p className="mt-4">{language}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
