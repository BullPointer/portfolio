/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Img from "../assets/portfolio_img.jpg";

const Welcome = () => {
  return (
    <div className="md:py-12 w-full">
      <div className="h-fit flex md:flex-row flex-col items-center justify-center w-full">
        <div className="md:hidden w-40 h-40 my-5">
          <img
            className="border-2 w-40 h-40 rounded-full bg-no-repeat bg-cover"
            src={Img}
            alt=""
          />
        </div>
        <div className="max-auto md:w-[45%] md:m-0 p-2 md:py-10 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl p-2 md:px-8 py-2 font-bold text-red-300">
            Front-End React Developer
          </h1>
          <div className="text-xl p-2 md:px-8 py-2 font-semibold text-white">
            Hi, I'm Raphael Madu. A passionate and enthusiatic React Developer.
          </div>
          <div className="flex flex-row justify-center md:justify-start items-center px-8 py-2 gap-x-6">
            <Link to={"https://linkedin.com/in/youngminters/"} target="_blank">
              <Icon
                className="cursor-pointer text-pink-900"
                icon="skill-icons:linkedin"
                fontSize={30}
              />
            </Link>
            <Link to={"https://github.com/BullPointer/"} target="_blank">
              <Icon
                className="cursor-pointer"
                icon="devicon:github"
                fontSize={30}
              />
            </Link>
          </div>
        </div>
        <div className="md:block hidden  w-60 h-60">
          <img
            className="border-2 w-60 h-60 rounded-full bg-no-repeat bg-cover"
            src={Img}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full p-8 gap-3">
        <div className="sm:text-sm md:text-xl font-bold text-white px-2 mr-5 border-r-2 border-l-2 md:border-l-0">
          Tech Stack
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Icon icon="vscode-icons:file-type-html" fontSize={30} />
          <Icon icon="vscode-icons:file-type-css" fontSize={30} />
          <Icon icon="logos:javascript" fontSize={30} />
          <Icon icon="devicon:react" fontSize={30} />
          <Icon icon="logos:tailwindcss-icon" fontSize={30} />
          <Icon icon="vscode-icons:folder-type-light-sass" fontSize={30} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
