"use client";
import Image from "next/image";
import { Sidebar } from "./sidebar.styles";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { SidebarMenu } from "./sidebar-menu";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";

interface EntitySidebarI {
  params: {};
}

const EntitySideBar = () => {
  const pathname = usePathname();

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
            title="Home Page"
            icon={<HomeIcon />}
            isActive={pathname === "/"}
            href="/"
          />
          <SidebarMenu title="Main Menu">
            <SidebarItem
              isActive={pathname === "/news"}
              title="News"
              icon={<AccountsIcon />}
              href="/news"
            />
            <SidebarItem
              isActive={pathname === "/lists"}
              title="Lists"
              icon={<AccountsIcon />}
              href="/lists"
            />
            <SidebarItem
              isActive={pathname === "/staff"}
              title="Staff"
              icon={<AccountsIcon />}
              href="/staff"
            />
            <SidebarItem
              isActive={pathname === "/pages"}
              title="Pages"
              icon={<PaymentsIcon />}
              href="/pages"
            />
          </SidebarMenu>
        </div>
      </div>
    </>
  );
};

export default EntitySideBar;
