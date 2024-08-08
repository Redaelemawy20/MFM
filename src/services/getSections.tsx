import getComponent from "@/com/getComponent";
import db from "@/db";

export async function getSections(page_slug: string) {
  const page = await db.page.findFirst({
    where: {
      name: page_slug,
    },
    include: {
      sections: {
        include: { section: true },
      },
    },
  });
  const sections = page?.sections;
  if (!sections) return null;
  const elments = [];
  for (let section of sections) {
    const found = getComponent(section.section.componentId);
    if (found) {
      const sectionData =
        Object.keys(section.data as Object).length === 0
          ? found.defaultData
          : section.data;
      elments.push(<found.component data={sectionData} key={section.id} />);
    }
  }
  return elments;
}
