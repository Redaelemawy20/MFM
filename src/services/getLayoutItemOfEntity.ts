import db from "@/db";
import { SectionType } from "@prisma/client";

export async function getLayoutItemOfEntity(slug: string, type: SectionType) {
  const entityLayout = await db.layout.findMany({
    where: {
      entity: {
        slug,
      },
    },
  });
  const layoutItem = entityLayout.find((l) => l.type == type);
  return layoutItem;
}
