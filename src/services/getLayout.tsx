import getComponent from "@/com/getComponent";
import db from "@/db";

export async function getLayout(entity_slug: string) {
  const entity = await db.entity.findFirst({
    where: { slug: entity_slug },
    include: {
      layoutItem: {
        include: {
          section: true,
        },
      },
    },
  });
  if (!entity) return null;
  let layout = {} as LayoutI;
  const layoutItems = entity?.layoutItem;
  if (!layoutItems) return layout;
  for (let layoutItem of layoutItems) {
    const section = layoutItem.section;
    const found = getComponent(section.componentId);
    const sectionData = layoutItem.data;
    if (found)
      layout[layoutItem.type as keyof LayoutI] = () => {
        return <found.component data={sectionData} />;
      };
  }
  return layout;
}

interface LayoutI {
  nav: () => React.ReactNode;
  footer: () => React.ReactNode;
}
