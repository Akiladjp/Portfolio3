/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div>
          <p className="text-xl mt-20">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit fugiat, error nemo mollitia odit culpa labore?
            Quisquam, consectetur, repellat maxime ab itaque nihil sunt
            excepturi provident, molestias eaque impedit vel?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
