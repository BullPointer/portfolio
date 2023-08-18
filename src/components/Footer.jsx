import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-700 gradient-bg-page py-8">
      <div className="sm:w-[90%] mx-auto w-full flex gap-5 md:gap-0 flex-col md:flex-row justify-between items-center md:pt-3 md:py-4">
        <p className="text-white text-sm text-center">@Youngponi 2023</p>
        <p className="flex flex-row gap-4 text-white">
          <Link to={"https://github.com/BullPointer/"} target="_blank">
            <Icon icon="akar-icons:github-fill" fontSize={25} />
          </Link>
          <Link to={"https://linkedin.com/in/youngsparrow20/"} target="_blank">
            <Icon icon="devicon-plain:linkedin" fontSize={25} />
          </Link>
          <Link to={"https://twitter.com/Jakewoft"} target="_blank">
            <Icon icon="cib:twitter" fontSize={25} />
          </Link>
        </p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
