/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react";
const contact = () => {
  return (
    <div id="contact" className="bg-blue-700 gradient-bg-page py-20">
      <div className="w-[90%] md:w-[60%] mx-auto">
        <div className="text-center">
          <div className="font-bold text-blue-700 pt-2">CONTACT</div>
          <div className="font-bold text-white text-2xl py-2">
            Don't be shy! Hit me up! 
          </div>
        </div>
        <div className="w-full grid justify-items-start grid-cols-1 md:grid-cols-2 py-8">
          <div className="flex flex-row justify-center items-center">
            <div className="px-4">
              <Icon className="text-yellow-800" icon="subway:call-1" fontSize={30} />
            </div>
            <div>
              <div className="text-gray-400 font-bold">Number</div>
              <div className="font-semibold text-white">+234-9061569485</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="px-4">
              <Icon className="text-yellow-800" icon="ic:twotone-mail" fontSize={30} />
            </div>
            <div>
              <div className="text-gray-400 font-bold">Mail</div>
              <div className="font-semibold text-white ">
                blueded88@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
