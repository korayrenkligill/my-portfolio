import React from "react";
import { GoDotFill } from "react-icons/go";
import educations from "@/json/educations.json";
import { IoIosArrowUp } from "react-icons/io";

const MyEducations = () => {
  return (
    <div className="container mx-auto">
      <div className="hidden md:flex items-center justify-between">
        {educations.map((item, key) => {
          return (
            <div
              key={key}
              className={`${
                key != educations.length - 1 && "flex-grow"
              } flex items-center`}
            >
              <div className="w-3 h-3 hover:scale-110 transition-transform bg-purple-300 border-2 border-white outline outline-purple-500 rounded-full relative group">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 pb-2">
                  <div className="flex flex-col bg-white shadow rounded-md p-3">
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        {item.startYear}
                        <GoDotFill />
                      </span>
                      <div className=" flex-grow border-b border-dashed border-gray-400"></div>
                      <span className="flex items-center gap-1">
                        <GoDotFill />
                        {item.endYear}
                      </span>
                    </div>
                    <div className="whitespace-nowrap text-sm ">
                      {item.schoolName}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.country} / {item.city}
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-1 rotate-45  w-2 h-2 bg-pink-200 shadow"></div>
                </div>
              </div>
              {key != educations.length - 1 && (
                <div className="flex-grow border-t-2 border-dashed border-purple-200"></div>
              )}
            </div>
          );
        })}
      </div>
      <h1 className="flex flex-col items-center justify-center mt-4 text-lg md:text-xl font-semibold text-center text-gray-700">
        <IoIosArrowUp className="hidden md:block" />
        My Educations
      </h1>
      <div className="flex md:hidden flex-col gap-4 p-2">
        {educations.map((item, key) => (
          <div key={key} className="transition-opacity pb-2">
            <div className="flex flex-col bg-white shadow rounded-md p-3">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  {item.startYear}
                  <GoDotFill />
                </span>
                <div className=" flex-grow border-b border-dashed border-gray-400"></div>
                <span className="flex items-center gap-1">
                  <GoDotFill />
                  {item.endYear}
                </span>
              </div>
              <div className="whitespace-nowrap text-sm ">
                {item.schoolName}
              </div>
              <div className="text-xs text-gray-400">
                {item.country} / {item.city}
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 rotate-45  w-2 h-2 bg-pink-200 shadow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEducations;
