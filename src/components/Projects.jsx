/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Img1 from "../assets/website1.png";
import Img2 from "../assets/website2.png";
import Img3 from "../assets/website3.png";

const ProjectItem = ({ img, title, note, code, demo }) => {
  return (
    <div className="flex flex-col md:flex-row  w-[80%] md:w-[50%] mx-auto my-5 h-auto">
      <div className="w-[100%] md:w-[50%] h-auto ">
        <img
          className="rounded-md w-full h-64 bg-no-repeat bg-contain"
          src={img}
          alt=""
        />
      </div>
      <div className="w-[100%] md:w-[50%] md:h-[100%] px-0 py-8 md:py-8 md:px-8 flex flex-col gap-4 justify-center">
        <div className="font-bold text-white text-xl flex justify-center">
          {title}
        </div>
        <div className="text-pink-100 font-semibold text-center">{note}</div>
        <div className="flex gap-4 md:gap-0 flex-col md:flex-row items-center justify-evenly">
          <Link to={`https://github.com/BullPointer/${code}`} target="_blank">
            <div className="flex flex-row gap-2 items-center justify-center cursor-pointer">
              <div className="text-red-400 font-extrabold">Code</div>
              <Icon
                className="text-white"
                icon="ant-design:github-filled"
                fontSize={25}
              />
            </div>
          </Link>
          <Link
            to={`https://bullpointer.github.io/${demo}`}
            target="_blank"
          >
            <div className="flex flex-row gap-2 items-center justify-center cursor-pointer">
              <div className="text-red-400 font-extrabold">Live Demo</div>
              <Icon
                className="text-white"
                icon="icon-park-outline:edit-one"
                fontSize={25}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col gradient-bg-page bg-blue-700 pt-10 w-full h-auto md:h-auto"
    >
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start  w-[80%] md:w-[50%] mx-auto pb-10">
        <div className="font-bold text-blue-700">Projects</div>
        <div className="text-white font-bold text-lg md:text-2xl">
          Each of the projects with its own uniqueness
        </div>
      </div>
      <div className="flex flex-col">
        <ProjectItem
          img={Img1}
          title={"Shopping Cart"}
          note={
            "Shopping Cart is an online Ecommerce that allows users to buy products"
          }
          code={"cart"}
          demo={"cart"}
        />
        <ProjectItem
          img={Img2}
          title={"Resume Builder"}
          note={
            "Resume Builder is a web application that allows user build an resume"
          }
          code={"cv-builder"}
          demo={"cv-builder"}
        />
        <ProjectItem
          img={Img3}
          title={"Swapmute"}
          note={
            "Swapmute is a crypto exchange application that allows users to exchange cryptocurrencies of their choice"
          }
          code={"swapmute"}
          demo={"swapmute"}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
