/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "../assets/heroImage.png";
import { GoChevronRight } from "react-icons/go";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="mt-32 sm:mt-0">
          <img
            src={HeroImage}
            alt="myPic"
            className="rounded-2xl mt-24 mx-auto w-80 md:w-84 md:mt-0" // Adjust the width here
          />
        </div>
        <div className="flex flex-col justify-center h-full w-6/12 ml-8 md:text-lg">
          <h2 className="text-5xl w-[120%] mt-12 sm:mt-0 sm:text-7xl font-bold text-white">
            I am a React <br/> Front-End Developer
          </h2>
          <p className="text-gray-300 my-4 text-[20px]">
            My name is Akila Piyumal
            <br />
            BSc in Computer Science. <br />
            University of Jaffna.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <GoChevronRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
