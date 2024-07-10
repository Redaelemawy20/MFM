"use client";
import { usePathname } from "next/navigation";
// import Sidebar from "./index";
import SidebarItem from "./SideBarItem";
import Link from "next/link";
const dashboardItems = [
  { label: "Home", path: "/dashboard" },
  { label: "Users", path: "/dashboard/users" },
  { label: "Roles", path: "/dashboard/roles" },
  { label: "Content", path: "/dashboard/content" },
  // { label: "Classroom", path: "/dashboard/classroom" },
];
const DefaultSideBar = () => {
  const pathname = usePathname();
  const checkActive = (label: string) => {
    const pathSegments = pathname.split("/");
    const active = pathSegments.find(
      (p) => p.toLowerCase() === label.toLowerCase()
    );

    return pathname.startsWith(label);
  };
  return (
    <>
      <>
        {dashboardItems.map((item) => (
          <Link href={item.path} key={item.label}>
            <SidebarItem active={checkActive(item.path)}>
              {item.label}
            </SidebarItem>
          </Link>
        ))}
      </>
    </>
  );
};

export default DefaultSideBar;
