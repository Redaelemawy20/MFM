"use client";
import Link from "next/link";
import SidebarItem from "./SideBarItem";
import { usePathname } from "next/navigation";
const dashboardItems = [
  { label: "Home", path: "/dashboard" },
  { label: "Account", path: "/dashboard/account" },
  { label: "Roles", path: "/dashboard/roles" },
  { label: "Content", path: "/content" },
  { label: "Classroom", path: "/classrom" },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen w-1/5 bg-gray-800 p-4 box-border">
      {dashboardItems.map((item) => (
        <Link href={item.path} key={item.label}>
          <SidebarItem active={pathname === item.path}>
            {item.label}
          </SidebarItem>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
