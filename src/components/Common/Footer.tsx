import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-2 container mx-auto border-t border-gray-100 flex justify-between items-center text-xs     text-gray-500 ">
      <span>© Koray Renkligil 2024</span>
      <Link href="/admin" className="flex items-center gap-1">
        <FaCode className="text-sm" />
        Management Panel
      </Link>
    </div>
  );
};

export default Footer;
