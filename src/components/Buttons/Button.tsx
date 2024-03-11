import { ButtonType } from "@/types/ButtonTypes";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: ButtonType;
};

const Button = ({ children, type }: ButtonProps) => {
  switch (type) {
    case "normal":
      return (
        <button className="text-xs md:text-sm 2xl:text-base bg-purple-500 text-white px-10 py-2 rounded hover:bg-purple-700 transition-colors">
          {children}
        </button>
      );
    case "rounded":
      return (
        <button className="text-xs md:text-sm 2xl:text-base bg-purple-500 text-white px-10 py-2 rounded-full hover:bg-purple-700 transition-colors">
          {children}
        </button>
      );
    case "outlined":
      return (
        <button className="text-xs md:text-sm 2xl:text-base border-2 border-purple-500 text-purple-500 px-10 py-2 rounded hover:bg-purple-500 hover:text-white transition-colors">
          {children}
        </button>
      );
    case "outlined-rounded":
      return (
        <button className="text-xs md:text-sm 2xl:text-base border-2 border-purple-500 text-purple-500 px-6 md:px-10 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
          {children}
        </button>
      );
  }
};

export default Button;
