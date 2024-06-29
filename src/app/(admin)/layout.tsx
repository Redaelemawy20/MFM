import Sidebar from "@/components/dashboard/SideBar";
import { NextUIProvider } from "@nextui-org/react";
export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <div className="flex">
        <Sidebar />

        <div className="flex w-4/5 items-center justify-center h-screen">
          {" "}
          {children}
        </div>
      </div>
    </NextUIProvider>
  );
}
