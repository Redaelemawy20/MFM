import getComponent from "@/com/getComponent";
import db from "@/db";
import { notFound } from "next/navigation";

const HI = async ({ params }: { params: { slug: string } }) => {
  const page = await db.page.findFirst({
    where: { name: params.slug },
    include: {
      sections: {
        include: {
          section: true,
        },
      },
    },
  });
  if (!page) return notFound();

  const sections = page.sections.sort((a, b) => {
    let first = a.order ?? 0;
    let second = b.order ?? 0;
    if (first === -1) return 1;
    if (second === -1) return -1;
    return first - second;
  });
  const renderComponent = (section: any) => {
    const found = getComponent(section.section.componentId);
    if (!found) return null;
    const data =
      Object.keys(section.data).length === 0 ? found.defaultData : section.data;
    return <found.component data={data} key={section.id} />;
  };
  return (
    <div>
      {sections.map((s) => {
        return renderComponent(s);
      })}
    </div>
  );
};

export default HI;
