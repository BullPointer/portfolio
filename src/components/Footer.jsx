import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className="bg-blue-700 gradient-bg-page py-8">
      {/* <ul className="flex w-full bg-pink-500 justify-center items-center gap-2">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <li key={index} className="text-white p-4 font-semibold">
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul> */}
      <div className="sm:w-[90%] mx-auto w-full flex justify-between items-center pt-3 py-4">
        <p className="text-white text-sm text-center">@Youngponi 2023</p>
        <p className="flex flex-row gap-4 text-white">
        <Icon icon="akar-icons:github-fill" fontSize={25} />
        <Icon icon="devicon-plain:linkedin" fontSize={25} />
        <Icon icon="cib:twitter" fontSize={25} />
        </p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
