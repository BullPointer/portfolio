/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const listStyling =
  "md:p-4 mx-2 font-semibold text-lg hover:font-bold hover:text-orange-500 cursor-pointer text-white";

const NavbarItem = ({ item, styling }) => (
  <Scroll
    to={item.toLowerCase()}
    offset={0}
    smooth={true}
    duration={500}
    activeClass="active"
  >
    <Link to={`/${item.toLowerCase()}`}>
      <li className={`${listStyling} ${styling}`}>{item}</li>
    </Link>
  </Scroll>
);

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div className="flex p-4 justify-end md:justify-evenly items-cente w-full">
      <div className="hidden md:flex text-green-200 p-4 font-bold md:text-3xl">
        Raphael Madu
      </div>
      <ul className="md:flex hidden">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <NavbarItem item={item} key={index} />
        ))}
        <li className="text-white"> </li>
      </ul>
      <div className="relative flex flex-col md:hidden">
        <div
          onClick={() => setOpenBar(true)}
          className="text-red-300 float-right"
        >
          {!openBar && <Icon icon="fluent:list-bar-16-filled" fontSize={30} />}
        </div>
        {openBar && (
          <ul className="z-10 fixed top-0 -right-2 w-[70vw] h-screen blue-glassmorphism">
            <div
              className="ml-2 mt-2 text-red-300"
              onClick={() => setOpenBar(false)}
            >
              <Icon icon="mingcute:close-fill" fontSize={30} />
            </div>
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <NavbarItem
                item={item}
                key={index}
                styling={"mt-1 pt-2 px-4 text-[20px]"}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
