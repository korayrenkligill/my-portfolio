"use client";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import projects from "@/json/projects.json";

const LastestProjectsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-2">
      <div className="container mx-auto mt-8 md:mt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-base md:text-xl md:leading-normal font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400  text-transparent bg-clip-text line-clamp-1">
            Lastest Projects
          </h1>
          <div className="mb-2 line-clamp-1 text-xs md:text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            expedita!
          </div>
        </div>
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
        <div className="border-2 rounded-b-lg p-4 shadow-md border-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {projects.map((item, key) => (
            <ProjectItem item={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastestProjectsContainer;
