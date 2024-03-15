import React from "react";
import { FaEye } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

type BlogItemProps = {
  item: BlogItem;
  key?: number;
};

const BlogItem = () => {
  return (
    <div className="p-4 flex flex-col items-stretch group cursor-pointer rounded-md shadow-md border border-gray-100 shadow-gray-100 hover:shadow-gray-200 group transition-shadow duration-300">
      <div className="flex justify-between items-center gap-4 md:gap-12 mb-1">
        <h1 className="line-clamp-1 font-semibold text-gray-600 group-hover:text-purple-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae
          quia facere, laudantium sed fuga inventore! Labore
        </h1>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 p-2 text-sm rounded-ful text-gray-400 transition-colors duration-500 cursor-pointe hover:text-purple-700">
            124
            <FaEye />
          </span>
          <span className="flex items-center gap-1 p-2 text-sm rounded-full border border-gray-200 text-gray-400 transition-colors duration-500 cursor-pointer hover:border-purple-200 hover:text-purple-700">
            <IoShareSocialSharp />
          </span>
        </div>
      </div>
      <div className="line-clamp-3 text-gray-500 mb-1 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        inventore dignissimos? Doloremque, perspiciatis eaque? Iste illo dolorum
        delectus! Sit quod necessitatibus incidunt a, et culpa nostrum placeat
        similique atque nisi deleniti nobis dignissimos vitae ducimus officia
        distinctio delectus quidem dolor ipsa optio debitis. Laboriosam a
        perferendis voluptate! Facilis, possimus officiis! Nulla sed, labore et
        reiciendis nemo, nobis aspernatur minima rem explicabo iusto veniam
        reprehenderit a architecto earum aliquid quas recusandae repellat quos
        placeat tenetur commodi nostrum. Maiores beatae, repudiandae quam earum
        sit molestiae soluta facilis impedit voluptatum? Quia neque cupiditate
        nesciunt quae fugiat sint eaque veniam soluta, similique doloremque
        quaerat?
      </div>
      <div className="text-xs text-gray-400">01/01/2001</div>
    </div>
  );
};

export default BlogItem;
