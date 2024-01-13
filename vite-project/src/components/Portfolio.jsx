/* eslint-disable no-unused-vars */
import React from "react";
import jobVacancy from "../assets/portfolio/jobVacancy.jpg";
import menuCard from "../assets/portfolio/menuCard.jpg";
import portfolio1 from "../assets/portfolio/portfolio1.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jobVacancy,
    },
    {
      id: 2,
      src: menuCard,
    },
    {
      id: 3,
      src: portfolio1,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md md:shadow-white rounded-lg">
              <img
                src={src}
                alt="menuCard"
                className="w-80 h-80 rounded-md duration-200 hover:scale-105"
              />
              <div className="flex w-[75%] items-center justify-center m-auto sm:w-[100%]">
                <button className="px-6 py-3 m-4 mt-6 duration-200 border hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
