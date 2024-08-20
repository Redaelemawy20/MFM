"use client";
import Image from "next/image";
import { Sidebar } from "./sidebar.styles";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { SidebarMenu } from "./sidebar-menu";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { entityAdminPath } from "@/services/router";

const EntitySideBar = () => {
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
          <SidebarItem title="Home Page" icon={<HomeIcon />} href="/" />
          <SidebarMenu title="Main Menu">
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
        </div>
      </div>
    </>
  );
};

export default EntitySideBar;
