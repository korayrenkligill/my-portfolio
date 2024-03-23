/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { FaEye } from "react-icons/fa";

type ProjectItemProps = {
  item: ProjectItem;
};

const ProjectItem = ({ item }: ProjectItemProps) => {
  return (
    <div className="flex flex-col items-stretch group cursor-pointer rounded-md shadow-lg shadow-gray-100 ">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt="project image"
          className="w-full h-52 object-cover object-top rounded-lg group-hover:scale-105 transition-transform"
        />
        <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-20 rounded-lg">
          <HiCursorClick className="text-3xl text-white" />
        </div>
      </div>
      <p className="leading-3 mt-2 px-2 text-gray-600 text-sm font-semibold whitespace-nowrap text-ellipsis w-full overflow-hidden group-hover:text-purple-500 transition-colors">
        {item.title}
      </p>
      <div className="flex justify-between items-center mt-1 px-2 pb-2">
        <span className="leading-3 text-xs text-gray-300">{item.date}</span>
        <span className="leading-3 text-xs text-gray-300 flex gap-1">
          {item.viewCount}
          <FaEye />
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
