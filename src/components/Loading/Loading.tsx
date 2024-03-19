import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex-1 box-border w-full h-full flex items-center justify-center">
      <PuffLoader color="#c995fa" size={32} />
    </div>
  );
};

export default Loading;
