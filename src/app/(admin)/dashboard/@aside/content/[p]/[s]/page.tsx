import getComponent from "@/com/getComponent";
import SideBarEdit from "@/components/dashboard/sidebar/SideBarEdit";
import SideBarWithBack from "@/components/dashboard/sidebar/SideBarWithBack";
import db from "@/db";
import { notFound } from "next/navigation";
const SectionPage = async ({
  params,
}: {
  params: { p: string; s: string };
}) => {
  const section = await db.pageSections.findFirst({
    where: {
      page: {
        name: params.p,
      },
      section: {
        name: params.s,
      },
    },
    include: {
      section: true,
    },
  });
  if (!section) return notFound();

  const sectionDetails = getComponent(section?.section.componentId || "");
  if (!sectionDetails) return notFound();

  return (
    <SideBarWithBack>
      <SideBarEdit section={section} />
    </SideBarWithBack>
  );
};

export default SectionPage;
