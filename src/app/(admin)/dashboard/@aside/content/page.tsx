import CreatePageModal from "@/components/dashboard/factories/CreatePageModal";
import SidebarItem from "@/components/dashboard/sidebar/SideBarItem";
import SideBarWithBack from "@/components/dashboard/sidebar/SideBarWithBack";
import db from "@/db";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";

const AsideContent = async () => {
  const pages = await db.page.findMany();
  return (
    <SideBarWithBack>
      <h1 className="mx-2">Aside Content</h1>
      <Divider />
      {pages.map((p) => {
        return (
          <SidebarItem key={p.id}>
            <Link href={`/dashboard/content/${p.name}`}>{p.name}</Link>
          </SidebarItem>
        );
      })}
      <CreatePageModal />
    </SideBarWithBack>
  );
};

export default AsideContent;
