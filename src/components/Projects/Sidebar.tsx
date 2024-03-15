import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="min-w-60 px-2 flex flex-row md:flex-col mb-4 md:mb-0 gap-2 overflow-auto md:overflow-hidden h-full">
      <div className="relative min-w-40">
        <input
          type="text"
          className="bg-gray-400 bg-opacity-10 p-2 pl-10 w-full rounded-md outline-none shadow-gray-200"
          placeholder="Search.."
        />
        <span className="absolute left-3 top-3 text-gray-400 ">
          <FiSearch />
        </span>
      </div>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <FaStar />
        <span className="text-sm">Featured</span>
        <span className="text-xs opacity-50">12</span>
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <RiPlantFill />
        <span className="text-sm">New</span>
        <span className="text-xs opacity-50">10</span>
      </button>
      <div className="min-h-full border-r md:border-b md:border-r-0" />
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <BiSolidCategory />
        <span className="text-sm">Category 1</span>
        <span className="text-xs opacity-50">19</span>
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <BiSolidCategory />
        <span className="text-sm">Category 2</span>
        <span className="text-xs opacity-50">3</span>
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <BiSolidCategory />
        <span className="text-sm">Category 3</span>
        <span className="text-xs opacity-50">27</span>
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <BiSolidCategory />
        <span className="text-sm">Category 4</span>
        <span className="text-xs opacity-50"></span>
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <BiSolidCategory />
        <span className="text-sm">Category 5</span>
        <span className="text-xs opacity-50">30</span>
      </button>
      <button className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 whitespace-nowrap">
        <BiSolidCategory />
        <span className="text-sm">Category 6</span>
        <span className="text-xs opacity-50">42</span>
      </button>
    </aside>
  );
};

export default Sidebar;
