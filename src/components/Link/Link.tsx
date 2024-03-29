import { ButtonType } from "@/types/ButtonTypes";
import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: ButtonType;
  href: string;
};

const LinkComp = ({ children, type, href }: ButtonProps) => {
  switch (type) {
    case "normal":
      return (
        <Link
          href={href}
          className="text-xs md:text-sm 2xl:text-base bg-purple-500 text-white px-10 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          {children}
        </Link>
      );
    case "rounded":
      return (
        <Link
          href={href}
          className="text-xs md:text-sm 2xl:text-base bg-purple-500 text-white px-10 py-2 rounded-full hover:bg-purple-700 transition-colors"
        >
          {children}
        </Link>
      );
    case "outlined":
      return (
        <Link
          href={href}
          className="text-xs md:text-sm 2xl:text-base border-2 border-purple-500 text-purple-500 px-10 py-2 rounded hover:bg-purple-500 hover:text-white transition-colors"
        >
          {children}
        </Link>
      );
    case "outlined-rounded":
      return (
        <Link
          href={href}
          className="text-xs md:text-sm 2xl:text-base border-2 border-purple-500 text-purple-500 px-6 md:px-10 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
        >
          {children}
        </Link>
      );
  }
};

export default LinkComp;
