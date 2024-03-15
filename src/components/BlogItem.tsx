import React from "react";
import { FaEye } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

type BlogItemProps = {
  item: BlogItem;
  key?: number;
};

const BlogItem = ({ item, key }: BlogItemProps) => {
  return (
    <div
      key={key}
      className="p-4 flex flex-col items-stretch group cursor-pointer rounded-md shadow-md border border-gray-100 shadow-gray-100 hover:shadow-gray-200 group transition-shadow duration-300"
    >
      <div className="flex justify-between items-center gap-4 md:gap-12 mb-1">
        <h1 className="line-clamp-1 font-semibold text-gray-600 group-hover:text-purple-500">
          {item.title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 p-2 text-sm rounded-ful text-gray-400 transition-colors duration-500 cursor-pointe hover:text-purple-700">
            {item.viewCount}
            <FaEye />
          </span>
          <span className="flex items-center gap-1 p-2 text-sm rounded-full border border-gray-200 text-gray-400 transition-colors duration-500 cursor-pointer hover:border-purple-200 hover:text-purple-700">
            <IoShareSocialSharp />
          </span>
        </div>
      </div>
      <div className="line-clamp-3 text-gray-500 mb-1 text-sm">
        {item.content}
      </div>
      <div className="text-xs text-gray-400">{item.date}</div>
    </div>
  );
};

export default BlogItem;
