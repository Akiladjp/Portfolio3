/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />{" "}
        </>
      ),
      href: "https://www.linkedin.com/in/akila-piyumal-27948a253/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />{" "}
        </>
      ),
      href: "https://github.com/Akiladjp",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          E-Mail <MdOutlineMail size={30} />{" "}
        </>
      ),
      href: "mailto:Akilapiyumal11@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />{" "}
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-0 hover:duration-300 hover:rounded-r-lg hover:bg-gray-600 shadow-md hover:shadow-lg hover:shadow-xl" + "" + style }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
