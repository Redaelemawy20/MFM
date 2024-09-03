"use client";

import { Sidebar } from "./sidebar.styles";
import { SidebarItem } from "./sidebar-item";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { SidebarMenu } from "./sidebar-menu";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import Image from "next/image";
import { entityAdminPath } from "@/utils/router";
import { useParams, usePathname } from "next/navigation";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";

const DefaultSideBar = () => {
  const { e: entity_slug } = useParams<{ e: string }>();
  const pathname = usePathname();
  const entityPath = entityAdminPath(entity_slug);
  const newsRoute = entityPath + "/news";
  const listsRoute = entityPath + "/lists";
  const staffRoute = entityPath + "/staff";
  const pagesRoute = entityPath + "/pages";
  return (
    <>
      <div className={Sidebar.Header()}>
        {/* <CompaniesDropdown /> */}
        <div className="flex content-between items-center">
          <div>Menoufia University</div>
          <Image
            alt="university logo"
            src={"/assets/imgs/uni-logo.jpg"}
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
            // isActive={pathname === "/"}
            href="/"
          />
          <SidebarItem
            title="dashboard"
            icon={<HomeIcon />}
            // isActive={pathname === "/"}
            href="/dashboard"
          />
          <SidebarMenu title="Main Menu">
            <SidebarItem
              // isActive={pathname === "/accounts"}
              title="Accounts"
              icon={<AccountsIcon />}
              href="/dashboard/accounts"
            />
            <SidebarItem
              title="Faculities"
              icon={<HomeIcon />}
              href="/dashboard/entities"
            />
          </SidebarMenu>
          {entity_slug && (
            <SidebarMenu title={entity_slug}>
              <SidebarItem
                isActive={pathname === newsRoute}
                title="News"
                icon={<AccountsIcon />}
                href={newsRoute}
              />
              <SidebarItem
                isActive={pathname === listsRoute}
                title="Lists"
                icon={<AccountsIcon />}
                href={listsRoute}
              />
              <SidebarItem
                isActive={pathname === staffRoute}
                title="Staff"
                icon={<AccountsIcon />}
                href={staffRoute}
              />
              <SidebarItem
                isActive={pathname === pagesRoute}
                title="Pages"
                icon={<PaymentsIcon />}
                href={pagesRoute}
              />
            </SidebarMenu>
          )}
        </div>
      </div>
    </>
  );
};

export default DefaultSideBar;
