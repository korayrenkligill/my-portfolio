import React from "react";
import ShortInformationItem from "@/components/Common/ShortInformationItem";
import Informations from "@/json/shortInformations.json";

const ShortInformationsContainer = () => {
  return (
    <div className="container mx-auto rounded-xl md:rounded-full bg-white shadow-md border border-gray-100 flex flex-col md:flex-row">
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
  );
};

export default ShortInformationsContainer;
