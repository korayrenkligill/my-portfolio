import React from "react";
import Image from "next/image";

type ShortInformationProp = {
  image: string;
  description: string;
  key: number;
};

const ShortInformationItem = ({
  key,
  image,
  description,
}: ShortInformationProp) => {
  return (
    <span
      key={key}
      className="flex items-center justify-center relative bg-gray-100 p-3 rounded-full mt-2 group border-2 border-gray-100 hover:border-purple-200 transition-colors cursor-pointer"
    >
      <Image width={18} height={18} src={image} alt="" />
      <div className="text-xs font-semibold absolute top-full mt-2 bg-gray-100 text-gray-400 p-2 rounded-full select-none group-hover:opacity-100 opacity-0 transition-opacity">
        {description}
      </div>
    </span>
  );
};

export default ShortInformationItem;
