/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className="md:text-xl mt-20 w-[90%] md:w-[100%] ml-10 md:ml-0">
             As a Computer Science student (BSc) aspiring to become a Mobile and
            Web Developer, I'm eager to apply my theoretical knowledge,
            especially in React front-end and mobile app development, through an
            internship. Despite being new to the professional scene, I offer a
            fresh perspective, quick learning abilities, and a passion for
            creating user-friendly experiences. Additionally, I bring leadership
            skills that complement my commitment to contributing positively and
            growing within a dynamic team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
