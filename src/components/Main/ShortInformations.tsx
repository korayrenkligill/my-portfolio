import React from "react";
import ShortInformationsContainer from "../Common/ShortInformationsContainer";

const ShortInformations = () => {
  return (
    <div className="relative min-h-40 px-8">
      <div className="flex flex-col absolute h-full w-full top-0 left-0 -z-50">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 flex-1"></div>
        <div className="flex-1"></div>
      </div>
      <ShortInformationsContainer />
    </div>
  );
};

export default ShortInformations;
