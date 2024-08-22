// "use client";
// import { usePathname } from "next/navigation";

import { Sidebar } from "./sidebar.styles";
import { SidebarItem } from "./sidebar-item";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { SidebarMenu } from "./sidebar-menu";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CollapseItems } from "./collapse-items";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import Image from "next/image";
import { getEntities } from "@/services/entityServices";
import { entityAdminPath } from "@/utils/router";

const DefaultSideBar = async () => {
  // const pathname = usePathname();
  const entities = await getEntities();
  let links = entities.map((e) => ({
    name: e.name,
    href: entityAdminPath(e.slug),
  }));

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
          <SidebarMenu title="Main Menu">
            <SidebarItem
              // isActive={pathname === "/accounts"}
              title="Accounts"
              icon={<AccountsIcon />}
              href="accounts"
            />
            <CollapseItems
              icon={<BalanceIcon />}
              items={links}
              title="Faculties"
            />
          </SidebarMenu>
        </div>
      </div>
    </>
  );
};

export default DefaultSideBar;
