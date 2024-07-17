import getComponent from "@/com/getComponent";
import db from "@/db";
import { notFound } from "next/navigation";

const HI = async ({ params }: { params: { slug: string } }) => {
  console.log({ params });

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
  // console.log({ page });

  const sections = page.sections;
  const renderComponent = (section: any) => {
    console.log(section);

    const found = getComponent(section.section.componentId);
    if (!found) return null;
    console.log("found");

    return <found.component data={section.data} key={section.id} />;
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
