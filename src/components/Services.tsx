import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="px-2">
      <div className="container rounded-xl mx-auto px-2 pt-8 pb-3 md:p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 relative">
        <h1 className="text-purple-500 text-xl font-semibold text-center">
          Services
        </h1>
        <p className="text-gray-400 text-base text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          libero.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-md shadow-gray-200 flex flex-col items-center p-8 cursor-pointer hover:shadow-lg transition-shadow group">
            <div className="relative">
              <Image
                src="/images/icons/website-icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                src="/images/icons/website-icon.png"
                alt="icon"
                className="absolute -top-1/4 -left-1/4 opacity-0 group-hover:opacity-10 transition-opacity"
                width={64}
                height={64}
              />
              <Image
                src="/images/icons/website-icon.png"
                alt="icon"
                className="absolute -bottom-1/4 -right-1/4 opacity-0 group-hover:opacity-10 transition-opacity"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-xl font-bold my-2 text-purple-800 text-center">
              WEB DESIGN
            </h1>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae laudantium iste laboriosam doloribus ratione illum quibusdam
              culpa ab cupiditate!
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md shadow-gray-200 flex flex-col items-center p-8 cursor-pointer hover:shadow-lg transition-shadow group">
            <div className="relative">
              <Image
                src="/images/icons/chat-icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                src="/images/icons/chat-icon.png"
                alt="icon"
                className="absolute -top-1/4 -left-1/4 opacity-0 group-hover:opacity-10 transition-opacity"
                width={64}
                height={64}
              />
              <Image
                src="/images/icons/chat-icon.png"
                alt="icon"
                className="absolute -bottom-1/4 -right-1/4 opacity-0 group-hover:opacity-10 transition-opacity"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-xl font-bold my-2 text-purple-800 text-center">
              WEB DESIGN
            </h1>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae laudantium iste laboriosam doloribus ratione illum quibusdam
              culpa ab cupiditate!
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md shadow-gray-200 flex flex-col items-center p-8 cursor-pointer hover:shadow-lg transition-shadow group">
            <div className="relative">
              <Image
                src="/images/icons/edit-icon.png"
                alt="icon"
                width={64}
                height={64}
              />
              <Image
                src="/images/icons/edit-icon.png"
                alt="icon"
                className="absolute -top-1/4 -left-1/4 opacity-0 group-hover:opacity-10 transition-opacity"
                width={64}
                height={64}
              />
              <Image
                src="/images/icons/edit-icon.png"
                alt="icon"
                className="absolute -bottom-1/4 -right-1/4 opacity-0 group-hover:opacity-10 transition-opacity"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-xl font-bold my-2 text-purple-800 text-center">
              WEB DESIGN
            </h1>
            <p className="text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae laudantium iste laboriosam doloribus ratione illum quibusdam
              culpa ab cupiditate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
