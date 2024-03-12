/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
const LastestProjectsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-2">
      <div className="container mx-auto my-12">
        <ul className="flex bg-gray-50 rounded-t-lg p-2 overflow-x-auto">
          <li
            className={`py-1 px-4 text-sm md:text-base mx-4 cursor-pointer transition-colors duration-400 ${
              activeTab == 0 && "border-b border-purple-500 text-purple-500"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <span>Test</span>
          </li>
          <div className="border-r"></div>
          <li
            className={`py-1 px-4 text-sm md:text-base mx-4 cursor-pointer transition-colors duration-400 ${
              activeTab == 1 && "border-b border-purple-500 text-purple-500"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <span>Test</span>
          </li>
          <div className="border-r"></div>
          <li
            className={`py-1 px-4 text-sm md:text-base mx-4 cursor-pointer transition-colors duration-400 ${
              activeTab == 2 && "border-b border-purple-500 text-purple-500"
            }`}
            onClick={() => setActiveTab(2)}
          >
            <span>Test</span>
          </li>
          <div className="border-r"></div>
          <li
            className={`py-1 px-4 text-sm md:text-base mx-4 cursor-pointer transition-colors duration-400 ${
              activeTab == 3 && "border-b border-purple-500 text-purple-500"
            }`}
            onClick={() => setActiveTab(3)}
          >
            <span>Test</span>
          </li>
        </ul>
        <div className="border-2 rounded-b-lg p-4 border-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/03/image-49-1024x510.webp"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://media.licdn.com/dms/image/D5612AQEqrH2rMY7GRw/article-cover_image-shrink_720_1280/0/1679600688291?e=2147483647&v=beta&t=HsP6TRdUpG54xiyaihtDSPXt6Gilw9CcLE4VpBij6g4"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://repository-images.githubusercontent.com/279903174/e6d970ed-8a4d-42fa-9f16-0b7efc34fb95"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://www.datocms-assets.com/48294/1609157793-7-web-design-portfolio-of-charles-diggs.jpg?auto=format"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://s3-alpha.figma.com/hub/file/2817581526/ecd39a76-4f95-42b7-9198-65b41e0a06c6-cover.png"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/03/breed2-free-portfolio-website-templates-1000x750.jpg"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch group cursor-pointer">
            <div className="relative">
              <img
                src="https://i.ytimg.com/vi/-uQIBlaZ4P0/maxresdefault.jpg"
                alt="project image"
                className="w-full h-52 object-cover object-top rounded-lg"
              />
              <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 rounded-lg">
                <HiCursorClick className="text-3xl text-white" />
              </div>
            </div>
            <p className="leading-3 mt-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              eos esse atque necessitatibus ut quo suscipit harum aperiam
              nesciunt molestiae?
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="leading-3 text-xs text-gray-300">
                01/01/2000
              </span>
              <span className="leading-3 text-xs text-gray-300 flex gap-1">
                101
                <FaEye />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestProjectsContainer;
