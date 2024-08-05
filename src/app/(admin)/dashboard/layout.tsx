"use client";

import React from "react";
import { useLockedBody } from "../../../hooks/useBodyLock";
import { NavbarWrapper } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar.styles";

interface Props {
  children: React.ReactNode;
  aside: React.ReactNode;
}

const Layout = ({ children, aside }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <section className="flex">
      <aside className="h-screen z-[20] sticky top-0">
        {sidebarOpen ? (
          <div className={Sidebar.Overlay()} onClick={handleToggleSidebar} />
        ) : null}
        <div
          className={Sidebar({
            collapsed: sidebarOpen,
          })}
        >
          {aside}
        </div>
      </aside>
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
export default Layout;
