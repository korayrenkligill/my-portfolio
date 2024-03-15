import React from "react";
import ShortInformationItem from "./ShortInformationItem";

import Informations from "@/json/shortInformations.json";

const ShortInformations = () => {
  return (
    <div className="relative min-h-40 px-8">
      <div className="flex flex-col absolute h-full w-full top-0 left-0 -z-50">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 flex-1"></div>
        <div className="flex-1"></div>
      </div>
      <div className="container mx-auto rounded-xl md:rounded-full bg-white shadow-md flex flex-col md:flex-row">
        <div className="flex-1 border-b md:border-r md:border-b-0 p-5 md:p-8">
          <p className="text-xs text-gray-400 text-center md:text-start">
            Tools & Skills
          </p>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
            {Informations.skills.map((item, index) => (
              <ShortInformationItem
                key={index}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 border-b md:border-r md:border-b-0 p-5 md:p-8">
          <p className="text-xs text-gray-400 text-center md:text-start">
            Check out my
          </p>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
            {Informations.socialMedias.map((item, index) => (
              <ShortInformationItem
                key={index}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 p-5 md:p-8">
          <p className="text-xs text-gray-400 text-center md:text-start">
            Contact me
          </p>
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
            {Informations.contact.map((item, index) => (
              <ShortInformationItem
                key={index}
                image={item.image}
                description={item.description}
              />
            ))}
            <a href="mailto:koray.renkligill@gmail.com">
              koray.renkligill@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortInformations;
