import AddSectionModal from "@/components/dashboard/factories/AddSectionModal";
import SidebarItem from "@/components/dashboard/sidebar/SideBarItem";
import SideBarWithBack from "@/components/dashboard/sidebar/SideBarWithBack";
import db from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

const AsideContent = async ({ params }: { params: { p: string } }) => {
  const pagename = params.p;
  const page = await db.page.findUnique({
    where: {
      name: pagename,
    },
    include: {
      sections: {
        include: {
          section: true,
        },
      },
    },
  });
  const sections = await db.section.findMany();
  if (!page) return notFound();
  return (
    <SideBarWithBack>
      <div>
        <h1>{pagename} Page Sections</h1>
        <div className="flex flex-col">
          {page?.sections.map((s) => {
            return (
              <SidebarItem key={s.id}>
                <Link href={`/dashboard/content/${pagename}/${s.section.name}`}>
                  {s.section.name}
                </Link>
              </SidebarItem>
            );
          })}
        </div>
        <AddSectionModal sections={sections} page={pagename} />
      </div>
    </SideBarWithBack>
  );
};

export default AsideContent;
