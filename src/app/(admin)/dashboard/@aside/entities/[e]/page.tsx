"use client";

import { BalanceIcon } from "@/components/dashboard/icons/sidebar/balance-icon";
import { HomeIcon } from "@/components/dashboard/icons/sidebar/home-icon";
import { PaymentsIcon } from "@/components/dashboard/icons/sidebar/payments-icon";
import { CollapseItems } from "@/components/dashboard/sidebar/collapse-items";
import { SidebarItem } from "@/components/dashboard/sidebar/sidebar-item";
import { SidebarMenu } from "@/components/dashboard/sidebar/sidebar-menu";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar.styles";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function () {
  const pathname = usePathname();

  return (
    <>
      <div className={Sidebar.Header()}>
        {/* <CompaniesDropdown /> */}
        <div className="flex content-between items-center">
          <div>Fauclty of Medicine</div>
          <Image
            alt="university logo"
            src={"/assets/imgs/logo.png"}
            height={"30"}
            width={"60"}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between h-full">
        <div className={Sidebar.Body()}>
          <SidebarItem
            title="Home"
            icon={<HomeIcon />}
            isActive={pathname === "/"}
            href="/"
          />
          <SidebarMenu title="Main Menu">
            <SidebarItem
              isActive={pathname === "/news"}
              title="News"
              href="news"
              icon={<PaymentsIcon />}
            />
            <SidebarItem
              isActive={pathname === "/staff"}
              title="Staff"
              href="staff"
            />
            <SidebarItem isActive={pathname === "/lists"} title="Lists" />
            <CollapseItems
              icon={<BalanceIcon />}
              items={["Page1", "Page2", "Page3"]}
              title="Pages"
            />
          </SidebarMenu>
        </div>
      </div>
    </>
  );
}
