interface SidebarPackageType {
  title: string;
  items?: SidebarItemType[];
}

interface SidebarItemType {
  text: string;
  link?: string;
  childs?: SidebarSubItemType[];
}

interface SidebarSubItemType {
  text: string;
  link: string;
}
