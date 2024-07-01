"use client";
import Sidebar from "@/components/dashboard/SideBar";
import BreadCrumbs from "@/components/dashboard/breadcrumbs/BreadCrumbs";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pathnameSegments = pathname
    .split("/")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1));
  return (
    <NextUIProvider>
      <div className="flex">
        <Sidebar />
        <div className="w-4/5 ">
          <BreadCrumbs
            segments={pathnameSegments}
            isDisabled={pathnameSegments.length === 1}
          />
          <div className="flex flex-col justify-center gap-2 items-center  h-screen ">
            {children}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
