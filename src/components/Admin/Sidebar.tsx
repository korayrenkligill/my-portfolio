"use client";
import React, { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import sidebarLinks from "@/json/adminNavigations.json";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <li>
      <a
        href={item.link}
        className={`block p-2 pl-4 rounded-md text-sm hover:bg-gray-100 transition-colors ${pathname === item.link ? 'text-purple-700' : 'text-gray-600'}`}
      >
        {item.text}
      </a>
    </li>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();

  const toggleDropdown = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const dropdown = event.currentTarget.nextElementSibling as HTMLElement;
    dropdown.classList.toggle('hidden');
  };

  if (!item.childs) {
    return (
      <li>
        <Link
          href={item.link ?? "#"}
          className={`block p-2 rounded-md text-sm hover:bg-gray-100 transition-colors ${pathname === item.link ? 'text-purple-700' : 'text-gray-600'}`}
        >
          {item.text}
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <a
          className={`flex items-center justify-between p-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer`}
          onClick={toggleDropdown}
        >
          {item.text}
          <IoIosArrowDown />
        </a>
        <ul
          className={`hidden flex-col overflow-hidden duration-300`}
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

const Sidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.classList.toggle("-translate-x-72");
      console.log(sidebarRef.current.classList.contains("transition-transform"))
    }
  };

  return (
    <div className="relative py-4">
      <aside
        ref={sidebarRef}
        className="min-w-60 px-2 bg-white absolute z-20 left-0 top-0 md:relative h-full transition-transform md:-translate-x-0 -translate-x-72"
      >
        {sidebarLinks.map((item, key) => (
          <SidebarPackage item={item} key={key} />
        ))}
      </aside>
      <button
        className="md:hidden fixed z-20 bottom-8 left-4 p-3 shadow-md rounded-full text-base bg-black text-white"
        onClick={toggleSidebar}
      >
        <HiBars2/>
      </button>
    </div>
  );
};
export default Sidebar;
