import db from "@/db";
import { cache } from "react";

export const getEntityWithLayout = cache(async (entity_slug: string) => {
  return await db.entity.findFirst({
    where: { slug: entity_slug },
    include: {
      layoutItem: {
        include: {
          section: true,
        },
      },
    },
  });
});
export const getEntities = cache(async () => {
  return await db.entity.findMany();
});
export async function findWithStaff(entiy_slug: string) {
  const entity = await db.entity.findUnique({
    where: {
      slug: entiy_slug,
    },
    include: {
      staff: true,
    },
  });
  return entity;
}
