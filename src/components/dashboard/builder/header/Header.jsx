"use client";
import { usePathname } from "@/navigation";
import { insideAWebsite } from "@/utils/router";
import React from "react";
import WebsiteHeader from "./WebsiteHeader";
import AdminHeader from "./AdminHeader";
import { Avatar, AvatarIcon } from "@nextui-org/react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed flex items-center top-0 w-full z-20 bg-white shadow-md px-2">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {insideAWebsite(pathname) ? <WebsiteHeader /> : <AdminHeader />}
      </div>
      <Avatar
        icon={<AvatarIcon />}
        classNames={{
          base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
          icon: "text-black/80",
        }}
      />
    </header>
  );
}
