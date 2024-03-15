"use client";
/* eslint-disable @next/next/no-img-element */
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import navigations from "@/json/navigations.json";
import { useCallback, useState } from "react";
import Image from "next/image";
import { FaHome, FaInfo } from "react-icons/fa";
import { IoIosCube, IoMdContact } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GetIcon = (iconName: string) => {
  switch (iconName) {
    case "home":
      return <FaHome />;
    case "projects":
      return <IoIosCube />;
    case "blogs":
      return <IoChatbox />;
    case "about me":
      return <FaInfo />;
    case "contact":
      return <IoMdContact />;
  }
};

const Navbar = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const closeToggle = useCallback(() => {
    setToggle(false);
  }, []);

  return (
    <nav className="p-4 border-b select-none sticky top-0 z-50 bg-white bg-opacity-100 md:bg-opacity-80 backdrop-blur-sm ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <span>
            <Image
              src="/images/profile.jpg"
              alt="profile"
              className="w-8 h-8 object-cover rounded-full"
              width={20}
              height={20}
              priority
              quality={50}
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
          <Link
            href="/contact"
            className="text-sm font-semibold text-purple-500 hover:text-purple-700 transition-colors duration-200"
          >
            Hire Me
          </Link>
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
          } flex md:opacity-100 md:pointer-events-auto text-sm absolute pb-4 md:pb-0 z-50 top-full left-0 w-full border-b md:relative md:items-center md:justify-center md:border-0 bg-white md:bg-opacity-0 transition-opacity`}
        >
          <ul className="flex flex-col w-full md:flex-row md:justify-center">
            {navigations.map((navigation, key) => (
              <li key={key}>
                <Link
                  className={`${
                    pathname == navigation.link && "text-purple-500"
                  } flex items-center gap-2 w-full px-3 pl-6 py-4 md:pl-3 md:py-1 text-gray-600 hover:text-purple-500 transition-colors duration-200 capitalize whitespace-nowrap`}
                  href={navigation.link}
                >
                  <span className="text-lg md:hidden">
                    {GetIcon(navigation.text)}
                  </span>
                  {navigation.text}
                </Link>
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
