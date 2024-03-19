"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import sidebarLinks from "@/json/adminNavigations.json";

type SidebarPackageProps = {
  item: SidebarPackageType;
};

type SidebarItemProps = {
  item: SidebarItemType;
};

type SidebarSubItemProps = {
  item: SidebarSubItemType;
};

const SidebarSubItem = ({ item }: SidebarSubItemProps) => {
  return (
    <li>
      <a
        href={item.link}
        className="block p-2 pl-4 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
      >
        {item.text}
      </a>
    </li>
  );
};

const SidebarItem = ({ item }: SidebarItemProps) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  if (!item.childs) {
    return (
      <li>
        <Link
          href={item.link ?? "#"}
          className="block p-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {item.text}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="">
        <a
          className={`flex items-center justify-between p-2 rounded-md text-sm ${
            dropdownIsOpen
              ? "text-purple-700 hover:bg-transparent"
              : "text-gray-700 hover:bg-gray-100"
          } transition-colors cursor-pointer`}
          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
        >
          {item.text}
          <IoIosArrowDown />
        </a>
        <ul
          className={`${
            dropdownIsOpen
              ? "h-auto translate-y-0 opacity-100"
              : "h-0 translate-y-3 opacity-0"
          } flex-col overflow-hidden duration-300`}
        >
          {item.childs.map((item, key) => (
            <SidebarSubItem item={item} key={key} />
          ))}
        </ul>
      </li>
    );
  }
};

const SidebarPackage = ({ item }: SidebarPackageProps) => {
  return (
    <div className="mb-2">
      <h2 className="text-xs text-gray-400">{item.title}</h2>
      <ul>
        {item.items?.map((item, key) => (
          <SidebarItem item={item} key={key} />
        ))}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <div className="relative">
      <aside
        className={`${
          sidebarIsOpen ? "translate-x-0" : "-translate-x-72 md:-translate-x-0"
        } min-w-60 px-2 bg-white absolute z-20 left-0 top-0 md:relative h-full transition-transform`}
      >
        {sidebarLinks.map((item, key) => (
          <SidebarPackage item={item} key={key} />
        ))}
      </aside>
      <button
        className="md:hidden fixed z-20 bottom-8 left-4 p-3 shadow-md rounded-full text-sm bg-white"
        onClick={() => {
          setSidebarIsOpen(!sidebarIsOpen);
        }}
      >
        <HiBars2
          className={`
            ${
              sidebarIsOpen ? "opacity-0 h-0 scale-0" : "opacity-100 scale-100"
            } transition-opacity duration-300`}
        />
        <IoCloseOutline
          className={`
            ${
              sidebarIsOpen ? "opacity-100 scale-100" : "opacity-0 h-0 scale-0"
            } transition-opacity duration-300`}
        />
      </button>
    </div>
  );
};

export default Sidebar;
