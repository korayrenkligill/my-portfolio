"use client";
/* eslint-disable @next/next/no-img-element */
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import navigations from "@/json/navigations.json";
import { useCallback, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const closeToggle = useCallback(() => {
    setToggle(false);
  }, []);

  return (
    <nav className="p-4 border-b select-none sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <span>
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="w-8 h-8 object-cover rounded-full"
            />
          </span>
          <span className="text-sm">
            Koray{" "}
            <span className="font-semibold">
              R<span className="inline-block md:hidden">.</span>
              <span className="hidden md:inline-block">ENKLİGİL</span>
            </span>
          </span>
        </div>
        <div className="flex items-center justify-end gap-4 md:order-2 flex-1">
          <button className="text-sm font-semibold text-purple-500 hover:text-purple-700 transition-colors duration-200">
            Hire Me
          </button>
          <button
            onClick={handleToggleChange}
            className="inline-block md:hidden px-1"
          >
            <BsThreeDotsVertical className="text-xl" />
          </button>
        </div>
        <div
          className={`flex-1 ${
            toggle
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } flex md:opacity-100 md:pointer-events-auto text-sm absolute z-50 top-full left-0 w-full border-b md:relative md:items-center md:justify-center md:border-0 bg-white transition-opacity`}
        >
          <ul className="flex flex-col w-full md:flex-row md:justify-center">
            {navigations.map((navigation, key) => (
              <li key={key}>
                <a
                  className="inline-block w-full px-3 py-2 md:py-1 text-gray-600 hover:text-purple-500 transition-colors duration-200 capitalize whitespace-nowrap"
                  href={navigation.link}
                >
                  {navigation.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={closeToggle}
          className={`${
            toggle
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } md:hidden absolute backdrop-blur-sm bg-black bg-opacity-20 -z-10 w-screen top-full left-0 transition-opacity`}
          style={{
            height: "calc(100vh - 64px)",
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
